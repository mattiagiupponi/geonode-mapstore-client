/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Observable } from 'rxjs';
import { mapSelector } from '@mapstore/framework/selectors/map';
import { layersSelector, groupsSelector } from '@mapstore/framework/selectors/layers';
import { backgroundListSelector } from '@mapstore/framework/selectors/backgroundselector';
import { mapOptionsToSaveSelector } from '@mapstore/framework/selectors/mapsave';
import {
    textSearchConfigSelector,
    bookmarkSearchConfigSelector
} from '@mapstore/framework/selectors/searchconfig';
import { saveMapConfiguration } from '@mapstore/framework/utils/MapUtils';
import { getConfigProp } from '@mapstore/framework/utils/ConfigUtils';
import { currentStorySelector } from '@mapstore/framework/selectors/geostory';
import { userSelector } from '@mapstore/framework/selectors/security';
import { TOGGLE_CONTROL } from '@mapstore/framework/actions/controls';
import { error, success } from '@mapstore/framework/actions/notifications';

import {
    creatMapStoreMap,
    updateMapStoreMap
} from '@js/api/geonode/adapter';
import {
    SAVE_CONTENT,
    UPDATE_RESOURCE_BEFORE_SAVE,
    saveSuccess,
    saveError,
    savingResource
} from '@js/actions/gnsave';
import {
    resourceLoading,
    setResource,
    resourceError,
    updateResourceProperties
} from '@js/actions/gnresource';
import {
    getResourceByPk,
    createGeoStory,
    updateGeoStory
} from '@js/api/geonode/v2';
import { parseDevHostname } from '@js/utils/APIUtils';
import uuid from 'uuid';

const SaveAPI = {
    map: (state, id, metadata, reload) => {
        const map =  mapSelector(state) || {};
        const layers = layersSelector(state);
        const groups = groupsSelector(state);
        const backgrounds = backgroundListSelector(state);
        const textSearchConfig = textSearchConfigSelector(state);
        const bookmarkSearchConfig = bookmarkSearchConfigSelector(state);
        const additionalOptions = mapOptionsToSaveSelector(state);
        const data = saveMapConfiguration(
            map,
            layers,
            groups,
            backgrounds,
            textSearchConfig,
            bookmarkSearchConfig,
            additionalOptions
        );
        const name = metadata.name;
        const description = metadata.description;
        const thumbnail = metadata.thumbnail;
        const body = {
            name,
            data,
            attributes: [{
                type: 'string',
                name: 'title',
                value: name,
                label: 'Title'
            },
            {
                type: 'string',
                name: 'abstract',
                value: description,
                label: 'Abstract'
            },
            ...(thumbnail
                ? [{
                    type: 'string',
                    name: 'thumbnail',
                    value: thumbnail,
                    label: 'Thumbnail'
                }]
                : [])
            ]
        };
        return id
            ? updateMapStoreMap(id, { ...body, id })
            : creatMapStoreMap(body)
                .then((response) => {
                    if (reload) {
                        window.location.href = parseDevHostname(`${getConfigProp('geonodeUrl')}maps/${response.id}/edit`);
                    }
                    return response.data;
                });
    },
    geostory: (state, id, metadata, reload) => {
        const story = currentStorySelector(state);
        const user = userSelector(state);
        const body = {
            'title': metadata.name,
            'abstract': metadata.description,
            'data': JSON.stringify(story),
            'thumbnail_url': metadata.thumbnail
        };
        return id
            ? updateGeoStory(id, body)
            : createGeoStory({
                'name': metadata.name + ' ' + uuid(),
                'owner': user.name,
                ...body
            }).then((response) => {
                if (reload) {
                    window.location.href = parseDevHostname(`${getConfigProp('geonodeUrl')}apps/${response.pk}/edit`);
                }
                return response.data;
            });
    }
};

export const gnSaveContent = (action$, store) =>
    action$.ofType(SAVE_CONTENT, TOGGLE_CONTROL)
        .switchMap((action) => {
            const controls = ['save', 'saveAs'];
            // handle only save and saveAs toggle controls
            if(action.control && !controls.includes(action.control)) {
                return Observable.empty();
            }
            const state = store.getState();
            const contentType = state.gnresource?.type || 'map';
            const resourceId = action.id || state.gnresource?.data?.pk
            const metadata = action.metadata || {...state.gnresource?.data, name: state.gnresource?.data?.title,
                     thumbnail: state.gnresource?.data?.thumbnail_url, description: state.gnresource?.data?.abstract}
            console.log({metadata, action});         
            //  if there is no metadata, shows the user opened the map
            return !metadata.name ? Observable.empty() : Observable.defer(() => SaveAPI[contentType](state, resourceId, metadata, action.reload))
                .switchMap((response) => {
                    return Observable.of(
                        saveSuccess(response),
                        updateResourceProperties({
                            'title': metadata?.name,
                            'abstract': metadata?.description,
                            'thumbnail_url': metadata?.thumbnail
                        }),
                        success({title: "map.savedMapTitle",  message: "map.savedMapMessage"})
                    );
                })
                .catch((err) => {
                    return Observable.of(saveError(err.data && err.data[0] || err.message), error({title: "map.mapError.errorTitle", message: err.data && err.data[0] || err.message || "map.mapError.errorDefault"}));
                })
                .startWith(savingResource());
        });

export const gnUpdateResource = (action$, store) =>
    action$.ofType(UPDATE_RESOURCE_BEFORE_SAVE)
        .switchMap((action) => {
            const state = store.getState();
            const currentResource = state.gnresource?.data || {};
            if ( !action.id
            || currentResource.pk && action.id && currentResource.pk + '' === action.id + '') {
                return Observable.empty();
            }
            return Observable.defer(() => getResourceByPk(action.id))
                .switchMap((resource) => {
                    return Observable.of(setResource(resource));
                })
                .catch((error) => {
                    return Observable.of(resourceError(error.data || error.message));
                })
                .startWith(resourceLoading());
        });

export default {
    gnSaveContent,
    gnUpdateResource
};

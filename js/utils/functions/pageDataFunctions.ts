import { StaticPath, DynamicPageData } from '../types/GlobalData';

import {allPlacesPagesData} from '../data/PlacesPageData';

const getAllPlacesIds = () : StaticPath[] => {
    return allPlacesPagesData.map(({id}) => ({
        params: {
            pid: id,
        }
    }));
}

const getPlaceDataById = (id: string) : DynamicPageData | undefined => {    
    return allPlacesPagesData.find(({id: pageId}) => pageId === id);
}

export {
    getAllPlacesIds,
    getPlaceDataById
};
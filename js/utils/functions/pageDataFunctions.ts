import { StaticPath, DynamicPageData } from '../types/GlobalData';

import {allPlacesPagesData} from '../data/PlacesPagesData';
import {allArticlesPagesData} from '../data/ArticlePagesData';

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

const getAllArticlesIds = () : StaticPath[] => {
    return allArticlesPagesData.map(({id}) => ({
        params: {
            pid: id,
        }
    }));
}

const getArticleDataById = (id: string) : DynamicPageData | undefined => {
    return allArticlesPagesData.find(({id: pageId}) => pageId === id);
}

export {
    getAllPlacesIds,
    getPlaceDataById,
    getAllArticlesIds,
    getArticleDataById
};
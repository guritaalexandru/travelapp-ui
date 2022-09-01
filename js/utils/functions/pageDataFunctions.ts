import { StaticPath, DynamicPageData } from '../types/GlobalData';
import { PlacesPagesPathsResponse } from '../types/FetchTypes';

import { API_URL } from '../constants/generalConstants';

import {allArticlesPagesData} from '../data/ArticlePagesData';

const getAllPlacesPaths = async () : Promise<StaticPath[]> => {
    const pathData = await fetch(`${API_URL}/api/places-pages/paths`);
    const pathDataJson : PlacesPagesPathsResponse = await pathData.json();
    const { placesPaths } = pathDataJson;

    return placesPaths.map( path => ({
        params: {
            pid: path,
        }
    }));
}

const getPlaceDataByPath = async (path: string) : Promise<DynamicPageData> => {
    const pathData = await fetch(`${API_URL}/api/places-pages/${path}`);
    const pathDataJson : DynamicPageData = await pathData.json();
    
    return pathDataJson;
}

const getAllArticlesIds = () : StaticPath[] => {
    return allArticlesPagesData.map(({href}) => ({
        params: {
            pid: href,
        }
    }));
}

const getArticleDataById = (href: string) : DynamicPageData | undefined => {
    return allArticlesPagesData.find(({href: pageId}) => pageId === href);
}

export {
    getAllPlacesPaths,
    getPlaceDataByPath,
    getAllArticlesIds,
    getArticleDataById
};
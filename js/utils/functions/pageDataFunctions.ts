import { StaticPath } from '../types/GlobalData';
import { DynamicPageData } from '../types/DynamicData';
import { PagesPathsResponse } from '../types/FetchTypes';

import { API_URL } from '../constants/generalConstants';

const getDynamicPageData = async (type : 'homepage' | 'place' | 'article', path?: string) : Promise<DynamicPageData> => {
    let data, dataJson, usefulData;

    switch (type) {
        case 'homepage':
            data = await fetch(`${API_URL}/api/homepage?populate=deep`);
            dataJson = await data.json();
            usefulData = dataJson?.data?.attributes;
            break;

        case 'place':
            data = await fetch(`${API_URL}/api/places-pages?filters[href][$eq]=${path}&populate=deep`);
            dataJson = await data.json();
            usefulData = dataJson?.data[0]?.attributes;
            break;

        case 'article':
            data = await fetch(`${API_URL}/api/articles-pages?filters[href][$eq]=${path}&populate=deep`);
            dataJson = await data.json();
            usefulData = dataJson?.data[0]?.attributes;
            break;
    }

    return usefulData;
}

const getHomepageData = async () : Promise<DynamicPageData> => {
    return await getDynamicPageData('homepage');
}

const getPlaceDataByPath = async (path: string) : Promise<DynamicPageData> => {
    return await getDynamicPageData('place', path);
}

const getArticleDataByPath = async (path: string) : Promise<DynamicPageData> => {
    return await getDynamicPageData('article', path);
}

const getPagesPaths = async (type: 'places' | 'articles') : Promise<StaticPath[]> => {
    let data;

    switch (type) {
        case 'places':
            data = await fetch(`${API_URL}/api/places-pages/paths`);
            break;

        case 'articles':
            data = await fetch(`${API_URL}/api/articles-pages/paths`);
            break;
    }

    let dataJson : PagesPathsResponse = await data.json();

    const {paths} = dataJson;

    return paths.map( path => ({
        params: {
            pid: path,
        }
    }));
}

const getAllPlacesPaths = async () : Promise<StaticPath[]> => {
    return await getPagesPaths('places');
}

const getAllArticlesPaths = async () : Promise<StaticPath[]> => {
    return await getPagesPaths('articles');
}

export {
    getAllPlacesPaths,
    getPlaceDataByPath,
    getAllArticlesPaths,
    getArticleDataByPath,
    getHomepageData,
};
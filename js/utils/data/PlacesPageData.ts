import { 
    HeroSectionData, 
    ArticleSectionData, 
    SocialSectionData,
    SectionData,
    DynamicPageData
} from "../types/GlobalData";

const heroSectionData: HeroSectionData = {
    type: 'HeroSection',
    title: ' Places Hero Title',
    description: 'Description',
    imgHref: 'https://traveluibucket.s3.eu-central-1.amazonaws.com/HeroPlaceholder.png',
    // imgHref: 'https://traveluibucket.s3.eu-central-1.amazonaws.com/FJ7B3435.jpg',
    imgAlt: 'Hero Image Alt',
};

const articleSectionData01: ArticleSectionData = {
    id: 1,
    type: 'ArticleSection',
    title: 'Best places to see',
    description: 'Article Description 1',
    imgHref: 'https://traveluibucket.s3.eu-central-1.amazonaws.com/HighlitedCardPlaceholder1.png',
    imgAlt: 'Article Image Alt 1',
    buttonText: 'Article Button Text 1',
    buttonHref: '/places/best',
    position: 'RIGHT',
};

const articleSectionData02: ArticleSectionData = {
    id: 2,
    type: 'ArticleSection',
    title: 'Explore the city',
    description: 'Article Description 2',
    imgHref: 'https://traveluibucket.s3.eu-central-1.amazonaws.com/HighlitedCardPlaceholder2.png',
    imgAlt: 'Article Image Alt 2',
    buttonText: 'Article Button Text 2',
    buttonHref: '/places/city',
    position: 'LEFT',
};

const articleSectionData03: ArticleSectionData = {
    id: 3,
    type: 'ArticleSection',
    title: 'Adventure in the countryside',
    description: 'Article Description 3',
    imgHref: 'https://traveluibucket.s3.eu-central-1.amazonaws.com/HighlitedCardPlaceholder3.png',
    imgAlt: 'Article Image Alt 3',
    buttonText: 'Article Button Text 3',
    buttonHref: '/places/countryside',
    position: 'RIGHT',
};

const socialSectionData: SocialSectionData = {
    type: 'SocialSection',
    title: 'Social Title',
};

const place1SectionsData : SectionData[] = [
    heroSectionData,
    articleSectionData01,
    articleSectionData02,
    articleSectionData03,
    socialSectionData,
]

const place1PageData : DynamicPageData = {
    id: 'best',
    title: 'Best places',
    sections: place1SectionsData,
}

const place2PageData : DynamicPageData = {
    id: 'countryside',
    title: 'Countryside',
    sections: place1SectionsData,
}

const place3PageData : DynamicPageData = {
    id: 'city',
    title: 'Cities',
    sections: place1SectionsData,
}

const allPlacesPagesData : DynamicPageData[] = [
    place1PageData,
    place2PageData,
    place3PageData,
]

export {
    heroSectionData,
    articleSectionData01,
    articleSectionData02,
    articleSectionData03,
    socialSectionData,
    place1PageData,
    allPlacesPagesData,
}
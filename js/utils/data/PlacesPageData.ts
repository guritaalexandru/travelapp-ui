import { 
    HeroSectionData, 
    ArticleSectionData, 
    SocialSectionData 
} from "../types/GlobalData";

const heroSectionData: HeroSectionData = {
    title: ' Places Hero Title',
    description: 'Description',
    imgHref: 'https://traveluibucket.s3.eu-central-1.amazonaws.com/HeroPlaceholder.png',
    // imgHref: 'https://traveluibucket.s3.eu-central-1.amazonaws.com/FJ7B3435.jpg',
    imgAlt: 'Hero Image Alt',
};

const articleSectionData01: ArticleSectionData = {
    id: 1,
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
    title: 'Adventure in the countryside',
    description: 'Article Description 3',
    imgHref: 'https://traveluibucket.s3.eu-central-1.amazonaws.com/HighlitedCardPlaceholder3.png',
    imgAlt: 'Article Image Alt 3',
    buttonText: 'Article Button Text 3',
    buttonHref: '/places/countryside',
    position: 'RIGHT',
};

const socialSectionData: SocialSectionData = {
    title: 'Social Title',
};

export {
    heroSectionData,
    articleSectionData01,
    articleSectionData02,
    articleSectionData03,
    socialSectionData
}
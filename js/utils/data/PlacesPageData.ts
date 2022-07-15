import { 
    HighlightedSectionData, 
    HeroSectionData, 
    ArticleSectionData, 
    SocialSectionData 
} from "../types/HomepageData";

const heroSectionData: HeroSectionData = {
    title: ' Homepage Hero Title',
    description: 'Description',
    buttonText: 'Hero Button Text',
    buttonHref: '/hero-button-href',
    imgHref: 'https://traveluibucket.s3.eu-central-1.amazonaws.com/HeroPlaceholder.png',
    // imgHref: 'https://traveluibucket.s3.eu-central-1.amazonaws.com/FJ7B3435.jpg',
    imgAlt: 'Hero Image Alt',
};

const highlightedSectionData: HighlightedSectionData = {
    highlightedCards: [
        {
            title: 'Highlighted Card Title',
            imgHref: 'https://traveluibucket.s3.eu-central-1.amazonaws.com/HighlitedCardPlaceholder1.png',
            imgAlt: 'Highlighted Card Image Alt',
            buttonText: 'Highlighted Card Button Text',
            buttonHref: '/highlighted-card-button-href',
        },
        {
            title: 'Highlighted Card Title 2',
            imgHref: 'https://traveluibucket.s3.eu-central-1.amazonaws.com/HighlitedCardPlaceholder2.png',
            imgAlt: 'Highlighted Card Image Alt',
            buttonText: 'Highlighted Card Button Text 2',
            buttonHref: '/highlighted-card-button-href',
        },
        {
            title: 'Highlighted Card Title 3',
            imgHref: 'https://traveluibucket.s3.eu-central-1.amazonaws.com/HighlitedCardPlaceholder3.png',
            imgAlt: 'Highlighted Card Image Alt',
            buttonText: 'Highlighted Card Button Text 3',
            buttonHref: '/highlighted-card-button-href',
        }
    ]
};

const articleSectionData01: ArticleSectionData = {
    id: 1,
    title: 'Article Title 1',
    description: 'Article Description 1',
    imgHref: 'https://traveluibucket.s3.eu-central-1.amazonaws.com/HighlitedCardPlaceholder1.png',
    imgAlt: 'Article Image Alt 1',
    buttonText: 'Article Button Text 1',
    buttonHref: '/article-button-href',
    position: 'RIGHT',
};

const articleSectionData02: ArticleSectionData = {
    id: 2,
    title: 'Article Title 2',
    description: 'Article Description 2',
    imgHref: 'https://traveluibucket.s3.eu-central-1.amazonaws.com/HighlitedCardPlaceholder2.png',
    imgAlt: 'Article Image Alt 2',
    buttonText: 'Article Button Text 2',
    buttonHref: '/article-button-href',
    position: 'LEFT',
};

const articleSectionData03: ArticleSectionData = {
    id: 3,
    title: 'Article Title 3',
    description: 'Article Description 3',
    imgHref: 'https://traveluibucket.s3.eu-central-1.amazonaws.com/HighlitedCardPlaceholder3.png',
    imgAlt: 'Article Image Alt 3',
    buttonText: 'Article Button Text 3',
    buttonHref: '/article-button-href',
    position: 'RIGHT',
};

const socialSectionData: SocialSectionData = {
    title: 'Social Title',
};

export {
    heroSectionData,
    highlightedSectionData,
    articleSectionData01,
    articleSectionData02,
    articleSectionData03,
    socialSectionData
}
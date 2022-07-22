interface StaticPath {
    params: {
        pid: string;
    }
};

interface DynamicPageData {
    id: string;
    title: string;
    sections: SectionData[];
}

type SectionData = HeroSectionData | ArticleSectionData | SocialSectionData;

type SectionType = 'HeroSection' | 'ArticleSection' | 'SocialSection';
interface HeroSectionData {
    type: 'HeroSection';
    title: string,
    description: string,
    imgHref: string,
    imgAlt: string,
}

interface WithButtonHeroSectionData extends HeroSectionData {
    buttonText: string,
    buttonHref: string,
}

interface HighlightedSectionData {
    highlightedCards: HighlightedCard[];
}

interface HighlightedCardData {
    title: string;
    imgHref: string;
    imgAlt: string;
    buttonText: string;
    buttonHref: string;
}

interface ArticleSectionData {
    type: 'ArticleSection';
    id: number;
    title: string;
    description: string;
    imgHref: string;
    imgAlt: string;
    buttonText: string;
    buttonHref: string;
    position: 'LEFT' | 'RIGHT';
}

interface SocialSectionData {
    type: 'SocialSection';
    title: string;
}

export {
    StaticPath,
    DynamicPageData,
    SectionData,
    HeroSectionData,
    WithButtonHeroSectionData, 
    HighlightedSectionData,
    HighlightedCardData,
    ArticleSectionData,
    SocialSectionData
}
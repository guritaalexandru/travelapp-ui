interface StaticPath {
    params: {
        pid: string;
    }
};

interface DynamicPageData {
    id: string;
    title: string;
    sections: (HeroSectionData | ResourceBasicPreviewData | SocialSectionData)[];
}

type SectionType = 'HeroSection' | 'ResourceBasicPreview' | 'SocialSection';
interface HeroSectionData {
    id: string;
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
    highlightedCards: HighlightedCardData[];
}

interface HighlightedCardData {
    title: string;
    imgHref: string;
    imgAlt: string;
    buttonText: string;
    buttonHref: string;
}

interface ResourceBasicPreviewData {
    type: 'ResourceBasicPreview';
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
    id: string;
    type: 'SocialSection';
    title: string;
}

export {
    StaticPath,
    DynamicPageData,
    HeroSectionData,
    WithButtonHeroSectionData, 
    HighlightedSectionData,
    HighlightedCardData,
    ResourceBasicPreviewData,
    SocialSectionData
}
interface StaticPath {
    params: {
        pid: string;
    }
};

type SectionData = T1HeroSectionData | T2HeroSectionData | ResourceBasicPreviewData | SocialSectionData;

interface DynamicPageData {
    id: string;
    title: string;
    sections: SectionData[];
}

type SectionType = 'T1HeroSection' | 'T2HeroSection' | 'ResourceBasicPreview' | 'SocialSection';
interface T1HeroSectionData {
    id: string;
    type: 'T1HeroSection';
    title: string,
    description: string,
    imgHref: string,
    imgAlt: string,
}

interface T2HeroSectionData extends T1HeroSectionData {
    type: 'T2HeroSection';
    mapsReference: MapsReferenceData;
}

interface WithButtonT1HeroSectionData extends T1HeroSectionData {
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

type MapsReferenceData = {
    id: string;
    name: string;
    googleMapsHref: string;
    appleMapsHref: string;
}

export {
    StaticPath,
    DynamicPageData,
    SectionData,
    T1HeroSectionData,
    T2HeroSectionData,
    WithButtonT1HeroSectionData, 
    HighlightedSectionData,
    HighlightedCardData,
    ResourceBasicPreviewData,
    SocialSectionData,
    MapsReferenceData
}
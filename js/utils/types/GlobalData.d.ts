interface StaticPath {
    params: {
        pid: string;
    }
};

interface SimpleButtonData {
    text: string;
    href: string;
}

type SectionData = T1HeroSectionData | T2HeroSectionData | ResourceBasicPreviewData | SocialSectionData | QuickDirectionsData;

interface DynamicPageData {
    id: string;
    title: string;
    description: string;
    sections: SectionData[];
}

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
    buttonCTA: SimpleButtonData;
}

interface HighlightedSectionData {
    highlightedCards: HighlightedCardData[];
}

interface HighlightedCardData {
    title: string;
    imgHref: string;
    imgAlt: string;
    buttonCTA: SimpleButtonData;
}

interface ResourceBasicPreviewData {
    type: 'ResourceBasicPreview';
    id: number;
    title: string;
    description: string;
    imgHref: string;
    imgAlt: string;
    buttonCTA: SimpleButtonData;
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

type QuickDirectionsData = {
    id: string;
    type: 'QuickDirections';
    upperText: string;
    instructionCards: {
        icon: 'PLANE' | 'TRAIN' | 'BUS';
        destination: string;
    }[];
    buttonCTA: SimpleButtonData;
}

export {
    StaticPath,
    SimpleButtonData,
    DynamicPageData,
    SectionData,
    T1HeroSectionData,
    T2HeroSectionData,
    WithButtonT1HeroSectionData, 
    HighlightedSectionData,
    HighlightedCardData,
    ResourceBasicPreviewData,
    SocialSectionData,
    QuickDirectionsData,
    MapsReferenceData
}
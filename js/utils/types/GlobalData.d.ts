interface StaticPath {
    params: {
        pid: string;
    }
};

interface SimpleButtonData {
    text: string;
    href: string;
}

interface ImageData {
    alternativeText: string,
    url: string,
    formats: {
        small: {
            url: string,
        } | undefined,
        medium: {
            url: string,
        } | undefined,
        large: {
            url: string,
        } | undefined,
        thumbnail: {
            url: string,
        },
    },
}

type SectionData = T1HeroSectionData | T2HeroSectionData | ResourceBasicPreviewData | SocialSectionData;

interface DynamicSection {
    id: number,
    order: number,
}

interface DynamicPageData {
    id: string;
    title: string;
    description: string;
    href: string;
    sections: SectionData[];
}

interface T1HeroSectionData extends DynamicSection {
    __component: 'dynamic-s.t1-hero-ref',
    t1hero: {
        id: number,
        title: string,
        description: string,
        backgroundImage: ImageData,
    }
}

interface T2HeroSectionData extends DynamicSection {
    __component: 'dynamic-s.t2-hero-ref',
    t2hero: {
        id: number,
        title: string,
        description: string,
        image: ImageData,
        mapsReference: MapsReferenceData
    }
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

interface ResourceBasicPreviewData extends DynamicSection {
    __component: 'dynamic-s.rbp-ref',
    rbp: {
        id: number;
        title: string;
        description: string;
        image: ImageData;
        buttonCTA: SimpleButtonData;
        position: 'LEFT' | 'RIGHT';
    }
}

interface SocialSectionData extends DynamicSection {
    id: string;
    __component: 'dynamic-s.social-ref';
    title: string;
}

type MapsReferenceData = {
    id: string;
    name: string;
    googleMapsHref: string;
    appleMapsHref: string;
}

// type QuickDirectionsData = {
//     id: string;
//     __component: 'dynamic-s.t2-hero-ref',
//     upperText: string;
//     instructionCards: {
//         icon: 'PLANE' | 'TRAIN' | 'BUS';
//         destination: string;
//     }[];
//     buttonCTA: SimpleButtonData;
// }

export {
    StaticPath,
    ImageData,
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
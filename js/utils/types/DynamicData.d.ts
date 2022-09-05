import {SimpleButtonData} from './GlobalData';
interface DynamicPageProps {
    pageData: DynamicPageData
}

interface DynamicPageData {
    id: string;
    title: string;
    description: string;
    href: string;
    sections: SectionData[];
}

type SectionData =
    | T1HeroSectionData
    | T2HeroSectionData
    | ResourceBasicPreviewData
    | SocialSectionData
    | HighlightedSectionData
    | QuickDirectionsData;

interface DynamicSection {
    id: number;
    order: number;
}

interface T1HeroSectionData extends DynamicSection {
    __component: "dynamic-s.t1-hero-ref";
    t1hero: {
        data: {
            attributes: T1HeroSectionDataAttributes;
        } | null;
    } | null;
}

interface T1HeroSectionDataAttributes {
    id: number;
    title: string;
    description: string;
    backgroundImage: ImageData | null;
    buttonCTA: SimpleButtonData;
}

interface T2HeroSectionData extends DynamicSection {
    __component: "dynamic-s.t2-hero-ref";
    t2hero: {
        data: {
            attributes: T2HeroSectionDataAttributes;
        } | null;
    } | null;
}

interface T2HeroSectionDataAttributes {
    id: number;
    title: string;
    description: string;
    image: ImageData | null;
    mapsReference: MapsReferenceData | null;
};

interface ResourceBasicPreviewData extends DynamicSection {
    __component: "dynamic-s.rbp-ref";
    rbp: {
        data: {
            attributes: ResourceBasicPreviewDataAttributes;
        } | null;
    } | null;
}

interface ResourceBasicPreviewDataAttributes {
    id: number;
    title: string;
    description: string;
    image: ImageData | null;
    buttonCTA: SimpleButtonData;
    position: "LEFT" | "RIGHT";
};

interface SocialSectionData extends DynamicSection {
    __component: "dynamic-s.social-ref";
    socialRef: {
        data: {
            attributes: SocialSectionDataAttributes;
        } | null;
    } | null;
}

interface SocialSectionDataAttributes {
    id: number;
    title: string;
}

interface HighlightedSectionData extends DynamicSection {
    __component: "dynamic-s.hl-cards-ref";
    HLCards: {
        data: {
            attributes: HighlightedSectionDataAttributes;
        } | null;
    } | null;
}

interface HighlightedSectionDataAttributes {
    id: number;
    title: string;
    highlightedCards: HighlightedCardData[];
}

interface QuickDirectionsData extends DynamicSection {
    __component: 'dynamic-s.quick-dir-ref',
    quickDir: {
        data: {
            attributes: QuickDirectionsDataAttributes;
        } | null
    } | null;
}

interface QuickDirectionsDataAttributes {
    id: number;
    upperText: string;
    directionCards: {
        icon: 'PLANE' | 'TRAIN' | 'BUS';
        destination: string;
    }[];
    buttonCTA: SimpleButtonData;
}

interface HighlightedCardData {
    title: string;
    image: ImageData | null;
    buttonCTA: SimpleButtonData;
}

type MapsReferenceData = {
    data: {
        attributes: MapsReferenceDataAttributes;
    } | null
};

interface MapsReferenceDataAttributes {
    id: string;
    name: string;
    googleMapsHref: string;
    appleMapsHref: string;
}

interface ImageData {
    data: {
        attributes: {
            name: string;
            alternativeText: string;
            url: string;
            size: number;
            formats: {
                small:
                | {
                    url: string;
                    size: number;
                }
                | undefined;
                medium:
                | {
                    url: string;
                    size: number;
                }
                | undefined;
                large:
                | {
                    url: string;
                    size: number;
                }
                | undefined;
                thumbnail: {
                    url: string;
                    size: number;
                };
            };
        };
    } | null;
}

export{
    DynamicPageProps,
    DynamicPageData,
    SectionData,
    T1HeroSectionDataAttributes,
    T2HeroSectionDataAttributes,
    ResourceBasicPreviewDataAttributes,
    SocialSectionDataAttributes,
    HighlightedSectionDataAttributes,
    HighlightedCardData,
    ImageData,
    MapsReferenceDataAttributes,
    QuickDirectionsDataAttributes,
}
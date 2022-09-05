import {SimpleButtonData} from './GlobalData';

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
    | HighlightedSectionData;

interface DynamicSection {
    id: number;
    order: number;
}

interface T1HeroSectionData extends DynamicSection {
    __component: "dynamic-s.t1-hero-ref";
    t1hero: {
        data: {
            attributes: {
                id: number;
                title: string;
                description: string;
                backgroundImage: ImageData;
                buttonCTA: SimpleButtonData;
            };
        };
    };
}

interface T2HeroSectionData extends DynamicSection {
    __component: "dynamic-s.t2-hero-ref";
    t2hero: {
        data: {
            attributes: {
                id: number;
                title: string;
                description: string;
                image: ImageData;
                mapsReference: MapsReferenceData;
            };
        };
    };
}

interface ResourceBasicPreviewData extends DynamicSection {
    __component: "dynamic-s.rbp-ref";
    rbp: {
        data: {
            attributes: {
                id: number;
                title: string;
                description: string;
                image: ImageData;
                buttonCTA: SimpleButtonData;
                position: "LEFT" | "RIGHT";
            };
        };
    };
}

interface SocialSectionData extends DynamicSection {
    __component: "dynamic-s.social-ref";
    socialRef: {
        data: {
            attributes: {
                id: number;
                title: string;
            };
        };
    };
}

interface HighlightedSectionData extends DynamicSection {
    __component: "dynamic-s.hl-cards-ref";
    HLCards: {
        data: {
            attributes: {
                title: string;
                highlightedCards: HighlightedCardData[];
            }
        };
    };
}

interface HighlightedCardData {
    title: string;
    image: ImageData;
    buttonCTA: SimpleButtonData;
}

type MapsReferenceData = {
    data: {
        attributes: {
            id: string;
            name: string;
            googleMapsHref: string;
            appleMapsHref: string;
        }
    }
};

interface ImageData {
    data: {
        attributes: {
            alternativeText: string;
            url: string;
            formats: {
                small:
                | {
                    url: string;
                }
                | undefined;
                medium:
                | {
                    url: string;
                }
                | undefined;
                large:
                | {
                    url: string;
                }
                | undefined;
                thumbnail: {
                    url: string;
                };
            };
        };
    };
}

export{
    DynamicPageData,
    SectionData,
    T1HeroSectionData,
    T2HeroSectionData,
    ResourceBasicPreviewData,
    SocialSectionData,
    HighlightedSectionData,
    HighlightedCardData,
    ImageData,
    MapsReferenceData,
}
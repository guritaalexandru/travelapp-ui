interface StaticPath {
    params: {
        pid: string;
    };
}

interface SimpleButtonData {
    text: string;
    href: string;
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
    SimpleButtonData,
    HighlightedSectionData,
    HighlightedCardData,
    QuickDirectionsData,
};

interface HeroSectionData {
    title: string,
    description: string,
    buttonText: string,
    buttonHref: string,
    imgHref: string,
    imgAlt: string,
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
    title: string;
}

export {
    HeroSectionData,
    HighlightedSectionData,
    HighlightedCardData,
    ArticleSectionData,
    SocialSectionData
}
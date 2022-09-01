import { 
    ResourceBasicPreviewData, 
} from "../types/GlobalData";

const resourceBasicPreviewsJson : ResourceBasicPreviewData[] = [
    {
        id: 0,
        type: 'ResourceBasicPreview',
        title: 'Best places to see',
        description: 'Article Description 1',
        imgHref: 'https://traveluibucket.s3.eu-central-1.amazonaws.com/HighlitedCardPlaceholder1.png',
        imgAlt: 'Article Image Alt 1',
        buttonCTA: {
            text: 'Article Button Text 1',
            href: '/places/best',
        },
        position: 'RIGHT',
    },
    {
        id: 1,
        type: 'ResourceBasicPreview',
        title: 'Explore the city',
        description: 'Article Description 2',
        imgHref: 'https://traveluibucket.s3.eu-central-1.amazonaws.com/HighlitedCardPlaceholder2.png',
        imgAlt: 'Article Image Alt 2',
        buttonCTA: {
            text: 'Article Button Text 2',
            href: '/places/city',
        },
        position: 'LEFT',
    },
    {
        id: 2,
        type: 'ResourceBasicPreview',
        title: 'Adventure in the countryside',
        description: 'Article Description 3',
        imgHref: 'https://traveluibucket.s3.eu-central-1.amazonaws.com/HighlitedCardPlaceholder3.png',
        imgAlt: 'Article Image Alt 3',
        buttonCTA: {
            text: 'Article Button Text 3',
            href: '/places/countryside',
        },
        position: 'RIGHT',
    },
    {
        id: 3,
        type: 'ResourceBasicPreview',
        title: 'Journey in the countryside',
        description: 'Article Description 1',
        imgHref: 'https://traveluibucket.s3.eu-central-1.amazonaws.com/HighlitedCardPlaceholder1.png',
        imgAlt: 'Article Image Alt 1',
        buttonCTA: {
            text: 'Article Button Text 1',
            href: '/articles/journey-in-the-countryside',
        },
        position: 'RIGHT',
    },
    {
        id: 4,
        type: 'ResourceBasicPreview',
        title: 'Journey in the city',
        description: 'Article Description 2',
        imgHref: 'https://traveluibucket.s3.eu-central-1.amazonaws.com/HighlitedCardPlaceholder2.png',
        imgAlt: 'Article Image Alt 2',
        buttonCTA: {
            text: 'Article Button Text 2',
            href: '/articles/journey-in-the-city',
        },
        position: 'LEFT',
    },
    {
        id: 5,
        type: 'ResourceBasicPreview',
        title: 'Journey at the lake',
        description: 'Article Description 3',
        imgHref: 'https://traveluibucket.s3.eu-central-1.amazonaws.com/HighlitedCardPlaceholder3.png',
        imgAlt: 'Article Image Alt 3',
        buttonCTA: {
            text: 'Article Button Text 3',
            href: '/articles/journey-at-the-lake',
        },
        position: 'RIGHT',
    }
]

export default resourceBasicPreviewsJson;
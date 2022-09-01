import { 
    HighlightedSectionData, 
    WithButtonT1HeroSectionData, 
    ResourceBasicPreviewData, 
    SocialSectionData 
} from "../types/GlobalData";

import t1HerosJson from "./T1HeroJson";
import resourceBasicPreviewsJson from "./ResourceBasicPreviewJson";
import socialJson from "./SocialJson";

const t1HeroSectionData: WithButtonT1HeroSectionData = t1HerosJson[0];

const highlightedSectionData: HighlightedSectionData = {
    highlightedCards: [
        {
            title: 'Highlighted Card Title',
            imgHref: 'https://traveluibucket.s3.eu-central-1.amazonaws.com/HighlitedCardPlaceholder1.png',
            imgAlt: 'Highlighted Card Image Alt',
            buttonCTA: {
                text: 'Highlighted Card Button Text',
                href: '/highlighted-card-button-href',
            },
        },
        {
            title: 'Highlighted Card Title 2',
            imgHref: 'https://traveluibucket.s3.eu-central-1.amazonaws.com/HighlitedCardPlaceholder2.png',
            imgAlt: 'Highlighted Card Image Alt',
            buttonCTA: {
                text: 'Highlighted Card Button Text 2',
                href: '/highlighted-card-button-href',
            },
        },
        {
            title: 'Highlighted Card Title 3',
            imgHref: 'https://traveluibucket.s3.eu-central-1.amazonaws.com/HighlitedCardPlaceholder3.png',
            imgAlt: 'Highlighted Card Image Alt',
            buttonCTA: {
                text: 'Highlighted Card Button Text 3',
                href: '/highlighted-card-button-href',
            },
        }
    ]
};

const resourceBasicPreview01: ResourceBasicPreviewData = resourceBasicPreviewsJson[0];

const resourceBasicPreview02: ResourceBasicPreviewData = resourceBasicPreviewsJson[1];

const resourceBasicPreview03: ResourceBasicPreviewData = resourceBasicPreviewsJson[2];

const socialSectionData: SocialSectionData = socialJson[0];

export {
    t1HeroSectionData,
    highlightedSectionData,
    resourceBasicPreview01,
    resourceBasicPreview02,
    resourceBasicPreview03,
    socialSectionData
}
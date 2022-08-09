import { 
    DynamicPageData
} from "../types/GlobalData";

import t1HerosJson from "./T1HeroJson";
import socialJson from "./SocialJson";

const allArticlesPagesData : DynamicPageData[] = [
    {
        id: 'journey-in-the-countryside',
        title: 'Journey in the countryside',
        description: '',
        sections: [
            t1HerosJson[6],

            socialJson[1],
        ],
    },
    {
        id: 'journey-in-the-city',
        title: 'Journey in the city',
        description: '',
        sections: [
            t1HerosJson[7],

            socialJson[1],
        ],
    },
    {
        id: 'journey-at-the-lake',
        title: 'Journey at the lake',
        description: '',
        sections: [
            t1HerosJson[8],

            socialJson[1],
        ],
    },
]

export {
    allArticlesPagesData,
}
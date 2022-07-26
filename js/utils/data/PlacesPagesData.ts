import { 
    DynamicPageData
} from "../types/GlobalData";

import t1HerosJson from "./T1HeroJson";
import t2HerosJson from "./T2HeroJson";
import resourceBasicPreviewsJson from "./ResourceBasicPreviewJson";
import socialJson from "./SocialJson";

const allPlacesPagesData : DynamicPageData[] = [
    {
        id: 'best',
        title: 'Best places',
        sections: [
            t1HerosJson[3],
            resourceBasicPreviewsJson[3],
            resourceBasicPreviewsJson[4],
            resourceBasicPreviewsJson[5],
            socialJson[1]
        ],
    },
    {
        id: 'countryside',
        title: 'Countryside',
        sections: [
            t1HerosJson[4],
            resourceBasicPreviewsJson[3],
            resourceBasicPreviewsJson[4],
            resourceBasicPreviewsJson[5],
            socialJson[1]
        ],
    },
    {
        id: 'city',
        title: 'Cities',
        sections: [
            t1HerosJson[5],
            resourceBasicPreviewsJson[3],
            resourceBasicPreviewsJson[4],
            resourceBasicPreviewsJson[5],
            socialJson[1]
        ],
    },
    {
        id: 'brasov',
        title: 'Brasov',
        sections: [
            t2HerosJson[0],
            socialJson[1]
        ],
    },
    {
        id: 'alba-iulia',
        title: 'Alba Iulia',
        sections: [
            t2HerosJson[1],

            socialJson[1]
        ],
    },
]

export {
    allPlacesPagesData,
}
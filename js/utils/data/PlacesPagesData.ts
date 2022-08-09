import { 
    DynamicPageData
} from "../types/GlobalData";

import t1HerosJson from "./T1HeroJson";
import t2HerosJson from "./T2HeroJson";
import resourceBasicPreviewsJson from "./ResourceBasicPreviewJson";
import socialJson from "./SocialJson";
import quickDirectionsJson from "./quickDirectionsJson";

const allPlacesPagesData : DynamicPageData[] = [
    {
        id: 'best',
        title: 'Best places',
        description: '',
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
        description: '',
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
        description: '',
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
        description: '',
        sections: [
            t2HerosJson[0],
            quickDirectionsJson[0],
            socialJson[1]
        ],
    },
    {
        id: 'alba-iulia',
        title: 'Alba Iulia',
        description: '',
        sections: [
            t2HerosJson[1],
            quickDirectionsJson[1],
            socialJson[1]
        ],
    },
]

export {
    allPlacesPagesData,
}
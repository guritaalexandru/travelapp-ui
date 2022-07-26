import { 
    DynamicPageData
} from "../types/GlobalData";

import herosJson from "./HeroJson";
import resourceBasicPreviewsJson from "./ResourceBasicPreviewJson";
import socialJson from "./SocialJson";

const allPlacesPagesData : DynamicPageData[] = [
    {
        id: 'best',
        title: 'Best places',
        sections: [
            herosJson[3],
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
            herosJson[4],
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
            herosJson[5],
            resourceBasicPreviewsJson[3],
            resourceBasicPreviewsJson[4],
            resourceBasicPreviewsJson[5],
            socialJson[1]
        ],
    },
]

export {
    allPlacesPagesData,
}
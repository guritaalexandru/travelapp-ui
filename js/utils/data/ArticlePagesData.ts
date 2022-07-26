import { 
    DynamicPageData
} from "../types/GlobalData";

import herosJson from "./HeroJson";
import resourceBasicPreviewsJson from "./ResourceBasicPreviewJson";
import socialJson from "./SocialJson";

const allArticlesPagesData : DynamicPageData[] = [
    {
        id: 'article1',
        title: 'Article1',
        sections: [
            herosJson[1],
            resourceBasicPreviewsJson[0],
            resourceBasicPreviewsJson[1],
            resourceBasicPreviewsJson[2],
            socialJson[1],
        ],
    },
    {
        id: 'article2',
        title: 'Article2',
        sections: [
            herosJson[1],
            resourceBasicPreviewsJson[0],
            resourceBasicPreviewsJson[1],
            resourceBasicPreviewsJson[2],
            socialJson[1],
        ],
    },
    {
        id: 'article3',
        title: 'Article3',
        sections: [
            herosJson[1],
            resourceBasicPreviewsJson[0],
            resourceBasicPreviewsJson[1],
            resourceBasicPreviewsJson[2],
            socialJson[1],
        ],
    },
]

export {
    allArticlesPagesData,
}
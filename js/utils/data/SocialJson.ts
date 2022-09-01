import { 
    SocialSectionData, 
} from "../types/GlobalData";

//I can add the type automatically when retrieving data to avoid replication

const socialJson : SocialSectionData[] = [
    {
        id: '0',
        type: 'SocialSection',
        title: 'Social Title 1',
    },
    {
        id: '1',
        type: 'SocialSection',
        title: 'Social Title 2',
    }
]

export default socialJson;
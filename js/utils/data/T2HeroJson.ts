import { 
    T2HeroSectionData, 
} from "../types/GlobalData";

import mapsReferencesJson from "./MapsReferenceJson";

const t2HerosJson : T2HeroSectionData[] = [
    {
        id: '0',
        type: 'T2HeroSection',
        title: 'Brasov',
        description: 'Brașov is a city in the Transylvania region of Romania, ringed by the Carpathian Mountains. It\'s known for its medieval Saxon walls and bastions, the towering Gothic-style Black Church and lively cafes.',
        imgHref: 'https://traveluibucket.s3.eu-central-1.amazonaws.com/HeroPlaceholder.png',
        imgAlt: 'Brasov view',
        mapsReference: mapsReferencesJson[0],
    },
    {
        id: '1',
        type: 'T2HeroSection',
        title: 'Alba Iulia',
        description: 'Alba Iulia is a city that serves as the seat of Alba County in the west-central part of Romania.',
        imgHref: 'https://traveluibucket.s3.eu-central-1.amazonaws.com/HeroPlaceholder.png',
        imgAlt: 'Alba Iulia view',
        mapsReference: mapsReferencesJson[1],
    }
]

export default t2HerosJson;
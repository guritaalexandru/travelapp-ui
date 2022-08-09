import { 
    QuickDirectionsData, 
} from "../types/GlobalData";

const quickDirectionsJson : QuickDirectionsData[] = [
    {
        id: '0',
        type: 'QuickDirections',
        upperText: 'How do you get to Brasov?',
        instructionCards: [
            {
                icon: 'PLANE',
                destination: 'Bucharest',
            },
            {
                icon: 'TRAIN',
                destination: 'Brasov',
            },
            {
                icon: 'BUS',
                destination: 'Brasov',
            }
    ],
        buttonCTA: {
            text: 'Read our step-by-step guide!',
            href: '#',
        },
    },
    {
        id: '1',
        type: 'QuickDirections',
        upperText: 'How do you get to Alba Iulia?',
        instructionCards: [
            {
                icon: 'PLANE',
                destination: 'Bucharest',
            },
            {
                icon: 'TRAIN',
                destination: 'Alba Iulia',
            }
    ],
        buttonCTA: {
            text: 'Read our step-by-step guide!',
            href: '#',
        },
    },
]

export default quickDirectionsJson;
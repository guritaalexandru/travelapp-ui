import ButtonCTA from "../Parts/ButtonCTA";

import { QuickDirectionsData } from "../../utils/types/GlobalData";
import Image from "next/image";
import Airplane from "../SVG/Airplane.svg";
import Train from "../SVG/Train.svg";
import Bus from "../SVG/Bus.svg";

const renderCardIcon = (type: string) => {
    switch (type) {
        case 'PLANE':
            return <Image src={Airplane} alt="Airplane"
                height={150} width={150}
            />;
        case 'TRAIN':
            return <Image src={Train} alt="Train"
                height={150} width={150}
            />;
        case 'BUS':
            return <Image src={Bus} alt="Bus"
                height={150} width={150}
            />;
        default:
            return null;
    }
}

type Props = {
    content: QuickDirectionsData;
}

function QuickDirections({ content }: Props) {
    return (
        <section id={`QuickDirections-${content.id}`}>
            <div className="full-container">
                <h2 className="text-2xl mb-6 font-bold text-center">
                    {content.upperText}
                </h2>
                <div className="flex flex-wrap">
                    {
                        content.instructionCards.map(
                            (card, index) => (
                                <div className="w-1/2 flex" key={index}>
                                    {
                                        renderCardIcon(card.icon)
                                    }
                                    <span>
                                        {card.destination}
                                    </span>
                                </div>
                            )
                        )
                    }
                </div>
                <ButtonCTA buttonData={content.buttonCTA} type="primary" />
            </div>
        </section>
    );
}

export default QuickDirections;
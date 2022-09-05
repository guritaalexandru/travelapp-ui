import ButtonCTA from "../Parts/ButtonCTA";

import { QuickDirectionsDataAttributes } from "../../utils/types/DynamicData";
import Image from "next/image";
import Airplane from "../../../public/SVG/Airplane.svg";
import Train from "../../../public/SVG/Train.svg";
import Bus from "../../../public/SVG/Bus.svg";

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
    sectionContent: QuickDirectionsDataAttributes;
}

function QuickDirections({ sectionContent }: Props) {
    return (
        <section id={`QuickDirections`}>
            <div className="full-container">
                <h2 className="text-2xl mb-6 font-bold text-center">
                    {sectionContent.upperText}
                </h2>
                <div className="flex flex-wrap">
                    {
                        sectionContent.directionCards.map(
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
                <ButtonCTA buttonData={sectionContent.buttonCTA} type="primary" />
            </div>
        </section>
    );
}

export default QuickDirections;
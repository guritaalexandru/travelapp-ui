import Image from 'next/image';

import { HighlightedCardData } from '../../utils/types/DynamicData'
import ButtonCTA from "./ButtonCTA";

interface Props {
    cardData: HighlightedCardData;
}

function HighlightedCard({ cardData }: Props) {
    const imageData = cardData?.image?.data?.attributes;

    return (
        <div className='relative w-1/3 lg:w-1/2 md:w-full'>
            <div className="background-image">
                <Image src={imageData.url} alt={imageData.alternativeText}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className='flex flex-col justify-between py-10 h-80'>
                <h2 className="text-2xl text-white mb-6 font-bold text-center">
                    {cardData.title}
                </h2>
                <ButtonCTA buttonData={cardData.buttonCTA} type="primary" />
            </div>
        </div>
    );
}

export default HighlightedCard;
import ButtonCTA from "../Parts/ButtonCTA";
import Image from "next/image";
import { T1HeroSectionDataAttributes } from "../../utils/types/DynamicData";
import { getImageProperties } from '../../utils/functions/utils';

interface Props {
    sectionContent: T1HeroSectionDataAttributes;
}

function T1Hero({ sectionContent }: Props) {
    const imageData = sectionContent?.backgroundImage;
    const { imageUrl, imageAlt, } = getImageProperties(imageData);

    return (
        <section id="T1HeroSection">
            <div className="relative">
                <div className="background-image">
                    <Image src={imageUrl} alt={imageAlt}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="full-container flex flex-col justify-end h-120 2xl:h-96">
                    <h1 className="text-5xl text-white mb-6 font-bold">
                        {sectionContent.title}
                    </h1>
                    <p className="text-xl text-white mb-6">
                        {sectionContent.description}
                    </p>
                    {sectionContent.buttonCTA && <ButtonCTA buttonData={sectionContent.buttonCTA} type="primary" />}
                </div>
            </div>
        </section>
    );
}

export default T1Hero;
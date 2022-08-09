import ButtonCTA from "../Parts/ButtonCTA";
import Image from "next/image";
import { T1HeroSectionData, WithButtonT1HeroSectionData } from "../../utils/types/GlobalData";

interface Props {
    content: T1HeroSectionData | WithButtonT1HeroSectionData;
}

function T1Hero({ content }: Props) {
    const hasButton = 'buttonCTA' in content;

    return (
        <section id="T1HeroSection">
            <div className="relative">
                <div className="background-image">
                    <Image src={content.imgHref} alt={content.imgAlt}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="full-container flex flex-col justify-end h-120 2xl:h-96">
                    <h1 className="text-5xl text-white mb-6 font-bold">
                        {content.title}
                    </h1>
                    <p className="text-xl text-white mb-6">
                        {content.description}
                    </p>
                    {hasButton && <ButtonCTA buttonData={content.buttonCTA} type="primary" />}
                </div>
            </div>
        </section>
    );
}

export default T1Hero;
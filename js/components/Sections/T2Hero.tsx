import Image from "next/image";
import { T2HeroSectionData } from "../../utils/types/GlobalData";
import MapsReference from "../Parts/MapsReference";

interface Props {
    content: T2HeroSectionData;
}

function T2Hero({ content }: Props) {
    return (
        <section id="T2HeroSection">
            <div className="full-container flex">
                <div className="w-1/2 flex flex-col justify-end h-120 2xl:h-96">
                    <h1 className="text-5xl text-black mb-6 font-bold">
                        {content.title}
                    </h1>
                    <p className="text-xl text-black mb-6">
                        {content.description}
                    </p>
                    <MapsReference data={content.mapsReference} />
                </div>
                <div className="relative w-1/2">
                    <div className="background-image">
                        <Image src={content.imgHref} alt={content.imgAlt}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default T2Hero;
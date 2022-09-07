import Image from "next/image";
import { T2HeroSectionDataAttributes } from "../../utils/types/DynamicData";
import MapsReference from "../Parts/MapsReference";
import { getImageProperties } from '../../utils/functions/utils';

interface Props {
    sectionContent: T2HeroSectionDataAttributes;
}

function T2Hero({ sectionContent }: Props) {
    const imageData = sectionContent?.image;
    const { imageUrl, imageAlt, } = getImageProperties(imageData);

    return (
        <section id="T2HeroSection">
            <div className="full-container flex">

                <div className="w-1/2 flex flex-col justify-end h-120 2xl:h-96">
                    <h1 className="text-5xl text-black mb-6 font-bold">
                        {sectionContent.title}
                    </h1>
                    <p className="text-xl text-black mb-6">
                        {sectionContent.description}
                    </p>
                    {
                        !!sectionContent.mapsReference?.data && (
                            <MapsReference componentContent={sectionContent.mapsReference.data.attributes} />
                        )
                    }
                </div>
                <div className="relative w-1/2">
                    <div className="background-image">
                        <Image src={imageUrl} alt={imageAlt}
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
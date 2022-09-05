import ButtonCTA from "../Parts/ButtonCTA";
import { ResourceBasicPreviewDataAttributes } from "../../utils/types/DynamicData";
import Image from "next/image";
import { getImageProperties } from '../../utils/functions/utils';

interface Props {
    sectionContent: ResourceBasicPreviewDataAttributes;
}

function Article({ sectionContent }: Props) {
    const imageData = sectionContent?.image;
    const { imageUrl, imageAlt, } = getImageProperties(imageData);

    return (
        <section id={`ResourceBasicPreview-${sectionContent.id}`}>
            <div className="full-container">
                <div className={`flex h-80 ${sectionContent.position === 'LEFT' ? 'flex-row-reverse' : ''}`}>
                    <div className="w-1/2 flex flex-col justify-between">
                        <div className="p-10">
                            <h2 className="text-2xl mb-6 font-bold text-center">
                                {sectionContent.title}
                            </h2>
                            <p className="text-xl mb-6">
                                {sectionContent.description}
                            </p>
                        </div>
                        <ButtonCTA buttonData={sectionContent.buttonCTA} type="primary" />
                    </div>
                    <div className="w-1/2 relative">
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

export default Article;
import ButtonCTA from "../Parts/ButtonCTA";
import { ResourceBasicPreviewData } from "../../utils/types/DynamicData";
import Image from "next/image";

interface Props {
    content: ResourceBasicPreviewData;
}

function Article({ content }: Props) {
    const sectionContent = content.rbp?.data?.attributes;
    const imageData = sectionContent?.image?.data?.attributes;

    if (!sectionContent) {
        console.warn("ResourceBasicPreview section content is undefined");
        return null;
    }
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
                        <Image src={imageData.url} alt={imageData.alternativeText}
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
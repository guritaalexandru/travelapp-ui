import ButtonCTA from "../Parts/ButtonCTA";
import { ResourceBasicPreviewData } from "../../utils/types/GlobalData";
import Image from "next/image";

interface Props {
    content: ResourceBasicPreviewData;
}

function Article({ content }: Props) {
    return (
        <section id={`ResourceBasicPreview-${content.id}`}>
            <div className="full-container">
                <div className={`flex h-80 ${content.position === 'LEFT' ? 'flex-row-reverse' : ''}`}>
                    <div className="w-1/2 flex flex-col justify-between">
                        <div className="p-10">
                            <h2 className="text-2xl mb-6 font-bold text-center">
                                {content.title}
                            </h2>
                            <p className="text-xl mb-6">
                                {content.description}
                            </p>
                        </div>
                        <ButtonCTA buttonData={content.buttonCTA} type="primary" />
                    </div>
                    <div className="w-1/2 relative">
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

export default Article;
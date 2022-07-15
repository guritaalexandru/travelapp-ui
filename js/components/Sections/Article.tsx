import ButtonCTA from "../Parts/ButtonCTA";
import { ArticleSectionData } from "../../utils/types/GlobalData";
import Image from "next/image";

interface Props {
    content: ArticleSectionData;
}

function Article({ content }: Props) {
    return (
        <section id={`ArticleSection-${content.id}`}>
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
                        <ButtonCTA href={content.buttonHref} text={content.buttonText} type="primary" />
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
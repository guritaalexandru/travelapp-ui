import { HighlightedSectionData } from "../../utils/types/DynamicData";
import HighlightedCard from "../Parts/HighlightedCard";

interface Props {
    content: HighlightedSectionData;
}

function Highlighted({ content }: Props) {
    const sectionContent = content.HLCards?.data?.attributes;

    if (!sectionContent) {
        console.warn("Highlighted section content is undefined");
        return null;
    }
    return (
        <section id="HighlightedSection">
            <div className="full-container">
                <div className="flex flex-wrap justify-center">
                    {
                        sectionContent.highlightedCards.map((card, index) =>
                            <HighlightedCard
                                key={index}
                                cardData={card}
                            />
                        )
                    }
                </div>
            </div>
        </section>
    );
}

export default Highlighted;
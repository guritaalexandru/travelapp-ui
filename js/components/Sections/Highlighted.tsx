import { HighlightedSectionData } from "../../utils/types/DynamicData";
import HighlightedCard from "../Parts/HighlightedCard";

interface Props {
    content: HighlightedSectionData;
}

function Highlighted({ content }: Props) {
    const sectionContent = content.HLCards?.data?.attributes;

    const { highlightedCards } = sectionContent;
    return (
        <section id="HighlightedSection">
            <div className="full-container">
                <div className="flex flex-wrap justify-center">
                    {
                        highlightedCards.map((card, index) =>
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
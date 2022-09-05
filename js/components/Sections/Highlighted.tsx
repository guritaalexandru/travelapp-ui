import { HighlightedSectionDataAttributes } from "../../utils/types/DynamicData";
import HighlightedCard from "../Parts/HighlightedCard";

interface Props {
    sectionContent: HighlightedSectionDataAttributes;
}

function Highlighted({ sectionContent }: Props) {
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
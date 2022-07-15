import { HighlightedSectionData } from "../../utils/types/GlobalData";
import HighlightedCard from "../Parts/HighlightedCard";

interface Props {
    content: HighlightedSectionData;
}

function Highlighted({ content }: Props) {
    const { highlightedCards } = content;
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
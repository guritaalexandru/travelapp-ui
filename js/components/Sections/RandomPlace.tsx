import { RandomPlaceSectionDataAttributes } from "../../utils/types/DynamicData";
import { getAllPlacesPaths } from '../../utils/functions/pageDataFunctions'

interface Props {
    sectionContent: RandomPlaceSectionDataAttributes;
}

const redirectRandomPlace = async () => {
    const paths = await getAllPlacesPaths();

    const randomIndex = Math.floor(Math.random() * paths.length);
    const randomPath = paths[randomIndex].params.pid;

    window.location.href = `/places/${randomPath}`;
}

function RandomPlace({ sectionContent }: Props) {

    return (
        <section id={`RandomPlace-${sectionContent.id}`}>
            <div className="full-container">
                <h2 className="text-5xl text-black mb-6 font-bold text-center">
                    {sectionContent.title}
                </h2>
                <button onClick={redirectRandomPlace}>
                    {sectionContent.buttonText}
                </button>
            </div>
        </section>
    );
}

export default RandomPlace;
import T1Hero from "../Sections/T1Hero";
import Article from "../Sections/Article";
import Social from "../Sections/Social";

import {
    t1HeroSectionData,
    resourceBasicPreview01,
    resourceBasicPreview02,
    resourceBasicPreview03,
    socialSectionData
} from "../../utils/data/PlacesPagesData";

function MainPlaces() {
    return (
        <div id="MainPlaces">
            <T1Hero content={t1HeroSectionData} />
            <Article content={resourceBasicPreview01} />
            <Article content={resourceBasicPreview02} />
            <Article content={resourceBasicPreview03} />
            <Social content={socialSectionData} />
        </div>
    );
}

export default MainPlaces;
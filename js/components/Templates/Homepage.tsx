import T1Hero from "../Sections/T1Hero";
import Highlighted from "../Sections/Highlighted";
import Article from "../Sections/Article";
import Social from "../Sections/Social";

import {
    t1HeroSectionData,
    highlightedSectionData,
    resourceBasicPreview01,
    resourceBasicPreview02,
    resourceBasicPreview03,
    socialSectionData
} from "../../utils/data/HomepageData";

function Homepage() {
    return (
        <div id="Homepage">
            <T1Hero content={t1HeroSectionData} />
            <Highlighted content={highlightedSectionData} />
            <Article content={resourceBasicPreview01} />
            <Article content={resourceBasicPreview02} />
            <Article content={resourceBasicPreview03} />
            <Social content={socialSectionData} />
        </div>
    );
}

export default Homepage;
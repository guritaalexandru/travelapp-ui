import T1Hero from "../Sections/T1Hero";
import Highlighted from "../Sections/Highlighted";
import Article from "../Sections/Article";
import Social from "../Sections/Social";

import {
    highlightedSectionData,
} from "../../utils/data/HomepageData";

function Homepage() {
    return (
        <div id="Homepage">
            <Highlighted content={highlightedSectionData} />
        </div>
    );
}

export default Homepage;
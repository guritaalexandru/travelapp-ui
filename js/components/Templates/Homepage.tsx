import Highlighted from "../Sections/Highlighted";

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
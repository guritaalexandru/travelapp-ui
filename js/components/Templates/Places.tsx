import Hero from "../Sections/Hero";
import Highlighted from "../Sections/Highlighted";
import Article from "../Sections/Article";
import Social from "../Sections/Social";

import {
    heroSectionData,
    highlightedSectionData,
    articleSectionData01,
    articleSectionData02,
    articleSectionData03,
    socialSectionData
} from "../../utils/data/HomepageData";

function Places() {
    return (
        <div id="Places">
            <Hero content={heroSectionData} />
            <Highlighted content={highlightedSectionData} />
            <Article content={articleSectionData01} />
            <Article content={articleSectionData02} />
            <Article content={articleSectionData03} />
            <Social content={socialSectionData} />
        </div>
    );
}

export default Places;
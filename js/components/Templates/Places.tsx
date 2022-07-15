import Hero from "../Sections/Hero";
import Article from "../Sections/Article";
import Social from "../Sections/Social";

import {
    heroSectionData,
    articleSectionData01,
    articleSectionData02,
    articleSectionData03,
    socialSectionData
} from "../../utils/data/PlacesPageData";

function Places() {
    return (
        <div id="Places">
            <Hero content={heroSectionData} />
            <Article content={articleSectionData01} />
            <Article content={articleSectionData02} />
            <Article content={articleSectionData03} />
            <Social content={socialSectionData} />
        </div>
    );
}

export default Places;
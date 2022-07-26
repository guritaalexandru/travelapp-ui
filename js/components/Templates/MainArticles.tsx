import Hero from "../Sections/Hero";
import Article from "../Sections/Article";
import Social from "../Sections/Social";

import {
    heroSectionData,
    resourceBasicPreview01,
    resourceBasicPreview02,
    resourceBasicPreview03,
    socialSectionData
} from "../../utils/data/PlacesPagesData";

function MainArticles() {
    return (
        <div id="MainArticles">
            <Hero content={heroSectionData} />
            <Article content={resourceBasicPreview01} />
            <Article content={resourceBasicPreview02} />
            <Article content={resourceBasicPreview03} />
            <Social content={socialSectionData} />
        </div>
    );
}

export default MainArticles;
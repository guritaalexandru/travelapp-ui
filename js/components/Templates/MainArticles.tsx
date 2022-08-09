import T1Hero from "../Sections/T1Hero";
import Article from "../Sections/Article";
import Social from "../Sections/Social";

import resourceBasicPreviewsJson from "../../utils/data/ResourceBasicPreviewJson";
import socialJson from "../../utils/data/SocialJson";
import t1HerosJson from "../../utils/data/T1HeroJson";

function MainArticles() {
    return (
        <div id="MainArticles">
            <T1Hero content={t1HerosJson[0]} />
            <Article content={resourceBasicPreviewsJson[0]} />
            <Article content={resourceBasicPreviewsJson[1]} />
            <Article content={resourceBasicPreviewsJson[2]} />
            <Social content={socialJson[0]} />
        </div>
    );
}

export default MainArticles;
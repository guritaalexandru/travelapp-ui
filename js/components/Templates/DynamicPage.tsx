import Hero from "../Sections/Hero";
import Article from "../Sections/Article";
import Social from "../Sections/Social";

import { SectionData } from '../../utils/types/GlobalData';

interface Props {
    sections: SectionData[]
}

const renderSection = (section: SectionData): JSX.Element => {
    switch (section.type) {
        case 'ArticleSection':
            return <Article content={section} />;
        case 'HeroSection':
            return <Hero content={section} />;
        case 'SocialSection':
            return <Social content={section} />;
        default:
            return null;
    }
}

function DynamicPage({ sections }: Props) {
    return (
        <div id="DynamicPage">
            {!!sections.length && sections.map((section, index) => {
                return (
                    <div id={`DynamicSection-${index}`} key={index}>
                        {renderSection(section)}
                    </div>
                )
            }
            )}
        </div>
    );
}

export default DynamicPage;
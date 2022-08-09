import T1Hero from "../Sections/T1Hero";
import T2Hero from "../Sections/T2Hero";
import Article from "../Sections/Article";
import Social from "../Sections/Social";
import QuickDirections from "../Sections/QuickDirections";

import { SectionData } from '../../utils/types/GlobalData';

interface Props {
    sections: SectionData[]
}

const renderSection = (section: SectionData): JSX.Element => {
    switch (section.type) {
        case 'ResourceBasicPreview':
            return <Article content={section} />;
        case 'T1HeroSection':
            return <T1Hero content={section} />;
        case 'T2HeroSection':
            return <T2Hero content={section} />;
        case 'SocialSection':
            return <Social content={section} />;
        case 'QuickDirections':
            return <QuickDirections content={section} />;
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
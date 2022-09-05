import T1Hero from "../Sections/T1Hero";
import T2Hero from "../Sections/T2Hero";
import Article from "../Sections/Article";
import Social from "../Sections/Social";
import Highlighted from "../Sections/Highlighted";
import QuickDirections from "../Sections/QuickDirections";

import { SectionData } from '../../utils/types/DynamicData';

interface Props {
    sections: SectionData[]
}

const renderSection = (section: SectionData): JSX.Element => {
    switch (section.__component) {
        case 'dynamic-s.t1-hero-ref':
            return <T1Hero content={section} />;

        case 'dynamic-s.t2-hero-ref':
            return <T2Hero content={section} />;

        case 'dynamic-s.quick-dir-ref':
            return <QuickDirections content={section} />;

        case 'dynamic-s.rbp-ref':
            return <Article content={section} />;

        case 'dynamic-s.hl-cards-ref':
            return <Highlighted content={section} />;

        case 'dynamic-s.social-ref':
            return <Social content={section} />;

        // case 'QuickDirections':
        //     return <QuickDirections content={section} />;

        default:
            return null;
    }
}

function DynamicPage({ sections }: Props) {
    if (!sections.length) return null;

    sections.sort((sectionA, sectionB) => sectionA.order - sectionB.order);

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
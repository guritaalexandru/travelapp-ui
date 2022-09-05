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
    let sectionContent;

    switch (section.__component) {
        case 'dynamic-s.t1-hero-ref':
            sectionContent = section.t1hero?.data?.attributes;
            if (!sectionContent) {
                console.warn("T1Hero section content is undefined");
                return <></>;
            }
            return <T1Hero sectionContent={sectionContent} />;

        case 'dynamic-s.t2-hero-ref':
            sectionContent = section.t2hero?.data?.attributes;
            if (!sectionContent) {
                console.warn("T2Hero section content is undefined");
                return <></>;
            }
            return <T2Hero sectionContent={sectionContent} />;

        case 'dynamic-s.quick-dir-ref':
            sectionContent = section.quickDir?.data?.attributes;
            if (!sectionContent) {
                console.warn("QuickDirections section content is undefined");
                return <></>;
            }
            return <QuickDirections sectionContent={sectionContent} />;

        case 'dynamic-s.rbp-ref':
            sectionContent = section.rbp?.data?.attributes;
            if (!sectionContent) {
                console.warn("RBP section content is undefined");
                return <></>;
            }
            return <Article sectionContent={sectionContent} />;

        case 'dynamic-s.hl-cards-ref':
            sectionContent = section.HLCards?.data?.attributes;
            if (!sectionContent) {
                console.warn("Highlighted section content is undefined");
                return <></>;
            }
            return <Highlighted sectionContent={sectionContent} />;

        case 'dynamic-s.social-ref':
            sectionContent = section.socialRef?.data?.attributes;
            if (!sectionContent) {
                console.warn("Social section content is undefined");
                return <></>;
            }
            return <Social sectionContent={sectionContent} />;

        default:
            return <></>;
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
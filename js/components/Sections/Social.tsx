import { SocialSectionData } from "../../utils/types/DynamicData";
import { INSTAGRAM_LINK, FACEBOOK_LINK } from "../../utils/constants/generalConstants"
import Image from "next/image";

import Facebook from '../../../public/SVG/Facebook.svg';
import Instagram from '../../../public/SVG/Instagram.svg';

const ICON_SIZE = 50;

interface Props {
    content: SocialSectionData;
}

function Social({ content }: Props) {
    const sectionContent = content.socialRef?.data?.attributes;

    if (!sectionContent) {
        console.warn("Social section content is undefined");
        return null;
    }
    return (
        <div id="Social">
            <div className="full-container">
                <h2 className="text-2xl mb-6 font-bold text-center">
                    {sectionContent.title}
                </h2>
                <div className="flex justify-center">
                    <a href={FACEBOOK_LINK}>
                        <Image src={Facebook} alt="Facebook Icon"
                            height={ICON_SIZE} width={ICON_SIZE}
                        />
                    </a>
                    <a href={INSTAGRAM_LINK}>
                        <Image src={Instagram} alt="Instagram Icon"
                            height={ICON_SIZE} width={ICON_SIZE}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Social;
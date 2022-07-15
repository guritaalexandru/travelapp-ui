import { SocialSectionData } from "../../utils/types/GlobalData";
import { INSTAGRAM_LINK, FACEBOOK_LINK } from "../../utils/constants/generalConstants"
import FacebookSVG from '../SVG/FacebookSVG';
import InstagramSVG from '../SVG/InstagramSVG';

interface Props {
    content: SocialSectionData;
}

function Social({ content }: Props) {
    return (
        <div id="Social">
            <div className="full-container">
                <h2 className="text-2xl mb-6 font-bold text-center">
                    {content.title}
                </h2>
                <div className="flex justify-center">
                    <a href={FACEBOOK_LINK}>
                        <FacebookSVG />
                    </a>
                    <a href={INSTAGRAM_LINK}>
                        <InstagramSVG />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Social;
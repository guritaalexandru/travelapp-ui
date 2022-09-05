import { MAPS_REFERENCE_TILE } from '../../utils/constants/generalConstants'
import { MapsReferenceDataAttributes } from '../../utils/types/DynamicData'
import Image from "next/image";

import AppleMaps from '../../../public/SVG/AppleMaps.svg'
import GoogleMaps from '../../../public/SVG/GoogleMaps.svg'

const ICON_SIZE = 50;

type Props = {
    componentContent: MapsReferenceDataAttributes
}

function MapsReference({ componentContent }: Props) {

    return (
        <div id={`MapsReference-${componentContent.id}`}>
            <div className="flex">
                <div className="w-1/2">
                    <span>{MAPS_REFERENCE_TILE}</span>
                </div>
                <div className="w-1/2 flex">
                    <button>
                        <a href={componentContent.googleMapsHref} target='_blank' rel="noreferrer">
                            <Image src={GoogleMaps} alt="Google Maps Icon"
                                height={ICON_SIZE} width={ICON_SIZE}
                            />
                        </a>
                    </button>
                    <button>
                        <a href={componentContent.appleMapsHref} target='_blank' rel="noreferrer">
                            <Image src={AppleMaps} alt="Apple Maps Icon"
                                height={ICON_SIZE} width={ICON_SIZE}
                            />
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MapsReference;
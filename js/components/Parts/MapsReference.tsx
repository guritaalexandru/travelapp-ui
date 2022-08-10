import { MAPS_REFERENCE_TILE } from '../../utils/constants/generalConstants'
import { MapsReferenceData } from '../../utils/types/GlobalData'
import Image from "next/image";

import AppleMaps from '../SVG/AppleMaps.svg'
import GoogleMaps from '../SVG/GoogleMaps.svg'

const ICON_SIZE = 50;

type Props = {
    data: MapsReferenceData
}

function MapsReference({ data }: Props) {
    return (
        <div id={`MapsReference-${data.id}`}>
            <div className="flex">
                <div className="w-1/2">
                    <span>{MAPS_REFERENCE_TILE}</span>
                </div>
                <div className="w-1/2 flex">
                    <button>
                        <a href={data.googleMapsHref} target='_blank' rel="noreferrer">
                            <Image src={GoogleMaps} alt="Google Maps Icon"
                                height={ICON_SIZE} width={ICON_SIZE}
                            />
                        </a>
                    </button>
                    <button>
                        <a href={data.appleMapsHref} target='_blank' rel="noreferrer">
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
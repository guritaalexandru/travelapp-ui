import { MAPS_REFERENCE_TILE } from '../../utils/constants/generalConstants'
import { MapsReferenceData } from '../../utils/types/GlobalData'

import AppleMapsSVG from '../SVG/AppleMapsSVG'
import GoogleMapsSVG from '../SVG/GoogleMapsSVG'

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
                            <GoogleMapsSVG />
                        </a>
                    </button>
                    <button>
                        <a href={data.appleMapsHref} target='_blank' rel="noreferrer">
                            <AppleMapsSVG />
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MapsReference;
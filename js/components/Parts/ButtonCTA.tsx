import Link from "next/link";
import { SimpleButtonData } from '../../utils/types/GlobalData';

interface Props {
    buttonData: SimpleButtonData;
    type: string;
}

function ButtonCTA({ buttonData, type }: Props) {
    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            <Link href={buttonData.href}>
                <a>
                    {buttonData.text}
                </a>
            </Link>
        </button>
    );
}

export default ButtonCTA;
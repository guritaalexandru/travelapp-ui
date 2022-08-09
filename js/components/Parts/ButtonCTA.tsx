import Link from "next/link";

function ButtonCTA({ href, text, type }) {
    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            <Link href={href}>
                <a>
                    {text}
                </a>
            </Link>
        </button>
    );
}

export default ButtonCTA;
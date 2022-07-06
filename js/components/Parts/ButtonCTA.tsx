import Link from "next/link";

function ButtonCTA({ href, text, type }) {
    return (
        <button>
            <Link href={href}>
                <a>
                    {text}
                </a>
            </Link>
        </button>
    );
}

export default ButtonCTA;
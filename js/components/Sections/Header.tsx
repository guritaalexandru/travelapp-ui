import Link from "next/link";
import { MenuData } from '../../utils/data/HeaderData';

function Header() {
    return (
        <header id="Header">
            <div className="full-container">
                <div className="flex items-center">
                    {
                        MenuData.map((item, index) => {
                            return (
                                <Link href={item.href} key={index}>
                                    <a className="text-black">
                                        <div className="py-2 text-black min-w-20 text-center">
                                            {item.title}
                                        </div>
                                    </a>
                                </Link>
                            )
                        }
                        )}
                </div>
            </div>
        </header>
    );
}

export default Header;            
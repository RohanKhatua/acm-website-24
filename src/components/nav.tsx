import Link from "next/link";
import Logo from "./logo";

export default function Nav() {
    return (
        <div className="flex flex-row items-center justify-between px-5">
            <div>
                <Logo />
            </div>
            <div className="hidden sm:flex flex-row space-x-7 font-bold text-xl">
                <Link href="/">
                    Home
                </Link>
                <Link href="/">
                    Team
                </Link>
                <Link href="/">
                    Events
                </Link>
                <Link href="/">
                    Projects
                </Link>
                <Link href="/">
                    Blogs
                </Link>
                <Link href="/">
                    About Us
                </Link>
            </div>
        </div>
    );
}
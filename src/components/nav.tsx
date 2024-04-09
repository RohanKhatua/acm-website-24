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
                <Link href="#team">
                    Team
                </Link>
                <Link href="#events">
                    Events
                </Link>
                <Link href="#projects">
                    Projects
                </Link>
                <Link href="#blogs">
                    Blogs
                </Link>
                <Link href="#about-us">
                    About Us
                </Link>
            </div>
        </div>
    );
}
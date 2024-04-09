import { AuroraBackground } from "./ui/aurora-background";
import { motion } from "framer-motion"

export default function Hero() {
    return (
        // <div className="py-20 pl-10">
        //     <div className="flex flex-col text-7xl sm:text-6xl md:text-9xl font-extrabold tracking-tight text-glow">
        //         Because
        //         <div className="custom-gradient">Technology</div>
        //         Matters
        //     </div>
        // </div>

        <header className="w-full py-12 md:py-16 lg:py-20 xl:py-24">
            <div className="container px-4 flex flex-col items-center gap-4 text-center">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-7xl/none">
                        Because
                        <span className="custom-gradient px-10">Technology</span>
                        Matters
                    </h1>
                </div>
            </div>
        </header>

    );
}
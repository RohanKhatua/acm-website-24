import { Button } from "./ui/button"
import { ArrowRightIcon } from "@radix-ui/react-icons";

export default function ImpactBox() {
    return (

        <div className="p-10 flex flex-col space-y-6">
            <div className="font-extrabold text-7xl">The Impact We Have</div>
            <div className="flex justify-end">
                <div className="text-3xl text-left md:text-right max-w-3xl">
                    <span className="sea-green">ACM-VIT : Pioneering Tech Advancement Since 2009.</span>
                    <div className="slate-grey">{`We are a close-knit family dedicated to democratizing technology like our parent organization, ACM. Join us in shaping the future of computer science!`}</div>
                </div>
            </div>
            <div className="flex justify-end">
                <Button variant="ghost" className="w-44 border custom-border text-xl flex flex-row justify-center items-center gap-2">About Us {' '}<ArrowRightIcon /></Button>
            </div>
        </div>

    );
}
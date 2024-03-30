import Image from "next/image";

export default function Logo() {
    return (
        <div className="flex items-center justify-center p-5">
            <Image src="/acm_logo.svg" alt="Logo" width={566} height={200} />
        </div>
    );
}
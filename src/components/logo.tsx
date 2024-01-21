import Image from "next/image";

export default function Logo() {
    return (
        <div className="flex items-center justify-center p-5">
            <Image src="/acm_logo.png" alt="Logo" width={250} height={87} />
        </div>
    );
}
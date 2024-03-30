import Image from "next/image";

function BoardMember(person: { name: string, pos: string, img: string }) {
    return (
        <div className="flex flex-row gap-5 items-center justify-center">
            <div className="flex flex-col items-center justify-center text-center">
                <Image src={person.img} alt={person.name} width="200" height="200" className="pb-5"></Image>
                <p className="font-bold">{person.name}</p>
                <p>{person.pos}</p>
            </div>
        </div>
    );
}

export default function Team() {
    return (
        <div className="p-10 flex flex-col space-y-6 items-center justify-center">
            <div className="font-extrabold text-7xl text-center">Our Team</div>
            <div className="flex flex-row items-center justify-center">
                <BoardMember img="/manav.png" name="Manav Muthanna" pos="Chairperson"></BoardMember>
            </div>
            <div className="flex flex-row gap-5 md:gap-20 items-center justify-center">
                <BoardMember img="/shambhavi.png" name="Shambhavi Sinha" pos="Secretary"></BoardMember>
                <BoardMember img="/anand.png" name="Anand Rajaram" pos="Vice Chairperson"></BoardMember>
                <BoardMember img="/rohan.png" name="Rohan Khatua" pos="Technical Lead"></BoardMember>
            </div>
            <div className="flex flex-row gap-5 md:gap-20 items-center justify-center">
                <BoardMember img="/vidit.png" name="Vidit Kothari" pos="Developer Relations Lead"></BoardMember>
                <BoardMember img="/saharsh.png" name="Saharsh Bhansali" pos="Research Lead"></BoardMember>
                <BoardMember img="/sarthak.png" name="Sarthak Gupta" pos="Events Lead"></BoardMember>
            </div>
            <div className="flex flex-row gap-5 md:gap-20 items-center justify-center">
                <BoardMember img="/hari.png" name="Hari R Kartha" pos="Internal Lead"></BoardMember>
                <BoardMember img="/ritaank.png" name="Ritaank Gunjesh" pos="Design Lead"></BoardMember>
                <BoardMember img="/ojal.png" name="Ojal Koshy" pos="Content Lead"></BoardMember>
            </div>





        </div>

    );
}
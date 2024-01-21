import { Event } from "~/types/event";
import { Card, CardContent } from "./ui/card";

export default function EventBox({ name, description }: Event) {
    return (
        <div>
            <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-2xl font-semibold"></span>
                </CardContent>
            </Card>
        </div>
    );
}
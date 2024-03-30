import EventsCarousel from "./events_carousel";

export default function Events() {
    return (
        <div>
            <div className="text-7xl font-extrabold">
                Our Events
            </div>
            <div className="border-red-600">
                <EventsCarousel></EventsCarousel>
            </div>
        </div>
    );
}
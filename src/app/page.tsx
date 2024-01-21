import Nav from "~/components/nav";
import Hero from "~/components/hero";
import ImpactBox from "~/components/impact_box";
import Team from "~/components/team";
import Events from "~/components/events";

export default function HomePage() {
  return (
    <main className="flex flex-col space-y-5 bg-black text-white p-5">
      <Nav />
      <Hero />
      <ImpactBox />
      <Team />
      <Events />
    </main>
  );
}

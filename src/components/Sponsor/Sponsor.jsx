import { Tree } from "../Decorate";
import TitleSection from "../TitleSection/TitleSection";
import SponsorList from "./SponsorList";

export default function Sponsor() {
  return (
    <section className="overflow-hidden xl:h-screen">
      <TitleSection className="mx-auto mb-10 h-[4.5rem] w-full xl:mb-[min(3.91vh,2.5rem)] xl:h-[min(14.75vh,9.4375rem)]">
        贊助單位
      </TitleSection>
      <div className="relative mx-auto xl:w-[min(83.06vw,74.75rem)]">
        <SponsorList />
        <Tree />
      </div>
    </section>
  );
}

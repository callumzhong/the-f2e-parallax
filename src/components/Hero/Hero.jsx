import ImageLogo from "@/assets/logo/logo.png";
import HeroDecorate from "./HeroDecorate";
import { H1 } from "../Typography";
import ImageLogoText from "@/assets/logo/logo_text.png";
import ActivityGroup from "./ActivityGroup";

export default function Hero() {
  return (
    <section className="hero-section relative h-screen overflow-hidden pt-[59px] lg:pt-0">
      <div className="hero-section__logo mx-auto mt-8 mb-3 w-[253px] lg:h-[23vh] lg:w-auto">
        <img className="lg:hidden" src={ImageLogo} alt="THE F2E" />
        <img
          className="mx-auto hidden lg:block lg:h-full"
          src={ImageLogoText}
          alt="THE F2E"
        />
      </div>
      <div className="hero-section__title mx-auto text-center lg:max-w-[1175px]">
        <H1 className="mb-5 inline-block rounded-[100px] bg-highlight px-10  py-[3.5px] text-white">
          互動式網頁設計
        </H1>
        <ActivityGroup />
      </div>
      <HeroDecorate />
    </section>
  );
}

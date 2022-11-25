import ImageLogo from "@/assets/logo/logo.png";
import Decorate from "./Decorate";
import { H1 } from "../Typography";
import ImageLogoText from "@/assets/logo/logo_text.png";
import ActivityGroup from "./ActivityGroup";

/**
 * 使用 gasp 處理 hero 區塊的動畫
 */
export function heroAnimationHandler(gsap) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero-section__title",
      markers: true,
      start: "top 25%",
      end: "top 0%",
      scrub: true,
    },
  });

  tl.set(".hero-section__text", { opacity: 0.5, duration: 1 }, 1)
    .set(
      ".hero-section__ready1",
      {
        opacity: 0,
      },
      1
    )
    .set(
      ".hero-section__ready2",
      {
        opacity: 0,
      },
      1
    )
    .set(
      ".hero-section__ready2",
      {
        opacity: 1,
      },
      5
    )
    .set(
      ".hero-section__ready3",
      {
        opacity: 0,
      },
      5
    )
    .set(
      ".hero-section__ready1",
      {
        opacity: 1,
      },
      10
    )
    .set(
      ".hero-section__ready2",
      {
        opacity: 0,
      },
      10
    )
    .set(".hero-section__text", { text: "GO!" }, 10);
}

export default function Hero() {
  return (
    <section className="hero-section relative h-screen overflow-hidden pb-[207px] pt-[59px] lg:pb-[52vh] lg:pt-0">
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
      <Decorate />
    </section>
  );
}

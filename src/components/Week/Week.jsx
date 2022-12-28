import gsap from "gsap";
import TitleSection from "../TitleSection/TitleSection";
import WeekList from "./WeekList";

export function HandleOfWeekAnimation() {
  const mm = gsap.matchMedia();
  mm.add("(min-width:1280px)", () => {
    gsap.set(".week-list>li, .week-section__title, .week-section__subtitle", {
      opacity: 0,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#week-section",
        pin: true,
        start: "top top",
        end: "+=500",
        scrub: 1,
      },
    });

    tl.addLabel("start")
      .to(
        ".footer-section .map-now",
        {
          left: 194,
          top: 12,
        },
        "start"
      )
      .to(
        ".footer-section__race",
        {
          scale: 0.4,
          y: 120,
        },
        "start"
      )
      .to(
        ".week-section__title, .week-section__subtitle",
        {
          opacity: 1,
        },
        "start"
      )
      .to(
        ".week-list>li:nth-child(1)",
        {
          opacity: 1,
        },
        "start+=1"
      )
      .to(
        ".week-list>li:nth-child(1)",
        {
          opacity: 0.5,
        },
        "start+=2.5"
      )
      .to(
        ".week-list>li:nth-child(2)",
        {
          opacity: 1,
        },
        "start+=2.5"
      )
      .to(
        ".week-list",
        {
          y: -300,
        },
        "start+=2.5"
      )
      .to(
        ".week-list>li:nth-child(1)",
        {
          opacity: 0,
        },
        "start+=4"
      )
      .to(
        ".week-list>li:nth-child(2)",
        {
          opacity: 0.5,
        },
        "start+=4"
      )
      .to(
        ".week-list>li:nth-child(3)",
        {
          opacity: 1,
        },
        "start+=4"
      )
      .to(
        ".week-list",
        {
          y: -600,
        },
        "start+=5"
      )
      .to(
        ".week-list",
        {
          opacity: 0,
        },
        "start+=6"
      )
      .to(
        ".week-section__title, .week-section__subtitle",
        {
          opacity: 0,
        },
        "start+=6.5"
      )
      .to(
        ".footer-section__race",
        {
          scale: 0.8,
          y: 40,
        },
        "start+=6.5"
      );
  });
}
export default function Week() {
  return (
    <section
      id="week-section"
      className="pb-[3.8037rem] xl:min-h-screen xl:pt-[min(3.91vh,2.5rem)] xl:pb-[19.875rem]"
    >
      <TitleSection className="week-section__title mb-1 h-[4.5rem] text-center xl:h-[min(14.75vh,9.4375rem)]  ">
        年度最強合作，三大主題來襲
      </TitleSection>
      <p className="week-section__subtitle mb-10 text-center text-mobile-h5 text-secondary-dark xl:mb-[6.25rem] xl:text-desktop-h5">
        各路廠商強強聯手
        <br />
        共同設計出接地氣的網頁互動挑戰關卡
      </p>
      <div className="mx-auto px-5 xl:w-[min(81.94vw,73.75rem)] 2xl:w-[min(74.9vw,89.875rem)]">
        <WeekList />
      </div>
    </section>
  );
}

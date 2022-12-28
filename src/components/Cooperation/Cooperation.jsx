import gsap from "gsap";
import TitleSection from "../TitleSection/TitleSection";
import CooperationList from "./CooperationList";

export function HandleOfCooperationAnimation() {
  const mm = gsap.matchMedia();
  mm.add("(min-width:1280px)", () => {
    gsap.set(".cooperation-section__title, .cooperation-section__subtitle", {
      opacity: 0,
    });
    gsap.set(".cooperation-list", {
      opacity: 0,
      y: 50,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#cooperation-section",
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
          left: 80,
          top: 0,
        },
        "start"
      )
      .to(
        ".footer-section .map-now",
        {
          left: 114,
          top: 12,
        },
        "start"
      )
      .to(
        ".cooperation-section__title, .cooperation-section__subtitle",
        {
          opacity: 1,
        },
        "start"
      )
      .to(
        ".cooperation-list",
        {
          opacity: 1,
          y: 0,
        },
        "start+=1.5"
      )
      .to(
        ".cooperation-section__title, .cooperation-section__subtitle",
        {
          opacity: 0,
        },
        "start+=5"
      )
      .to(
        ".cooperation-list",
        {
          opacity: 0,
          y: 50,
        },
        "start+=5"
      );
  });
}
export default function Cooperation() {
  return (
    <section
      id="cooperation-section"
      className="pb-[3.75rem] xl:min-h-screen xl:pb-0 xl:pt-[min(3.91vh,2.5rem)]"
    >
      <TitleSection className="cooperation-section__title mb-1 h-[4.5rem] w-full text-center xl:mb-0 xl:h-[min(14.75vh,9.4375rem)]">
        本屆主題：互動式網頁設計？
      </TitleSection>
      <p className="cooperation-section__subtitle mb-10 text-center text-mobile-h5 text-secondary-dark md:text-desktop-h5 xl:mb-[min(3.81vh,2.4375rem)] xl:font-normal 2xl:font-bold">
        以下兩個角色進行攜手合作
      </p>
      <div className="mx-auto px-5 md:w-[62.24vw] xl:w-[min(81.94vw,73.75rem)]">
        <CooperationList />
      </div>
    </section>
  );
}

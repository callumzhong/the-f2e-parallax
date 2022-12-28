import gsap from "gsap";
import { Graffiti } from "../Decorate";

export function HandleOfEncourageAnimation() {
  const mm = gsap.matchMedia();
  mm.add("(min-width:1280px)", () => {
    gsap.set("#encourage-section .graffiti-left", {
      left: "-100%",
      bottom: "-35%",
    });
    gsap.set("#encourage-section .graffiti-right", {
      right: "-100%",
      bottom: "-35%",
    });
    gsap.set(".encourage-section__text", {
      scale: "1.5",
      y: -80,
      opacity: 0,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#encourage-section",
        pin: true,
        start: "top top",
        end: "+=500",
        scrub: 1,
      },
    });

    tl.addLabel("start")
      .to(
        "#encourage-section .graffiti-left",
        {
          left: "-20%",
          bottom: 0,
        },
        "start"
      )
      .to(
        "#encourage-section .graffiti-right",
        {
          right: "-20%",
          bottom: 0,
        },
        "start"
      )
      .to(
        ".footer-section__race",
        {
          scale: 1,
          y: 0,
        },
        "start"
      )
      .to(
        ".encourage-section__text",
        {
          opacity: 1,
          scale: 1,
          y: 0,
        },
        "start+=1"
      )
      .to(
        "#encourage-section .graffiti-left",
        {
          left: 0,
        },
        "start+=1"
      )
      .to(
        "#encourage-section .graffiti-right",
        {
          right: 0,
        },
        "start+=1"
      )
      .to(
        "#encourage-section .graffiti-left",
        {
          scale: 0.5,
          left: "40%",
          opacity: 0,
        },
        "start+=3"
      )
      .to(
        "#encourage-section .graffiti-right",
        {
          scale: 0.5,
          right: "40%",
          opacity: 0,
        },
        "start+=3"
      )
      .to(
        ".encourage-section__text",
        {
          opacity: 0,
        },
        "start+=3"
      );
  });
}

export default function Encourage() {
  return (
    <section
      id="encourage-section"
      className="relative overflow-hidden xl:h-screen"
    >
      <p className="encourage-section__text pt-[14.25rem] pb-[15.75rem] text-center text-mobile-h2 text-highlight xl:pb-0 xl:pt-[14.5rem] xl:text-desktop-h2">
        區區修煉
        <br className="xl:hidden" />
        已經無法滿足了嗎？
      </p>
      <Graffiti />
    </section>
  );
}

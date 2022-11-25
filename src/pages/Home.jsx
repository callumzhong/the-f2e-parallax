import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import Award from "@/components/Award";
import Cooperation from "@/components/Cooperation";
import Finish from "@/components/Finish";
import Hero from "@/components/Hero";
import Question from "@/components/Question";
import Schedule from "@/components/Schedule";
import Sponsor from "@/components/Sponsor";
import WeeklyStage from "@/components/WeeklyStage";
import Layout from "./Layout";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function HomePage() {
  const layoutRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-section__title",
          markers: true,
          start: "top 25%",
          end: "top 0%",
          scrub: true,
        },
      });

      tl.to(".footer-section__race", {
        maxHeight: "33.25vh",
        maxWidth: "900px",
        duration: 10,
      });
      tl.set(".hero-section__text", { text: "" }, 1)
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
    }, layoutRef);

    return () => ctx.revert();
  }, [layoutRef]);
  return (
    <Layout ref={layoutRef}>
      <Hero />
      <Question />
      <Cooperation />
      <WeeklyStage />
      <Schedule />
      <Award />
      <Sponsor />
      <Finish />
    </Layout>
  );
}

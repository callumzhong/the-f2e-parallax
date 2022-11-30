import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import Award from "@/components/Award";
import Cooperation from "@/components/Cooperation";
import Finish from "@/components/Finish";
import Hero, { heroAnimationHandler } from "@/components/Hero";

import Question from "@/components/Question";
import Schedule from "@/components/Schedule";
import Sponsor from "@/components/Sponsor";
import WeeklyStage from "@/components/WeeklyStage";
import Layout from "./Layout";
import { questionAnimationHandler } from "@/components/Question/Question";
import { cooperationAnimationHandler } from "@/components/Cooperation/Cooperation";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function HomePage() {
  const layoutRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      heroAnimationHandler(gsap);
      questionAnimationHandler(gsap);
      cooperationAnimationHandler(gsap);
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

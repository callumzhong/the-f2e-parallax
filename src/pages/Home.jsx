import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import Award from "@/components/Award";
import Cooperation from "@/components/Cooperation";
import Finish from "@/components/Finish";
import Hero, {
  gsapAnimationHandler as heroGsapAnimationHandler,
} from "@/components/Hero";

import { gsapAnimationHandler as footerGsapAnimationHandler } from "@/components/Footer";
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
      heroGsapAnimationHandler(gsap);
      footerGsapAnimationHandler(gsap);
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

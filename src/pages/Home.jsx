import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import Layout from "./Layout";
import Kanban from "@/components/Kanban";
import Question from "@/components/Question";
import Cooperation from "@/components/Cooperation";
import Week from "@/components/Week";
import Schedule from "@/components/Schedule";
import Encourage from "@/components/Encourage";
import Trophy from "@/components/Trophy";
import Sponsor from "@/components/Sponsor";
import SignUp from "@/components/SignUp";
import Finish from "@/components/Finish";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function HomePage() {
  const layoutRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {}, layoutRef);
    return () => ctx.revert();
  }, [layoutRef]);

  return (
    <Layout ref={layoutRef}>
      <Kanban />
      <Question />
      <Cooperation />
      <Week />
      <Schedule />
      <Encourage />
      <Trophy />
      <Sponsor />
      <Finish />
      <SignUp />
    </Layout>
  );
}

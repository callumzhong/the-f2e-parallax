import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import Layout from "./Layout";
import Kanban from "@/components/Kanban";
import Question from "@/components/Question";
import Cooperation from "@/components/Cooperation";
import Schedule from "@/components/Schedule";

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
      <Schedule />
    </Layout>
  );
}

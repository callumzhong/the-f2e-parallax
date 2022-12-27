import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import Layout from "./Layout";
import Kanban, { HandleOfKanbanAnimation } from "@/components/Kanban";
import Question, { HandleOfQuestionAnimation } from "@/components/Question";
import Cooperation, {
  HandleOfCooperationAnimation,
} from "@/components/Cooperation";
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
    const ctx = gsap.context(() => {
      HandleOfKanbanAnimation(gsap);
      HandleOfQuestionAnimation(gsap);
      HandleOfCooperationAnimation(gsap);
    }, layoutRef);
    return () => ctx.revert();
  }, []);

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

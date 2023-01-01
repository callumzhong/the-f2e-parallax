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
import Week, { HandleOfWeekAnimation } from "@/components/Week";
import Schedule, { HandleOfScheduleAnimation } from "@/components/Schedule";
import Encourage, { HandleOfEncourageAnimation } from "@/components/Encourage";
import Trophy, { HandleOfTrophyAnimation } from "@/components/Trophy";
import Sponsor, { HandleOfSponsorAnimation } from "@/components/Sponsor";
import SignUp from "@/components/SignUp";
import Finish from "@/components/Finish";
import { HandleOfFinishAnimation } from "@/components/Finish/Finish";
import { HandleOfSignUpAnimation } from "@/components/SignUp/SignUp";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function HomePage() {
  const layoutRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      HandleOfKanbanAnimation();
      HandleOfQuestionAnimation();
      HandleOfCooperationAnimation();
      HandleOfWeekAnimation();
      HandleOfScheduleAnimation();
      HandleOfEncourageAnimation();
      HandleOfTrophyAnimation();
      HandleOfSponsorAnimation();
      HandleOfFinishAnimation();
      HandleOfSignUpAnimation();
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

import Title from "@/components/Title/Title";
import ImageQuestionMobile1 from "@/assets/main/question_1_m.png";
import ImageQuestion1 from "@/assets/main/question_1.png";
import ImageQuestion2 from "@/assets/main/question_2.png";
import ImageQuestionMobile3 from "@/assets/main/question_3_m.png";
import ImageQuestion3 from "@/assets/main/question_3.png";
import QuestionList from "./QuestionList";
import Decorate from "./Decorate";
import { raceAnimation } from "../Footer";

const items = [
  {
    id: "question-1",
    title: "羨慕別人的酷酷網頁動畫？",
    image: {
      path: ImageQuestionMobile1,
      largeMedia: 1024,
      largePath: ImageQuestion1,
    },
  },
  {
    id: "question-2",
    title: "滿足不了同事的許願？",
    image: {
      path: ImageQuestion2,
    },
  },
  {
    id: "question-3",
    title: "動畫技能樹太雜無從下手？",
    image: {
      path: ImageQuestionMobile3,
      largeMedia: 1024,
      largePath: ImageQuestion3,
    },
  },
];

export function questionAnimationHandler(gsap) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".question-section",
      markers: true,
      start: "top top",
      end: "+=800",
      scrub: true,
    },
  });

  raceAnimation.question(tl);
}

export default function Question() {
  return (
    <section className="question-section relative w-full pt-[59px] pb-[207px] lg:pb-[35.25vh]">
      <Title>你是否也有以下困擾？</Title>
      <QuestionList items={items} />
      <Decorate />
    </section>
  );
}

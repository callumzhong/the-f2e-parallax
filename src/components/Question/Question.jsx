import Title from "@/components/Title/Title";
import ImageQuestionMobile1 from "@/assets/main/question_1_m.png";
import ImageQuestion1 from "@/assets/main/question_1.png";
import ImageQuestion2 from "@/assets/main/question_2.png";
import ImageQuestionMobile3 from "@/assets/main/question_3_m.png";
import ImageQuestion3 from "@/assets/main/question_3.png";
import QuestionList from "./QuestionList";
import Decorate from "./Decorate";

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

/**
 * 使用 gasp 處理 hero 區塊的動畫
 */
export function heroAnimationHandler(gsap) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero-section__title",
      markers: true,
      start: "top 25%",
      end: "top 0%",
      scrub: true,
    },
  });

  raceAnimation.hero(tl);
  mapAnimation.hero(tl);
  logoAnimation.hero(tl);
}

export default function Question() {
  return (
    <section className="relative w-full pt-[59px] pb-[207px] lg:pb-[35.25vh]">
      <Title>你是否也有以下困擾？</Title>
      <QuestionList items={items} />
      <Decorate />
    </section>
  );
}

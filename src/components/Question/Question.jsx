import Title from "@/components/UI/Title";
import ImageQuestionMobile1 from "@/assets/main/question_1_m.png";
import ImageQuestion1 from "@/assets/main/question_1.png";
import ImageQuestion2 from "@/assets/main/question_2.png";
import ImageQuestionMobile3 from "@/assets/main/question_3_m.png";
import ImageQuestion3 from "@/assets/main/question_3.png";
import QuestionList from "./QuestionList";

const items = [
  {
    id: "question-1",
    title: "羨慕別人的酷酷網頁動畫？",
    image: {
      path: ImageQuestionMobile1,
      largeMedia: 768,
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
      largeMedia: 768,
      largePath: ImageQuestion3,
    },
  },
];

export default function Question() {
  return (
    <section className="relative w-full pt-[59px] pb-[200px]">
      <Title>你是否也有以下困擾？</Title>
      <QuestionList items={items} />
    </section>
  );
}

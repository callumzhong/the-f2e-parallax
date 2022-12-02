import TitleSection from "../TitleSection/TitleSection";
import { H4 } from "../Typography";
import ImageQuestionMobile1 from "@/assets/main/question_1_m.png";
import ImageQuestion1 from "@/assets/main/question_1.png";
import ImageQuestion2 from "@/assets/main/question_2.png";
import ImageQuestionMobile3 from "@/assets/main/question_3_m.png";
import ImageQuestion3 from "@/assets/main/question_3.png";

export default function Question() {
  return (
    <section className="xl:h-screen">
      {/* 響應式保持 1440px 設計稿區塊佔比 */}
      <div className="flex items-center pb-10 xl:h-[min(22.56%,231px)] xl:pb-0">
        <TitleSection className="h-[72px] w-full xl:h-[65.37%]">
          你是否也有以下困擾？
        </TitleSection>
      </div>
      <div className="mx-auto px-5 md:max-w-[476px] xl:max-w-none xl:px-0 xl:pl-1 2xl:max-w-[1440px]">
        <ul className="flex h-full flex-wrap">
          <li className="h-full xl:w-1/3 xl:px-[10px] 2xl:w-[456.67px]">
            <H4 className="text-center leading-[min(4.39vh,45px)] text-highlight xl:mb-1">
              羨慕別人的酷酷網頁動畫？
            </H4>
            <picture>
              <source media="(min-width:1024px)" srcSet={ImageQuestion1} />
              <img
                className="xl:h-[min(40.23vh,412px)] xl:w-full"
                src={ImageQuestionMobile1}
                alt=""
              />
            </picture>
          </li>
          <li className="xl:w-1/3 xl:px-[10px] 2xl:w-[456.67px]">
            <H4 className="text-center leading-[min(4.39vh,45px)] text-highlight xl:mb-1">
              滿足不了同事的許願？
            </H4>
            <img
              className="xl:h-[min(40.23vh,412px)] xl:w-full"
              src={ImageQuestion2}
              alt=""
            />
          </li>
          <li className="xl:w-1/3 xl:px-[10px] 2xl:w-[456.67px]">
            <H4 className="text-center leading-[min(4.39vh,45px)] text-highlight xl:mb-1">
              動畫技能樹太雜無從下手？
            </H4>
            <picture>
              <source media="(min-width:1024px)" srcSet={ImageQuestion3} />
              <img
                className="xl:h-[min(40.23vh,412px)] xl:max-h-[412px] xl:w-full"
                src={ImageQuestionMobile3}
                alt=""
              />
            </picture>
          </li>
        </ul>
      </div>
    </section>
  );
}

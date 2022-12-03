import PropTypes from "prop-types";
import ImageQuestionMobile1 from "@/assets/main/question_1_m.png";
import ImageQuestion1 from "@/assets/main/question_1.png";
import ImageQuestion2 from "@/assets/main/question_2.png";
import ImageQuestionMobile3 from "@/assets/main/question_3_m.png";
import ImageQuestion3 from "@/assets/main/question_3.png";

function Title({ children }) {
  return (
    <h3 className="text-center text-mobile-h4 leading-[2.8125rem] text-highlight md:text-desktop-h4 md:leading-[2.8125rem] xl:mb-1 xl:leading-[min(4.39vh,2.8125rem)]">
      {children}
    </h3>
  );
}

Title.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default function QuestionList() {
  return (
    <ul className="flex flex-wrap xl:-mx-[0.625rem]">
      <li className="h-full xl:w-1/3 xl:px-[0.625rem] 2xl:w-[28.5419rem]">
        <Title>羨慕別人的酷酷網頁動畫？</Title>
        <picture>
          <source media="(min-width:1024px)" srcSet={ImageQuestion1} />
          <img
            className="xl:h-[min(40.23vh,25.75rem)] xl:w-full"
            src={ImageQuestionMobile1}
            alt=""
          />
        </picture>
      </li>
      <li className="xl:w-1/3 xl:px-[0.625rem] 2xl:w-[28.5419rem]">
        <Title>滿足不了同事的許願？</Title>
        <img
          className="xl:h-[min(40.23vh,25.75rem)] xl:w-full"
          src={ImageQuestion2}
          alt=""
        />
      </li>
      <li className="xl:w-1/3 xl:px-[0.625rem] 2xl:w-[28.5419rem]">
        <Title>動畫技能樹太雜無從下手？</Title>
        <picture>
          <source media="(min-width:1024px)" srcSet={ImageQuestion3} />
          <img
            className="xl:h-[min(40.23vh,25.75rem)] xl:max-h-[25.75rem] xl:w-full"
            src={ImageQuestionMobile3}
            alt=""
          />
        </picture>
      </li>
    </ul>
  );
}

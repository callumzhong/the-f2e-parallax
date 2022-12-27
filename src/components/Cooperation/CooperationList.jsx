import PropTypes from "prop-types";
import JoinButton from "../JoinButton";
import ImageCharacterF2E from "@/assets/character/character_f2e.png";
import ImageCharacterUI from "@/assets/character/character_ui.png";
import ImageCharacterTeam from "@/assets/character/character_team.png";

function Title({ children }) {
  return (
    <h3 className=" text-center text-mobile-h4 text-primary md:text-desktop-h4 xl:text-[min(3.125vh,2rem)] xl:font-normal xl:leading-[min(4.39vh,2.8125rem)] 2xl:font-bold">
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

export default function CooperationList() {
  return (
    <ul className="cooperation-list flex flex-col justify-center gap-5 xl:flex-row xl:gap-[3.75rem]">
      <li className="flex items-center gap-5 xl:w-1/3 xl:justify-center">
        <img className="w-1/2 xl:hidden" src={ImageCharacterF2E} alt="" />
        <div className="w-1/2 xl:w-auto">
          <JoinButton className="mx-auto mb-4 h-[8.4375rem] w-[6.4375rem] xl:h-[min(13.19vh,8.4375rem)]" />
          <Title>前端工程師</Title>
        </div>
      </li>
      <li className="flex flex-row-reverse items-center gap-5 xl:w-1/3 xl:justify-center">
        <img className="w-1/2 xl:hidden" src={ImageCharacterUI} alt="" />
        <div className="w-1/2 xl:w-auto">
          <JoinButton className="mx-auto  mb-4 h-[8.4375rem] w-[6.4375rem] xl:h-[min(13.19vh,8.4375rem)]" />
          <Title>UI設計師</Title>
        </div>
      </li>
      <li className="flex items-center gap-5 xl:w-1/3 xl:justify-center">
        <img className="w-1/2 xl:hidden" src={ImageCharacterTeam} alt="" />
        <div className="w-1/2 xl:w-auto">
          <JoinButton className="mx-auto mb-4 h-[8.4375rem] w-[6.4375rem] xl:h-[min(13.19vh,8.4375rem)]" />
          <Title>團隊組(UI+前端)</Title>
        </div>
      </li>
    </ul>
  );
}

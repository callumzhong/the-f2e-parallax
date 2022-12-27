import ImageRoad from "@/assets/main/road.png";
import ImageCharacterF2EGif from "@/assets/character/character_f2e.gif";
import ImageCharacterTeamGif from "@/assets/character/character_team.gif";
import ImageCharacterUIGif from "@/assets/character/character_ui.gif";
import { Flowers } from "../Decorate";

export const raceAnimation = {
  hero: (tl) => {
    tl.to(".footer-section__race", {
      maxHeight: "33.25vh",
      maxWidth: "900px",
      duration: 50,
    });
  },
  question: (tl) => {
    tl.to(".footer-section__race", {
      maxHeight: "55.30vh",
      maxWidth: "1150px",
      duration: 50,
    });
  },
  cooperation: (tl) => {
    tl.to(".footer-section__race", {
      maxHeight: "21.76vh",
      maxWidth: "800px",
      duration: 50,
    });
  },
  schedule: (tl) => {
    tl.to(".footer-section__race", {
      maxHeight: "40.52vh",
      maxWidth: "1100px",
      duration: 50,
    });
  },
};

// TODO: 響應式寬度要調整成 % 比，僅當呈現最大 xl 時使用 min function 限制最大寬度
export default function RaceTrack() {
  return (
    // mobile index, desktop Kanban
    <div className="footer-section__race relative mx-auto flex justify-center px-5 md:w-[349px] xl:h-[min(50.48vh,517px)] xl:w-[min(81.60vw,1175px)] xl:translate-x-4 2xl:h-[min(55.64vh,601px)]">
      <img className="absolute bottom-0" src={ImageRoad} alt="" />
      <img
        className="relative w-[112.35px] xl:h-full xl:w-auto 2xl:bottom-4"
        src={ImageCharacterF2EGif}
        alt=""
      />
      <img
        className="relative w-[118.49px] xl:bottom-[15px] xl:h-full xl:w-auto 2xl:bottom-[27px]"
        src={ImageCharacterUIGif}
        alt=""
      />
      <img
        className="relative w-[112.35px] xl:h-full xl:w-auto 2xl:bottom-[9px]"
        src={ImageCharacterTeamGif}
        alt=""
      />
      <div>
        <Flowers />
      </div>
    </div>

    // mobile , desktop question
    // <div className="footer-section__race relative bottom-0 flex w-[10.25rem] items-end justify-center md:w-[17.3125rem] xl:w-[min(62.5vw,56.25rem)]">
    //   <img className="absolute inset-x-0 bottom-0" src={ImageRoad} alt="" />
    //   <img
    //     className="relative w-[3.2994rem] xl:h-[min(35.74vh,22.875rem)] xl:w-auto 2xl:bottom-4"
    //     src={ImageCharacterF2EGif}
    //     alt=""
    //   />
    //   <img
    //     className="relative w-[3.48rem] xl:bottom-[min(2.25vh,1.4375rem)] xl:h-[min(35.74vh,22.875rem)]  xl:w-auto 2xl:bottom-[1.6875rem]"
    //     src={ImageCharacterUIGif}
    //     alt=""
    //   />
    //   <img
    //     className="relative w-[3.2994rem] xl:bottom-[min(1.17vh,0.75rem)] xl:h-[min(31.35vh,20.0625rem)] xl:w-auto 2xl:bottom-[0.5625rem]"
    //     src={ImageCharacterTeamGif}
    //     alt=""
    //   />
    // </div>

    // desktop cooperation
    // <div className="footer-section__race relative bottom-0 flex items-end justify-center xl:w-[min(79.86vw,71.875rem)]">
    //   <img className="absolute inset-x-0 bottom-0" src={ImageRoad} alt="" />
    //   <img
    //     className="relative xl:-bottom-[min(2.93vh,1.875rem)] xl:h-[min(58.99vh,37.75rem)]"
    //     src={ImageCharacterF2EGif}
    //     alt=""
    //   />
    //   <img
    //     className="relative xl:bottom-[min(2.25vh,1.4375rem)] xl:h-[min(52.34vh,33.5rem)]"
    //     src={ImageCharacterUIGif}
    //     alt=""
    //   />
    //   <img
    //     className="relative xl:-bottom-[0.3125rem] xl:h-[min(51.37vh,32.875rem)]"
    //     src={ImageCharacterTeamGif}
    //     alt=""
    //   />
    // </div>
  );
}

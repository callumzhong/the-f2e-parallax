import ImageRoad from "@/assets/main/road.png";
import ImageCharacterF2EGif from "@/assets/character/character_f2e.gif";
import ImageCharacterTeamGif from "@/assets/character/character_team.gif";
import ImageCharacterUIGif from "@/assets/character/character_ui.gif";

/**
 * 使用 gasp 處理 race 動畫
 */
export function raceAnimationHandler(tl) {
  tl.to(".footer-section__race", {
    maxHeight: "33.25vh",
    maxWidth: "900px",
    duration: 50,
  });
}

export default function RaceTrack() {
  return (
    <div className="footer-section__race relative flex w-full justify-center pb-4 md:w-[45.44vw] lg:max-h-[52vh] lg:w-full lg:max-w-[1175px] lg:gap-6">
      <img className="absolute inset-x-0 bottom-0" src={ImageRoad} alt="" />
      <img
        className="relative w-[112px] lg:h-full lg:w-auto"
        src={ImageCharacterF2EGif}
        alt=""
      />
      <img
        className="relative w-[118px] lg:h-full lg:w-auto lg:scale-105"
        src={ImageCharacterUIGif}
        alt=""
      />
      <img
        className="relative w-[112px] lg:h-full lg:w-auto"
        src={ImageCharacterTeamGif}
        alt=""
      />
    </div>
  );
}

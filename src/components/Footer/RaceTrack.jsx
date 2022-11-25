import ImageRoad from "@/assets/main/road.png";
import ImageCharacterF2EGif from "@/assets/character/character_f2e.gif";
import ImageCharacterTeamGif from "@/assets/character/character_team.gif";
import ImageCharacterUIGif from "@/assets/character/character_ui.gif";

export default function RaceTrack() {
  return (
    <>
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
    </>
  );
}

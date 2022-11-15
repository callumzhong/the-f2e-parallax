import ImageRoad from "@/assets/main/road.png";
import ImageCharacterF2EGif from "@/assets/character/character_f2e.gif";
import ImageCharacterTeamGif from "@/assets/character/character_team.gif";
import ImageCharacterUIGif from "@/assets/character/character_ui.gif";

export default function RaceTrack() {
  return (
    <div className="absolute inset-x-5 bottom-0">
      <img src={ImageRoad} alt="" />
      <img
        className="absolute bottom-0 left-[10%] w-[112px]"
        src={ImageCharacterF2EGif}
        alt=""
      />
      <img
        className="absolute bottom-0 left-[50%] -ml-[56px] w-[112px]"
        src={ImageCharacterUIGif}
        alt=""
      />
      <img
        className="absolute right-[10%] bottom-0 w-[112px]
        "
        src={ImageCharacterTeamGif}
        alt=""
      />
    </div>
  );
}

import ImageRoad from "@/assets/main/road.png";
import ImageCharacterF2EGif from "@/assets/character/character_f2e.gif";
import ImageCharacterTeamGif from "@/assets/character/character_team.gif";
import ImageCharacterUIGif from "@/assets/character/character_ui.gif";

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

export default function RaceTrack() {
  return (
    <div className="footer-section__race relative flex translate-x-8 justify-center  px-5 md:w-[349px] xl:h-[50.48vh] xl:max-h-[517px] xl:w-[1175px] 2xl:h-[55.64vh] 2xl:max-h-[601px]">
      <img className="absolute inset-x-0 bottom-0" src={ImageRoad} alt="" />
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
    </div>
  );
}

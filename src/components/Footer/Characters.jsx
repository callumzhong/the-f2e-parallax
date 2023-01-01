import ImageCharacterF2EGif from "@/assets/character/character_f2e.gif";
import ImageCharacterTeamGif from "@/assets/character/character_team.gif";
import ImageCharacterUIGif from "@/assets/character/character_ui.gif";

export default function Characters() {
  return (
    <div className="footer-section__characters flex origin-bottom items-end justify-center px-5">
      <img
        className="relative w-[7.0219rem] origin-bottom-right xl:bottom-[0.3125rem] xl:h-[min(50.49vh,32.3125rem)] xl:w-auto 2xl:bottom-[1rem] 2xl:w-[min(18.28vw,21.9375rem)] 2xl:max-w-full"
        src={ImageCharacterF2EGif}
        alt=""
      />
      <img
        className="relative bottom-[0.0956rem] w-[7.4056rem] origin-bottom xl:h-[min(50.49vh,32.3125rem)] xl:w-auto 2xl:bottom-[1.6875rem] 2xl:w-[min(19.27vw,23.125rem)] 2xl:max-w-full"
        src={ImageCharacterUIGif}
        alt=""
      />
      <img
        className="relative bottom-[0.0381rem] w-[7.0219rem] origin-bottom-left xl:bottom-[0.0625rem] xl:h-[min(44.34vh,28.375rem)] xl:w-auto 2xl:bottom-[0.5625rem] 2xl:w-[min(18.28vw,21.9375rem)] 2xl:max-w-full"
        src={ImageCharacterTeamGif}
        alt=""
      />
    </div>
  );
}

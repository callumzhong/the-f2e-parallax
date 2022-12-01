import ImageLogo from "@/assets/logo/logo.png";
import ImageLogoText from "@/assets/logo/logo_text.png";
import ImageStart from "@/assets/main/start.png";

export default function Banner() {
  return (
    <div className="mb-3 pt-[91px] lg:pt-11">
      <img className="mx-auto w-[253px] lg:hidden" src={ImageLogo} alt="" />
      <img
        className="relative z-20 mx-auto hidden max-h-[236.03px] w-[680px] max-w-[680px] lg:block xl:h-[23.04vh] xl:w-auto 2xl:h-[21.85vh]"
        src={ImageLogoText}
        alt=""
      />
      <div className="absolute left-0 top-0 z-10 hidden h-screen w-screen overflow-hidden xl:block 2xl:inset-x-0 2xl:mx-auto 2xl:max-w-[1430px]">
        <img className="h-[101vh] w-full" src={ImageStart} alt="" />
      </div>
    </div>
  );
}

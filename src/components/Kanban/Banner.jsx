import ImageLogo from "@/assets/logo/logo.png";
import ImageLogoText from "@/assets/logo/logo_text.png";
import ImageStart from "@/assets/main/start.png";

export default function Banner() {
  return (
    <div className="mb-3 pt-[5.6875rem] lg:pt-11">
      <img
        className="mx-auto w-[15.8125rem] xl:hidden"
        src={ImageLogo}
        alt=""
      />
      <img
        className="relative z-20 mx-auto hidden w-auto xl:block xl:h-[min(23.05vh,14.7519rem)] 2xl:h-[min(21.85vh,14.7519rem)]"
        src={ImageLogoText}
        alt=""
      />
      <div className="absolute left-0 top-0 z-10 hidden h-screen w-screen overflow-hidden xl:block 2xl:inset-x-0 2xl:mx-auto 2xl:w-[min(74.50vw,89.375rem)]">
        <img className="h-[101vh] w-full" src={ImageStart} alt="" />
      </div>
    </div>
  );
}

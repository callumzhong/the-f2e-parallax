import ImageLogoText from "@/assets/logo/logo_text.png";
import ImageLogo from "@/assets/logo/logo.png";

export const logoAnimation = {
  hero: (tl) => {
    tl.to(".header-section__logo", {
      opacity: 1,
      duration: 50,
    });
  },
};

export default function Logo() {
  return (
    <>
      <img
        className="mx-auto w-[133px] lg:ml-0 lg:hidden"
        src={ImageLogoText}
        alt="THE F2E"
      />
      <img
        className="header-section__logo hidden xl:block xl:h-[min(14.54vh,9.3069rem)] 2xl:h-[min(13.79vh,9.3069rem)]"
        src={ImageLogo}
        alt="THE F2E"
      />
    </>
  );
}

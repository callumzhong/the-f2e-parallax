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
        className="header-section__logo hidden w-[200px] lg:block lg:opacity-0"
        src={ImageLogo}
        alt="THE F2E"
      />
    </>
  );
}

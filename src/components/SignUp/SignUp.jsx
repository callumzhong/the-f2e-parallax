import gsap from "gsap";
import ImageLogo from "@/assets/logo/logo.png";
import JoinButton from "../JoinButton";
import gaspTimelineAddHandler from "@/utils/gaspTimelineAddHandler";

const gsapMobileConfig = {
  default: [
    {
      target: ".sign-up-section__logo",
      vars: {
        opacity: 0,
        y: -400,
      },
    },
    {
      target: "sign-up-section__button,.sign-up-section__text",
      vars: {
        opacity: 0,
        y: 100,
      },
    },
  ],
  child: [],
};

export function HandleOfSignUpAnimation() {
  const mm = gsap.matchMedia();
  mm.add("(max-width:1279.98px)", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#sign-up-section",
        start: "top top",
        end: "+=200",
        scrub: 1,
      },
    });
    gaspTimelineAddHandler({
      tl,
      config: gsapMobileConfig,
    });
  });
}
export default function SignUp() {
  return (
    <section
      id="sign-up-section"
      className="flex h-screen flex-col justify-center"
    >
      <img
        className="sign-up-section__logo mx-auto mb-10 w-[14.125rem]"
        src={ImageLogo}
        alt=""
      />
      <JoinButton
        className="sign-up-section__button relative z-50 mx-auto mb-5 h-[6.875rem] w-max"
        href="https://2022.thef2e.com/signup"
        isStay
      />
      <p className="sign-up-section__text text-center text-mobile-h2 text-highlight">
        立即報名
      </p>
    </section>
  );
}

import ImageLogo from "@/assets/logo/logo.png";
import JoinButton from "../JoinButton";

export default function SignUp() {
  return (
    <section className="pt-[15rem] pb-[2.4312rem]">
      <img className="mx-auto mb-10 w-[14.125rem]" src={ImageLogo} alt="" />
      <JoinButton
        className="mx-auto mb-5 h-[6.875rem] w-max"
        href="https://2022.thef2e.com/signup"
        isStay
      />
      <p className="text-center text-mobile-h2 text-highlight">立即報名</p>
    </section>
  );
}

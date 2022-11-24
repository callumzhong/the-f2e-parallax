import ImageLogo from "@/assets/logo/logo.png";
import JoinButton from "../JoinButton";
import { H2 } from "../Typography";

export default function Finish() {
  return (
    <section className="w-full pt-[200px] pb-[84px]">
      <img className="mx-auto mb-10 w-[226px]" src={ImageLogo} alt="" />
      <JoinButton className="mb-5" isStay isAnimation />
      <H2 className="text-center text-highlight md:text-[28px]">立即報名</H2>
    </section>
  );
}

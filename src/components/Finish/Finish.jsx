import ImageLogo from "@/assets/logo/logo.png";
import JoinButton from "../JoinButton";
import { H2 } from "../Typography";
export default function Finish() {
  return (
    <section className='w-full pt-[200px] pb-[280px]'>
      <img
        className='mx-auto mb-10 w-[226px]'
        src={ImageLogo}
        alt=''
      />
      <JoinButton isStay isAnimation />
      <H2 className='text-center text-highlight'>
        立即報名
      </H2>
    </section>
  );
}

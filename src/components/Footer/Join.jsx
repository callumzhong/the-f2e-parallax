import JoinButton from "../JoinButton";
import { H5 } from "../Typography";

export default function Join() {
  return (
    // index
    <div className="absolute right-5 bottom-5 hidden text-center lg:block">
      <H5 as="p" className="mb-6 text-primary">
        JOIN
      </H5>
      <JoinButton
        className="w-10 xl:w-[103px]"
        href="https://2022.thef2e.com/signup"
        isStay
        isAnimation
      />
    </div>

    // center
    // <div className="absolute right-4 bottom-0 text-center lg:hidden">
    //   <p className="mb-[2.67px] text-sm leading-relaxed text-primary">JOIN</p>
    //   <JoinButton
    //     className="w-10 xl:w-[103px]"
    //     href="https://2022.thef2e.com/signup"
    //     isStay
    //     isAnimation
    //   />
    // </div>
  );
}

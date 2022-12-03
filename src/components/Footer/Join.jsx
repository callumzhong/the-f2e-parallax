import JoinButton from "../JoinButton";

export default function Join() {
  return (
    // index
    <div className="absolute right-5 bottom-5 hidden text-center lg:block">
      <p className="mb-1 text-sm text-primary xl:text-2xl xl:leading-[2.125rem]">
        JOIN
      </p>
      <JoinButton
        className="w-10 xl:h-[min(12.01vh,10.8125rem)] xl:w-[103px] 2xl:h-[min(16.02vh,10.8125rem)]"
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

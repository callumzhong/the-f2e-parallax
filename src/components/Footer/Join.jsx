import JoinButton from "../JoinButton";

export default function Join() {
  return (
    <div className="join absolute right-5 bottom-5">
      <p className="mb-1 text-center text-sm text-primary xl:text-2xl xl:leading-[2.125rem]">
        JOIN
      </p>
      <JoinButton
        className="h-[3.3462rem] w-10  xl:h-[min(12.01vh,10.8125rem)] xl:w-[6.4375rem] 2xl:h-[min(16.02vh,10.8125rem)]"
        href="https://2022.thef2e.com/signup"
        isStay
        isAnimation
      />
    </div>
  );
}

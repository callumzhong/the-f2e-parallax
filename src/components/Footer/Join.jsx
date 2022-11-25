import JoinButton from "../JoinButton";
import { H5 } from "../Typography";

export default function Join() {
  return (
    <div className="absolute right-4 bottom-0 hidden text-center lg:block">
      <H5 as="p" className="mb-6 text-primary">
        JOIN
      </H5>
      <JoinButton href="https://2022.thef2e.com/signup" isStay isAnimation />
    </div>
  );
}

import { H4 } from "../Typography";
import UserBadges from "../UserBadges";

export default function ActivityGroup() {
  return (
    <ul className="flex flex-col items-center gap-4 text-center text-primary lg:-ml-12 lg:flex-row lg:justify-center lg:gap-44">
      <li>
        <H4 className="mb-2 md:text-[20px]">前端工程師</H4>
        <UserBadges>920</UserBadges>
      </li>
      <li>
        <H4 className="mb-2 md:text-[20px]">UI設計師</H4>
        <UserBadges>110</UserBadges>
      </li>
      <li>
        <H4 className="mb-2 md:text-[20px]">團體組</H4>
        <UserBadges>41</UserBadges>
      </li>
    </ul>
  );
}

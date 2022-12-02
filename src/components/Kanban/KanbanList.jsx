import Title from "./Title";
import UserBadges from "../UserBadges";

export default function KanbanList() {
  return (
    <ul className="mx-auto flex flex-col items-center gap-4 px-5 text-center xl:flex-row xl:justify-center xl:gap-5 2xl:max-w-[1196px]">
      <li className="w-max lg:w-4/12 xl:w-[300px] 2xl:w-[385.33px]">
        <Title>前端工程師</Title>
        <UserBadges>920</UserBadges>
      </li>
      <li className="w-max lg:w-4/12 xl:w-[300px] 2xl:w-[385.33px]">
        <Title>UI設計師</Title>
        <UserBadges>110</UserBadges>
      </li>
      <li className="w-max lg:w-4/12 xl:w-[300px] 2xl:w-[385.33px]">
        <Title>團體組</Title>
        <UserBadges>41</UserBadges>
      </li>
    </ul>
  );
}

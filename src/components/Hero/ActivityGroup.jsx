import H4 from "../UI/H4";
import UserBadges from "../UI/UserBadges";

export default function ActivityGroup() {
  return (
    <ul className="flex flex-col items-center gap-4 text-primary">
      <li>
        <H4 className="mb-2">前端工程師</H4>
        <UserBadges>920</UserBadges>
      </li>
      <li>
        <H4 className="mb-2">UI設計師</H4>
        <UserBadges>110</UserBadges>
      </li>
      <li>
        <H4 className="mb-2">團體組</H4>
        <UserBadges>41</UserBadges>
      </li>
    </ul>
  );
}

import PropTypes from "prop-types";
import UserBadges from "../UserBadges";

function Title({ children }) {
  return (
    <h2 className="mb-2 text-mobile-h4 text-primary xl:text-desktop-h5">
      {children}
    </h2>
  );
}

Title.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default function KanbanList() {
  return (
    <ul className="mx-auto flex flex-col items-center gap-4 px-5 text-center xl:max-w-[min(65.28vw,58.75rem)] xl:flex-row xl:justify-center xl:gap-5 2xl:max-w-[(min(62.29vw,74.75rem))]">
      <li className="w-max lg:w-1/3">
        <Title>前端工程師</Title>
        <UserBadges>920</UserBadges>
      </li>
      <li className="w-max lg:w-1/3">
        <Title>UI設計師</Title>
        <UserBadges>110</UserBadges>
      </li>
      <li className="w-max lg:w-1/3">
        <Title>團體組</Title>
        <UserBadges>41</UserBadges>
      </li>
    </ul>
  );
}

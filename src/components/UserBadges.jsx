import PropTypes from "prop-types";
import { ReactComponent as IconUser } from "@/assets/ic/ic_users.svg";

export default function UserBadges({ children }) {
  return (
    <div className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-1 text-white xl:px-7">
      <IconUser className="h-[1.375rem] w-[1.375rem] stroke-white" />
      <span className="text-mobile-highlight xl:text-desktop-highlight xl:leading-[2.125rem]">
        {children}
      </span>
    </div>
  );
}

UserBadges.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

import PropTypes from "prop-types";
import { ReactComponent as IconUser } from "../../assets/ic/ic_users.svg";
import Strong from "./Strong";

export default function UserBadges({ children }) {
  return (
    <div className="flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-1 text-white">
      <IconUser className="h-[22px] w-[22px] stroke-white" />
      <Strong>{children}</Strong>
    </div>
  );
}

UserBadges.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

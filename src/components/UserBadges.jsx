import PropTypes from "prop-types";
import { ReactComponent as IconUser } from "@/assets/ic/ic_users.svg";
import { Strong } from "./Typography";

export default function UserBadges({ children }) {
  return (
    <div className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-1 text-white xl:px-7">
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

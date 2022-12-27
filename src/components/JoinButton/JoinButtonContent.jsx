import clsx from "clsx";
import PropTypes from "prop-types";
import ImageBtnJoinHead from "@/assets/btn/btn_joinHand.png";
import ImageBtnJoin from "@/assets/btn/btn_join.png";
import ImageBtnJoinHover from "@/assets/btn/btn_join_h.png";

export default function JoinButtonContent({ isStay, isAnimation }) {
  return (
    <>
      <img
        className={clsx(
          "mx-auto mb-1 h-[52.59%] group-hover:opacity-100 group-active:translate-y-[40%]",
          !isStay && "opacity-0",
          isAnimation && "animate-bounce-small group-hover:animate-none"
        )}
        src={ImageBtnJoinHead}
        alt=""
      />
      <img
        className="mx-auto h-[44.44%] group-active:hidden"
        src={ImageBtnJoin}
        alt=""
      />
      <img
        className="mx-auto hidden h-[44.44%] group-active:block"
        src={ImageBtnJoinHover}
        alt=""
      />
    </>
  );
}

JoinButtonContent.defaultProps = {
  isStay: false,
  isAnimation: false,
};

JoinButtonContent.propTypes = {
  isStay: PropTypes.bool,
  isAnimation: PropTypes.bool,
};

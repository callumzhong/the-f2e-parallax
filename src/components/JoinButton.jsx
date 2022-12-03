import clsx from "clsx";
import propTypes from "prop-types";
import ImageBtnJoinHead from "@/assets/btn/btn_joinHand.png";
import ImageBtnJoin from "@/assets/btn/btn_join.png";
import ImageBtnJoinHover from "@/assets/btn/btn_join_h.png";

export default function JoinButton({ isStay, isAnimation, className, href }) {
  return (
    <div className={clsx("group relative mx-auto", className)}>
      <img
        className={clsx(
          "mx-auto mb-1 w-[55.35%] group-hover:opacity-100 group-active:translate-y-[40%]",
          !isStay && "opacity-0",
          isAnimation && "animate-bounce group-hover:animate-none"
        )}
        src={ImageBtnJoinHead}
        alt=""
      />
      <img className="mx-auto group-active:hidden" src={ImageBtnJoin} alt="" />
      <img
        className="mx-auto hidden group-active:block"
        src={ImageBtnJoinHover}
        alt=""
      />
      {href && (
        <a
          target="_blank"
          href={href}
          className="absolute inset-0 opacity-0"
          rel="noreferrer"
        >
          {href}
        </a>
      )}
    </div>
  );
}

JoinButton.defaultProps = {
  className: null,
  isStay: false,
  isAnimation: false,
  href: null,
};

JoinButton.propTypes = {
  isStay: propTypes.bool,
  isAnimation: propTypes.bool,
  className: propTypes.string,
  href: propTypes.string,
};

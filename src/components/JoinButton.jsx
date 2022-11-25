import clsx from "clsx";
import propTypes from "prop-types";

export default function JoinButton({ isStay, isAnimation, className, href }) {
  return (
    <div className="group relative mx-auto mb-4 w-max">
      <div
        className={clsx(
          "mx-auto mb-1 h-[71px] w-[51px] bg-btn_joinHand bg-cover group-hover:opacity-100",
          {
            "opacity-0": !isStay,
            "animate-bounce": isAnimation,
          },
          className
        )}
      />
      <div className="h-[60px] w-[103px] bg-btn_join bg-cover" />
      {href && (
        <a
          href={href}
          target="_blank"
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

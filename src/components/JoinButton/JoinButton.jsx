import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import JoinButtonContent from "./JoinButtonContent";

export default function JoinButton({ isStay, isAnimation, className, href }) {
  if (href) {
    return (
      <a
        target="_blank"
        rel="noreferrer"
        href={href}
        className={clsx("overflow group relative mx-auto block", className)}
      >
        <JoinButtonContent isAnimation={isAnimation} isStay={isStay} />
      </a>
    );
  }
  return (
    <div
      className={clsx(
        "overflow group relative mx-auto overflow-hidden",
        className
      )}
    >
      <JoinButtonContent isAnimation={isAnimation} isStay={isStay} />
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
  isStay: PropTypes.bool,
  isAnimation: PropTypes.bool,
  className: PropTypes.string,
  href: PropTypes.string,
};

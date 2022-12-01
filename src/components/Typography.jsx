/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

function Typography({ as, className, children }) {
  return React.createElement(as || "div", { className }, children);
}

Typography.defaultProps = {
  as: null,
  className: null,
};

Typography.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export function H1({ as, className, ...props }) {
  return (
    <Typography
      as={as || "h1"}
      className={clsx(
        className,
        "text-[20px] font-bold leading-normal lg:text-[32px]"
      )}
      {...props}
    />
  );
}

export function H2({ as, className, ...props }) {
  return (
    <Typography
      as={as || "h2"}
      className={clsx(
        className,
        "text-[28px] font-bold leading-normal md:text-[60px]"
      )}
      {...props}
    />
  );
}

export function H3({ as, className, ...props }) {
  return (
    <Typography
      as={as || "h3"}
      className={clsx(
        className,
        "text-[24px] font-bold leading-relaxed md:text-[44px] lg:leading-normal"
      )}
      {...props}
    />
  );
}

export function H4({ as, className, ...props }) {
  return (
    <Typography
      as={as || "h4"}
      className={clsx(
        className,
        "text-[20px] font-bold leading-relaxed md:text-[32px]"
      )}
      {...props}
    />
  );
}

export function H5({ as, className, ...props }) {
  return (
    <Typography
      as={as || "h5"}
      className={clsx(
        className,
        "text-[18px] font-bold leading-relaxed  md:text-[24px]"
      )}
      {...props}
    />
  );
}

export function Strong({ as, className, ...props }) {
  return (
    <Typography
      as={as || "strong"}
      className={clsx(
        className,
        "text-[18px] font-bold leading-relaxed lg:text-[24px]"
      )}
      {...props}
    />
  );
}

export function Caption({ as, className, ...props }) {
  return (
    <Typography
      as={as || "p"}
      className={clsx(className, "leading-relaxed")}
      {...props}
    />
  );
}

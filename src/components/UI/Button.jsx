import clsx from "clsx";
import PropTypes from "prop-types";

export const theme = {
  primary: "bg-primary text-white rounded-full",
  secondary: "bg-secondary-dark rounded-full text-white",
  "secondary-outline":
    "border-secondary-dark rounded-full border-2 text-secondary-dark",
};

export const size = {
  md: "px-6 py-1 text-lg leading-loose",
  lg: "px-7 py-2 text-xl",
};

export default function Button({
  theme: _theme,
  size: _size,
  className,
  children,
  onClick,
  href,
  target,
}) {
  const classes = clsx("inline-block font-bold", _theme, _size, className);
  if (!onClick && !href) {
    return <div className={classes}>{children}</div>;
  }

  if (href) {
    return (
      <a className={classes} href={href} target={target}>
        {children}
      </a>
    );
  }

  if (onClick) {
    return (
      <button className={classes} type="button" onClick={onClick}>
        {children}
      </button>
    );
  }
}

Button.defaultProps = {
  onClick: null,
  href: null,
  target: null,
  className: null,
  size: size.md,
};

Button.propTypes = {
  theme: PropTypes.oneOf(Object.values(theme)).isRequired,
  size: PropTypes.oneOf(Object.values(size)),
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onClick: PropTypes.func,
  href: PropTypes.string,
  target: PropTypes.string,
};

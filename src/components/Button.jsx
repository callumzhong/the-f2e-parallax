import clsx from "clsx";
import PropTypes from "prop-types";

export const variants = {
  fill: "rounded-full",
  outline: "rounded-full border-2",
};

export const colors = {
  "primary-fill": "bg-primary text-white rounded-full",
  "secondary-fill": "bg-secondary-dark rounded-full text-white",
  "secondary-outline":
    "border-secondary-dark rounded-full border-2 text-secondary-dark",
  "highlight-fill": "bg-highlight text-white rounded-full",
};

export default function Button({
  color,
  variant,
  className,
  children,
  onClick,
  href,
  target,
}) {
  const classes = clsx(
    className,
    variants[variant],
    colors[`${color}-${variant}`]
  );

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
  variant: "fill",
};

Button.propTypes = {
  variant: PropTypes.oneOf(Object.keys(variants)),
  color: PropTypes.oneOf(Object.keys(colors).map((item) => item.split("-")[0]))
    .isRequired,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onClick: PropTypes.func,
  href: PropTypes.string,
  target: PropTypes.string,
};

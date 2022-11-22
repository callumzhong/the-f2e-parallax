import clsx from "clsx";
import PropTypes from "prop-types";

export const variants = {
  fill: "rounded-full inline-block font-bold",
  outline: "rounded-full border-2 inline-block font-bold",
};

export const colors = {
  "primary-fill": "bg-primary text-white rounded-full",
  "secondary-fill": "bg-secondary-dark rounded-full text-white",
  "secondary-outline":
    "border-secondary-dark rounded-full border-2 text-secondary-dark",
};

export const sizes = {
  md: "px-6 py-1 text-lg leading-loose",
  lg: "px-7 py-2 text-xl",
};

export default function Button({
  color,
  variant,
  size,
  className,
  children,
  onClick,
  href,
  target,
}) {
  const classes = clsx(
    variants[variant],
    colors[`${color}-${variant}`],
    sizes[size],
    className
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
  size: "md",
  variant: "fill",
};

Button.propTypes = {
  variant: PropTypes.oneOf(Object.keys(variants)),
  color: PropTypes.oneOf(Object.keys(colors).map((item) => item.split("-")[0]))
    .isRequired,
  size: PropTypes.oneOf(Object.keys(sizes)),
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onClick: PropTypes.func,
  href: PropTypes.string,
  target: PropTypes.string,
};

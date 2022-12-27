import clsx from "clsx";
import PropTypes from "prop-types";

export default function ImageFrame({ href, target, className, children }) {
  const classes = clsx(
    "block bg-btn_sponsor bg-cover p-[1.625rem] hover:bg-btn_sponsor_hover",
    className
  );

  if (href) {
    return (
      <a href={href} target={target} className={classes}>
        {children}
      </a>
    );
  }

  return <div className={classes}>{children}</div>;
}

ImageFrame.defaultProps = {
  className: null,
  target: "_blank",
  href: null,
};

ImageFrame.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
};

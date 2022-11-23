import clsx from "clsx";
import PropTypes from "prop-types";

export default function ImageFrame({
  href,
  target,
  className,
  children,
}) {
  const _classes = clsx(
    "bg-btn_sponsor bg-cover p-5 pr-6 hover:bg-btn_sponsor_hover",
    className,
  );

  if (href) {
    <a href={href} target={target} className={_classes}>
      {children}
    </a>;
  }

  return <div className={_classes}>{children}</div>;
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
  children: PropTypes.elementType.isRequired,
};

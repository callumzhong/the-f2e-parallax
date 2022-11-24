import PropTypes from "prop-types";

export default function MenuItem({
  target,
  href,
  imageSrc,
  imageSrcHover,
  children,
}) {
  return (
    <a
      href={href}
      target={target}
      className="group block text-lg font-medium text-secondary"
    >
      <img
        className="mx-auto w-[60px] group-hover:hidden"
        src={imageSrc}
        alt=""
      />
      <img
        className="mx-auto hidden w-[60px] group-hover:block"
        src={imageSrcHover}
        alt=""
      />
      {children}
    </a>
  );
}
MenuItem.defaultProps = {
  target: "_blank",
};

MenuItem.propTypes = {
  target: PropTypes.string,
  href: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageSrcHover: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

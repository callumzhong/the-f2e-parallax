import PropTypes from "prop-types";
import clsx from "clsx";
import ImageTalkingLeft from "@/assets/bg/bg_talking_l.png";
import ImageTalkingCenter from "@/assets/bg/bg_talking_c.png";
import ImageTalkingRight from "@/assets/bg/bg_talking_r.png";

export default function TitleSection({ children, className }) {
  return (
    <div
      className={clsx(
        "relative flex items-center justify-center text-2xl font-bold text-primary lg:w-max xl:mx-auto xl:text-[min(5.86vh,3.75rem)]",
        className
      )}
    >
      <img
        className="absolute top-0 h-full w-full"
        src={ImageTalkingCenter}
        alt=""
      />
      <img
        className="absolute top-0 left-0 hidden h-full -translate-x-full lg:block"
        src={ImageTalkingLeft}
        alt=""
      />
      <img
        className="absolute top-0 right-0 hidden h-full translate-x-full  lg:block"
        src={ImageTalkingRight}
        alt=""
      />
      <h2 className="relative -top-[10%]">{children}</h2>
    </div>
  );
}

TitleSection.defaultProps = {
  className: null,
};

TitleSection.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

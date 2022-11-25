import PropTypes from "prop-types";
import ImageTalkingLeft from "@/assets/bg/bg_talking_l.png";
import ImageTalkingCenter from "@/assets/bg/bg_talking_c.png";
import ImageTalkingRight from "@/assets/bg/bg_talking_r.png";

export default function Title({ children }) {
  return (
    <div className="relative mt-6 mb-10 h-[72px] text-center text-2xl font-bold leading-normal text-primary lg:mx-auto lg:h-[151px] lg:w-max lg:text-6xl">
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
      <p className="relative top-[60%] -translate-y-full">{children}</p>
    </div>
  );
}

Title.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

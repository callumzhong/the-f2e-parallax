import PropTypes from "prop-types";
import ImageDecorate05 from "@/assets/bg/bg_decorate_05.png";
import ImageDecorate01 from "@/assets/bg/bg_decorate_01.png";

export default function Clouds({ children }) {
  return (
    <>
      <div className="absolute bottom-[4.3125rem] -z-10 w-screen overflow-hidden md:bottom-[2.5625rem] xl:inset-x-0 xl:bottom-auto xl:mx-auto xl:-mt-[3.0625rem]">
        <img
          className="relative -left-[1.375rem] w-[7.0625rem] max-w-none md:w-[16.9931rem] xl:left-[8.5625rem] xl:w-[26.875rem] 2xl:left-[7.39%]"
          src={ImageDecorate01}
          alt=""
        />
      </div>
      <div className="absolute bottom-[4.75rem] -z-10  w-screen  overflow-hidden md:bottom-[3.615rem] xl:inset-x-0 xl:bottom-auto xl:mx-auto xl:-mt-[1.0625rem]">
        <img
          className="relative -right-[2.1875rem] ml-auto w-[7.9375rem] max-w-none md:w-[19.0931rem] xl:w-[30.3125rem] 2xl:right-[4.73%]"
          src={ImageDecorate05}
          alt=""
        />
      </div>
      {children}
    </>
  );
}

Clouds.defaultProps = {
  children: null,
};

Clouds.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

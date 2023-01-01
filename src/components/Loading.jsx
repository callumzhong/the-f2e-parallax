import clsx from "clsx";
import PropTypes from "prop-types";
import ImageLoading2X from "@/assets/loading_2x.gif";
import ImageLoading from "@/assets/loading.gif";

export default function Loading({ percentage }) {
  return (
    <div className="fixed inset-0 m-auto h-max w-max">
      <picture>
        <source srcSet={ImageLoading2X} media="(min-width: 1280px)" />
        <img src={ImageLoading} alt="" />
      </picture>
      <div className="absolute -inset-x-[3.75rem] h-[0.625rem] overflow-hidden rounded-full border-2 border-primary bg-secondary xl:-inset-x-[8.625rem] xl:h-4">
        <div
          className={clsx("h-[0.375rem] bg-primary duration-500 xl:h-3")}
          style={{
            width: percentage,
          }}
        />
      </div>
    </div>
  );
}

Loading.propTypes = {
  percentage: PropTypes.string.isRequired,
};

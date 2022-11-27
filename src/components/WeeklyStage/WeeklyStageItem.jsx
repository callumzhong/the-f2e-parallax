import PropTypes from "prop-types";
import clsx from "clsx";
import Button from "../Button";
import { H2, H3 } from "../Typography";

export default function WeeklyStageItem({
  image,
  weekly,
  title,
  subTitle,
  master,
  url,
  isReverse,
}) {
  return (
    <li
      className={clsx(
        "flex flex-col text-center lg:max-w-[70.35%] lg:flex-row lg:items-start  lg:gap-10",
        isReverse && "lg:flex-row-reverse",
        isReverse && "lg:ml-auto"
      )}
    >
      <img
        className="mx-auto mb-2 w-[200px] lg:w-[280px]"
        src={image.path}
        alt=""
      />
      <div
        className={clsx({
          "lg:text-start": !isReverse,
          "lg:text-end": isReverse,
        })}
      >
        <H2 className="mb-2 text-highlight">{weekly}</H2>
        <H3 className="mb-5 whitespace-nowrap text-primary">{title}</H3>
        <div
          className={clsx(
            "mx-auto flex flex-col gap-4 lg:flex-row lg:flex-wrap",
            isReverse && "justify-end"
          )}
        >
          <Button color="secondary" variant="outline">
            {subTitle}
          </Button>
          <Button color="secondary" variant="outline">
            {master}
          </Button>
          <Button className="font-medium" color="secondary" href={url}>
            查看關卡細節
          </Button>
        </div>
      </div>
    </li>
  );
}

WeeklyStageItem.propTypes = {
  image: PropTypes.objectOf(PropTypes.string).isRequired,
  weekly: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  master: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  isReverse: PropTypes.bool.isRequired,
};

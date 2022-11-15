import PropTypes from "prop-types";
import H2 from "@/components/UI/H2";
import H3 from "@/components/UI/H3";
import Button, { theme as buttonTheme } from "../UI/Button";

export default function WeeklyStageItem({
  image,
  weekly,
  title,
  subTitle,
  master,
  url,
}) {
  return (
    <li className="text-center">
      <img className="mb-2" src={image.path} alt="" />
      <H2 className="mb-4 text-highlight">{weekly}</H2>
      <H3 className="mb-4 text-primary">{title}</H3>
      <div className="mx-auto flex w-max flex-col gap-4">
        <Button theme={buttonTheme["secondary-outline"]}>{subTitle}</Button>
        <Button theme={buttonTheme["secondary-outline"]}>{master}</Button>
        <Button theme={buttonTheme.secondary} href={url}>
          查看關卡細節
        </Button>
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
};

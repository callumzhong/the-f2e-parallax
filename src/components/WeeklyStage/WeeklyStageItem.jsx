import PropTypes from "prop-types";
import Button from "../Button";
import { H2, H3 } from "../Typography";

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
      <img className="mx-auto mb-2 w-[200px]" src={image.path} alt="" />
      <H2 className="mb-2 text-highlight">{weekly}</H2>
      <H3 className="mb-5 whitespace-nowrap text-primary">{title}</H3>
      <div className="mx-auto flex w-max flex-col gap-4">
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

import clsx from "clsx";
import PropTypes from "prop-types";
import Button from "../Button";
import JoinButton from "../JoinButton";
import ImageDateStart from "@/assets/main/date_start.png";
import ImageDateUpload from "@/assets/main/date_upload.png";

export default function ScheduleList({ className }) {
  return (
    <ul
      className={clsx(
        "relative z-10 flex flex-col bg-secondary xl:flex-row xl:justify-center xl:gap-[12%]",
        className
      )}
    >
      <li className="py-5 xl:mt-3 xl:h-max xl:w-[min(16.9169rem)]">
        <JoinButton className="mb-[0.9375rem] h-[8.4375rem]" isStay />
        <h3 className="mb-3 text-center text-mobile-h2 text-highlight">
          SIGN UP
        </h3>
        <Button
          variant="fill"
          color="primary"
          className="mx-auto mb-3 w-max py-2 px-7 text-mobile-h4"
        >
          10/13 - 11/6
        </Button>
        <p className="text-center text-mobile-h5 text-secondary-dark">
          截止前可修改報名組別
        </p>
      </li>
      <li className=" py-5 xl:w-[min(16.9169rem)]">
        <img
          className="mx-auto mt-[2.5625rem]  mb-3 h-[6.7962rem]"
          src={ImageDateStart}
          alt=""
        />
        <h3 className="mb-3 text-center text-mobile-h2 text-highlight">
          START
        </h3>
        <Button
          variant="fill"
          color="primary"
          className="mx-auto mb-3 w-max py-2 px-7 text-mobile-h4"
        >
          10/31 - 11/28
        </Button>
        <p className="text-center text-mobile-h5 text-secondary-dark">
          10/31(一) UI、團體組開賽
          <br />
          11/7(一) 前端組開賽
        </p>
      </li>
      <li className=" py-5 xl:w-[min(16.9169rem)]">
        <img
          className="mx-auto mt-[2.5625rem] mb-3  h-[6.7962rem]"
          src={ImageDateUpload}
          alt=""
        />
        <h3 className="mb-3 text-center text-mobile-h2 text-highlight">
          UPLOAD
        </h3>
        <Button
          variant="fill"
          color="primary"
          className="mx-auto mb-3 w-max py-2 px-7 text-mobile-h4"
        >
          10/31 - 11/28
        </Button>
        <p className="text-center text-mobile-h5 text-secondary-dark">
          依賽程登陸作品
          <br />
          <span className="font-medium text-highlight">
            額外競賽： 主題豐厚獎金等著你
          </span>
        </p>
      </li>
    </ul>
  );
}

ScheduleList.defaultProps = {
  className: null,
};
ScheduleList.propTypes = {
  className: PropTypes.string,
};

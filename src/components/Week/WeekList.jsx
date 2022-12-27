import ImageWeek1 from "@/assets/main/week_1.png";
import ImageWeek2 from "@/assets/main/week_2.png";
import ImageWeek3 from "@/assets/main/week_3.png";
import Button from "../Button";

export default function WeekList() {
  return (
    <ul className="flex flex-col items-center gap-11 text-center">
      <li className="flex w-full flex-col gap-2 xl:w-max xl:flex-row xl:items-start xl:gap-10 xl:self-start">
        <img
          className="mx-auto w-[12.5rem] xl:w-[17.5rem]"
          src={ImageWeek1}
          alt=""
        />
        <div className="xl:text-start">
          <h4 className="text-mobile-h2 text-highlight md:text-desktop-h2">
            WEEK 1
          </h4>
          <h3 className="text-mobile-h3 leading-[3.125rem] text-primary md:text-desktop-h3 md:leading-[4.4375rem]">
            The F2E 活動網站設計
          </h3>
          <div className="flex flex-col items-center gap-3 pt-2 pb-5 xl:flex-row xl:items-start">
            <Button
              className="px-6 text-mobile-highlight leading-[1.8125rem] md:text-desktop-h5 md:leading-[2.375rem]"
              variant="outline"
              color="secondary"
            >
              Parallax Scrolling
            </Button>
            <Button
              className="px-6 text-mobile-highlight leading-[1.8125rem] md:text-desktop-h5 md:leading-[2.375rem]"
              variant="outline"
              color="secondary"
            >
              #版塊設計
            </Button>
          </div>
          <Button
            className="inline-block px-6 text-lg leading-[2.3125rem]"
            variant="fill"
            color="secondary"
          >
            查看關卡細節
          </Button>
        </div>
      </li>
      <li className="flex w-full flex-col gap-2 xl:w-max xl:flex-row-reverse xl:items-start xl:gap-10 xl:self-end">
        <img
          className="mx-auto mb-2 w-[12.5rem] xl:w-[17.5rem]"
          src={ImageWeek2}
          alt=""
        />
        <div className="xl:text-right">
          <h4 className="text-mobile-h2 text-highlight md:text-desktop-h2">
            WEEK 2
          </h4>
          <h3 className="text-mobile-h3 leading-[3.125rem] text-primary md:text-desktop-h3 md:leading-[4.4375rem]">
            今晚，我想來點點簽
          </h3>
          <div className="flex flex-col items-center gap-3 pt-2 pb-5 xl:flex-row xl:items-start xl:justify-end">
            <Button
              className="px-6 text-mobile-highlight leading-[1.8125rem] md:text-desktop-h5 md:leading-[2.375rem]"
              variant="outline"
              color="secondary"
            >
              Canvas
            </Button>
            <Button
              className="px-6 text-mobile-highlight leading-[1.8125rem] md:text-desktop-h5 md:leading-[2.375rem]"
              variant="outline"
              color="secondary"
            >
              #凱鈿行動科技
            </Button>
          </div>
          <Button
            className="inline-block px-6 text-lg leading-[2.3125rem]"
            variant="fill"
            color="secondary"
          >
            查看關卡細節
          </Button>
        </div>
      </li>
      <li className="flex w-full flex-col gap-2 xl:w-max xl:flex-row xl:items-start xl:gap-10 xl:self-start">
        <img
          className="mx-auto mb-2 w-[12.5rem] xl:w-[17.5rem]"
          src={ImageWeek3}
          alt=""
        />
        <div className="xl:text-start">
          <h4 className="text-mobile-h2 text-highlight md:text-desktop-h2">
            WEEK 3
          </h4>
          <h3 className="text-mobile-h3 leading-[3.125rem] text-primary md:text-desktop-h3 md:leading-[4.4375rem]">
            Scrum 新手村
          </h3>
          <div className="flex flex-col items-center gap-3 pt-2 pb-5 xl:flex-row xl:items-start">
            <Button
              className="px-6 text-mobile-highlight leading-[1.8125rem] md:text-desktop-h5 md:leading-[2.375rem]"
              variant="outline"
              color="secondary"
            >
              JS draggable
            </Button>
            <Button
              className="px-6 text-mobile-highlight leading-[1.8125rem] md:text-desktop-h5 md:leading-[2.375rem]"
              variant="outline"
              color="secondary"
            >
              #鈦坦科技
            </Button>
          </div>
          <Button
            className="inline-block px-6 text-lg leading-[2.3125rem]"
            variant="fill"
            color="secondary"
          >
            查看關卡細節
          </Button>
        </div>
      </li>
    </ul>
  );
}

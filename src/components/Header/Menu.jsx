/* eslint-disable jsx-a11y/label-has-associated-control */
import ImageMenuInfo from "@/assets/ic/ic_menu_info.png";
import ImageMenuInfoHover from "@/assets/ic/ic_menu_info_h.png";
import ImageMenuJob from "@/assets/ic/ic_menu_job.png";
import ImageMenuJobHover from "@/assets/ic/ic_menu_job_h.png";
import ImageMenuList from "@/assets/ic/ic_menu_list.png";
import ImageMenuListHover from "@/assets/ic/ic_menu_list_h.png";
import ImageMenuStrategy from "@/assets/ic/ic_menu_strategy.png";
import ImageMenuStrategyHover from "@/assets/ic/ic_menu_strategy_h.png";
import MenuItem from "./MenuItem";

const items = [
  {
    name: "關卡資訊",
    href: "https://2022.thef2e.com/news",
    image: {
      default: ImageMenuInfo,
      hover: ImageMenuInfoHover,
    },
  },
  {
    name: "作品列表",
    href: "https://2022.thef2e.com/works",
    image: {
      default: ImageMenuList,
      hover: ImageMenuListHover,
    },
  },
  {
    name: "攻略資源",
    href: "https://hackmd.io/ofJD4K7iSI65V19zxC7d0w",
    image: {
      default: ImageMenuStrategy,
      hover: ImageMenuStrategyHover,
    },
  },
  {
    name: "求職專區",
    href: "https://2022.thef2e.com/jobs",
    image: {
      default: ImageMenuJob,
      hover: ImageMenuJobHover,
    },
  },
];

export default function Menu() {
  return (
    <>
      <input
        className="peer absolute -left-[9999px] opacity-0"
        type="checkbox"
        name="menu-checkbox"
        id="menu-checkbox"
      />
      <div className="absolute top-0 left-0 min-h-screen -translate-x-full bg-primary p-10 duration-300 ease-in-out peer-checked:left-0 peer-checked:translate-x-0 lg:left-4">
        <label
          htmlFor="menu-checkbox"
          className="absolute top-3 -right-10 block h-11 w-10 cursor-pointer bg-btn-burger-open bg-cover text-transparent hover:bg-btn-burger-open-hover active:bg-btn-burger-open-pressed lg:top-1/2 lg:-translate-y-full"
        >
          menu
        </label>
        <nav className="flex flex-col gap-6">
          {items.map((item) => (
            <MenuItem
              key={item.name}
              href={item.href}
              imageSrc={item.image.default}
              imageSrcHover={item.image.hover}
            >
              {item.name}
            </MenuItem>
          ))}
        </nav>
      </div>
    </>
  );
}

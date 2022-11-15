import ImageWeek1 from "@/assets/main/week_1.png";
import ImageWeek2 from "@/assets/main/week_2.png";
import ImageWeek3 from "@/assets/main/week_3.png";
import Title from "@/components/UI/Title";
import H5 from "../UI/H5";
import WeeklyStageList from "./WeeklyStageList";

const items = [
  {
    id: "week-1",
    image: { path: ImageWeek1 },
    master: "#版塊設計",
    subTitle: "Parallax Scrolling",
    title: "The F2E 活動網站設計",
    url: "https://2022.thef2e.com/news/week1",
    weekly: "WEEK1",
  },
  {
    id: "week-2",
    image: { path: ImageWeek2 },
    master: "#凱鈿行動科技",
    subTitle: "Canvas",
    title: "今晚，我想來點點簽",
    url: "https://2022.thef2e.com/news/week2",
    weekly: "WEEK2",
  },
  {
    id: "week-3",
    image: { path: ImageWeek3 },
    master: "#鈦坦科技",
    subTitle: "JS draggable",
    title: "Scrum 新手村",
    url: "https://2022.thef2e.com/news/week3",
    weekly: "WEEK3",
  },
];

export default function WeeklyStage() {
  return (
    <section className="relative w-full pt-[59px] pb-[200px]">
      <Title>年度最強合作，三大主題來襲</Title>
      <div className="px-5">
        <H5 className="-mt-10 mb-10 text-center text-secondary-dark">
          各路廠商強強聯手 共同設計出接地氣的網頁互動挑戰關卡
        </H5>
        <WeeklyStageList items={items} />
      </div>
    </section>
  );
}

import ImageDateStart from "@/assets/main/date_start.png";
import ImageDateUpload from "@/assets/main/date_upload.png";
import Title from "@/components/UI/Title";
import H2 from "../UI/H2";
import JoinButton from "../UI/JoinButton";
import ScheduleList from "./ScheduleList";

const items = [
  {
    id: "schedule-1",
    title: "SIGN UP",
    timeline: "10/13 - 11/6",
    image: {
      type: "ELEMENT",
      element: <JoinButton isStay />,
    },
    description: (
      <p className="text-xl text-secondary-dark">截止前可修改報名組別</p>
    ),
  },
  {
    id: "schedule-2",
    title: "START",
    timeline: "10/31 - 11/28",
    image: {
      type: "PATH",
      path: ImageDateStart,
    },
    description: (
      <p className="text-xl text-secondary-dark">
        10/31(一) UI、團體組開賽 11/7(一) 前端組開賽
      </p>
    ),
  },
  {
    id: "schedule-3",
    title: "UPLOAD",
    timeline: "10/31 - 11/28",
    image: {
      type: "PATH",
      path: ImageDateUpload,
    },
    description: (
      <>
        <p className="text-xl text-secondary-dark">依賽程登錄作品</p>
        <p className="text-lg text-highlight">額外競賽： 主題豐厚獎金等著你</p>
      </>
    ),
  },
];

export default function Schedule() {
  return (
    <section className="relative w-full pt-[59px]">
      <Title>重要時程</Title>
      <ScheduleList items={items} />
      <H2 className="pt-[228px] pb-[252px] text-center text-highlight">
        區區修煉
        <br />
        已經無法滿足了嗎？
      </H2>
    </section>
  );
}

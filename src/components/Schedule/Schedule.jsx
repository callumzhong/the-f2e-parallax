import ImageDateStart from "@/assets/main/date_start.png";
import ImageDateUpload from "@/assets/main/date_upload.png";
import Title from "@/components/Title/Title";
import JoinButton from "../JoinButton";
import { H2, H5 } from "../Typography";
import ScheduleList from "./ScheduleList";
import ImageDateWeekLine from "@/assets/main/date_weekLine.png";

const items = [
  {
    id: "schedule-1",
    className: "lg:-mt-10",
    title: "SIGN UP",
    timeline: "10/13 - 11/6",
    image: {
      type: "ELEMENT",
      element: <JoinButton isStay />,
    },
    description: (
      <H5 as="p" className="text-secondary-dark">
        截止前可修改報名組別
      </H5>
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
      <H5 as="p" className="text-secondary-dark">
        10/31(一) UI、團體組開賽 <br /> 11/7(一) 前端組開賽
      </H5>
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
        <H5 as="p" className="text-secondary-dark">
          依賽程登錄作品
        </H5>
        <p className="text-highlight">額外競賽： 主題豐厚獎金等著你</p>
      </>
    ),
  },
];

export default function Schedule() {
  return (
    <section className="relative w-full pt-[59px]">
      <Title className="lg:hidden">重要時程</Title>
      <ScheduleList items={items} />
      <H2 className="pt-[228px] pb-[252px] text-center text-highlight md:text-[28px] lg:pt-[40.52vh] lg:text-[60px]">
        區區修煉
        <br />
        已經無法滿足了嗎？
      </H2>
    </section>
  );
}

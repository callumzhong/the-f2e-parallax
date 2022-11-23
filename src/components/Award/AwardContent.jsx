import ImageAward from "@/assets/main/award.png";
import { H4 } from "../Typography";

export default function AwardContent() {
  return (
    <div className="flex flex-wrap gap-6 px-5">
      <div className="w-full">
        <img src={ImageAward} alt="award" />
      </div>
      <div className="w-full">
        <H4 className="text-highlight">評審機制</H4>
        <ul className="my-6 text-primary">
          <li> 初選： 將由六角學院前端、UI 評審進行第一波篩選。</li>
          <li>
            決選： 由六角學院與贊助廠商討論，進行最後篩選，並於 12/30(五)
            由評審進行直播公布名單！
          </li>
        </ul>
        <H4 className="mb-6 text-highlight">獎項</H4>
        <ul className="text-primary">
          <li>初選佳作 共六十位 數位獎狀</li>
          <li>個人企業獎 共六位 NTD 3,000 /位</li>
          <li>團體企業獎 共三組 NTD 10,000 /組</li>
          <li>以上皆提供完賽數位獎狀</li>
        </ul>
      </div>
    </div>
  );
}

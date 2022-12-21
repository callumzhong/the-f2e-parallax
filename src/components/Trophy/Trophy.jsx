import TitleSection from "../TitleSection";
import ImageAwardTrophy from "@/assets/main/award_trophy.png";
import ImageAwardLight from "@/assets/main/award_light.png";

export default function Trophy() {
  return (
    <section className="xl:h-screen xl:pt-[min(3.91vh,2.5rem)]">
      <TitleSection className="mx-auto mb-10 h-[4.5rem] w-full xl:mb-[min(3.91vh,2.5rem)] xl:h-[min(14.75vh,9.4375rem)]">
        還有比賽等著你！
      </TitleSection>
      <div className="mx-auto px-5 pb-[3.75rem] md:w-[62.24vw] xl:w-[min(81.94vw,73.75rem)] 2xl:w-[75rem]">
        <div className="flex flex-col xl:flex-row xl:gap-[3.75rem]">
          <div className="relative mx-auto mb-6 w-[min(100%,29.875rem)] py-5 md:py-0 xl:w-[23.4375rem]">
            <img className="" src={ImageAwardTrophy} alt="" />
            <img
              className="absolute top-5 left-0 -z-10 md:top-0"
              src={ImageAwardLight}
              alt=""
            />
          </div>
          <ul>
            <li className="mb-6 xl:mb-8">
              <h3 className="mb-6 text-desktop-h4 text-highlight xl:mb-3">
                評審機制
              </h3>
              <ul className=" flex flex-col gap-2 text-primary">
                <li>初選： 將由六角學院前端、UI 評審進行第一波篩選。</li>
                <li>
                  決選： 由六角學院與贊助廠商討論，進行最後篩選，並於 12/30(五)
                  由評審進行直播公布名單！
                </li>
              </ul>
            </li>
            <li>
              <h3 className="mb-6 text-desktop-h4 text-highlight xl:mb-3">
                獎項
              </h3>
              <ul className="flex list-inside list-decimal flex-col gap-2 text-primary">
                <li>初選佳作 共六十位 數位獎狀</li>
                <li>
                  個人企業獎 共六位 NTD{" "}
                  <span className="text-mobile-highlight text-highlight xl:text-desktop-highlight">
                    3,000
                  </span>{" "}
                  /位
                </li>
                <li>
                  團體企業獎 共三組 NTD{" "}
                  <span className="text-mobile-highlight text-highlight xl:text-desktop-highlight">
                    10,000
                  </span>{" "}
                  /組
                </li>
                <li>以上皆提供完賽數位獎狀</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

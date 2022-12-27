import TitleSection from "../TitleSection/TitleSection";
import CooperationList from "./CooperationList";

export default function Cooperation() {
  return (
    <section className="pb-[3.75rem] xl:min-h-screen xl:pb-0 xl:pt-[min(3.91vh,2.5rem)]">
      <TitleSection className="mb-1 h-[4.5rem] w-full text-center xl:mb-0 xl:h-[min(14.75vh,9.4375rem)]">
        本屆主題：互動式網頁設計？
      </TitleSection>
      <p className="mb-10 text-center text-mobile-h5 text-secondary-dark md:text-desktop-h5 xl:mb-[min(3.81vh,2.4375rem)] xl:font-normal 2xl:font-bold">
        以下兩個角色進行攜手合作
      </p>
      <div className="mx-auto px-5 md:w-[62.24vw] xl:w-[min(81.94vw,73.75rem)]">
        <CooperationList />
      </div>
    </section>
  );
}

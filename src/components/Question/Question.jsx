import { Flowers } from "../Decorate/index";
import TitleSection from "../TitleSection/TitleSection";
import QuestionList from "./QuestionList";

export default function Question() {
  return (
    <section className="relative pb-[3.75rem] xl:min-h-screen xl:pb-0 xl:pt-[min(3.91vh,2.5rem)]">
      <TitleSection className="mx-auto mb-10 h-[4.5rem] w-full xl:mb-[min(3.91vh,2.5rem)] xl:h-[min(14.75vh,9.4375rem)]">
        你是否也有以下困擾？
      </TitleSection>
      <div className="mx-auto px-5 md:max-w-[29.75rem] xl:max-w-none xl:pl-5 xl:pr-[0.625rem] 2xl:max-w-[90rem]">
        <QuestionList />
      </div>
      <Flowers />
    </section>
  );
}

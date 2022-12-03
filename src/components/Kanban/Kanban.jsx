import Button from "../Button";
import Banner from "./Banner";
import Decorate from "./Decorate";
import KanbanList from "./KanbanList";

export default function Kanban() {
  return (
    <section className="mx-auto min-h-screen">
      <Banner />
      <Button
        color="highlight"
        className="mx-auto mb-5 w-max px-[0.9375rem] py-1 xl:-mt-6 xl:mb-[min(6.25vh,4rem)] xl:py-2 xl:px-10"
      >
        <h1 className="text-mobile-h1 xl:text-desktop-h1">互動式網頁設計</h1>
      </Button>
      <div className="relative mx-auto">
        <KanbanList />
        <Decorate />
      </div>
    </section>
  );
}

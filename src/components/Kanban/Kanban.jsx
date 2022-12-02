import Button from "../Button";

import Banner from "./Banner";
import Decorate from "./Decorate";
import { H1 } from "../Typography";
import KanbanList from "./KanbanList";

export default function Kanban() {
  return (
    <section className="mx-auto min-h-screen">
      <Banner />
      <Button
        color="highlight"
        className="mx-auto mb-5 w-max xl:-mt-6 xl:mb-[6.25vh]"
      >
        <H1>互動式網頁設計</H1>
      </Button>
      <div className="relative mx-auto">
        <KanbanList />
        <Decorate />
      </div>
    </section>
  );
}

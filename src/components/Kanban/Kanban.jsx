import Button from "../Button";
import Title from "./Title";
import UserBadges from "../UserBadges";
import Banner from "./Banner";
import Decorate from "./Decorate";
import { H1 } from "../Typography";

export default function Kanban() {
  return (
    <section className="mx-auto">
      <Banner />
      <Button
        color="highlight"
        className="mx-auto mb-5 w-max xl:-mt-6 xl:mb-[6.25vh]"
      >
        <H1>互動式網頁設計</H1>
      </Button>
      <div className="relative mx-auto">
        <div className="mx-auto flex flex-col items-center gap-4 px-5 text-center xl:flex-row xl:justify-center xl:gap-5 2xl:max-w-[1196px]">
          <div className="w-max lg:w-4/12 xl:w-[300px] 2xl:w-[385.33px]">
            <Title>前端工程師</Title>
            <UserBadges>920</UserBadges>
          </div>
          <div className="w-max lg:w-4/12 xl:w-[300px] 2xl:w-[385.33px]">
            <Title>UI設計師</Title>
            <UserBadges>110</UserBadges>
          </div>
          <div className="w-max lg:w-4/12 xl:w-[300px] 2xl:w-[385.33px]">
            <Title>團體組</Title>
            <UserBadges>41</UserBadges>
          </div>
        </div>
        <Decorate />
      </div>
    </section>
  );
}

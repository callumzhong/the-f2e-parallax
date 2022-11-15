import Hero from "@/components/Hero/Hero";
import HeroDecorate from "@/components/Decorate";
import Question from "@/components/Question/Question";
import Cooperation from "@/components/Cooperation";
import Layout from "./Layout";
import WeeklyStage from "@/components/WeeklyStage/WeeklyStage";

export default function HomePage() {
  return (
    <Layout>
      <section className="relative h-screen w-full pt-[59px]">
        <Hero />
        <HeroDecorate />
      </section>
      <section className="relative w-full pt-[59px] pb-[200px]">
        <Question />
      </section>
      <section className="relative w-full pt-[59px] pb-[200px]">
        <Cooperation />
      </section>
      <section className="relative w-full pt-[59px] pb-[200px]">
        <WeeklyStage />
      </section>
    </Layout>
  );
}

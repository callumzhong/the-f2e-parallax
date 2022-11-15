import Hero from "@/components/Hero/Hero";
import HeroDecorate from "@/components/Decorate";
import Question from "@/components/Question/Question";
import Cooperation from "@/components/Cooperation";
import Layout from "./Layout";
import WeeklyStage from "@/components/WeeklyStage/WeeklyStage";

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <Question />
      <Cooperation />
      <WeeklyStage />
    </Layout>
  );
}

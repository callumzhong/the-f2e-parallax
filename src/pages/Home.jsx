import Award from "@/components/Award";
import Cooperation from "@/components/Cooperation";
import Hero from "@/components/Hero";
import Question from "@/components/Question";
import Schedule from "@/components/Schedule";
import WeeklyStage from "@/components/WeeklyStage";
import Layout from "./Layout";

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <Question />
      <Cooperation />
      <WeeklyStage />
      <Schedule />
      <Award />
    </Layout>
  );
}

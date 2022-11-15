import ImageLogo from "@/assets/logo/logo.png";
import HeroDecorate from "@/components/Decorate";
import Content from "./Content";

export default function Hero() {
  return (
    <section className="relative h-screen w-full pt-[59px]">
      <div className="mx-auto mt-8 mb-3 w-[253px]">
        <img src={ImageLogo} alt="THE F2E" />
      </div>
      <Content />
      <HeroDecorate />
    </section>
  );
}

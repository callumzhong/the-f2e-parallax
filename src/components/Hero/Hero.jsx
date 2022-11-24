import ImageLogo from "@/assets/logo/logo.png";
import HeroDecorate from "@/components/Decorate";
import { H1 } from "../Typography";

export default function Hero() {
  return (
    <section className="relative h-screen pt-[59px] lg:pt-0">
      <div className="mx-auto mt-8 mb-3 w-[253px] lg:hidden">
        <img src={ImageLogo} alt="THE F2E" />
      </div>
      <div className="mx-auto text-center lg:mt-[calc(23vh+44px)] lg:max-w-[1175px]">
        <H1 className="mb-5 inline-block rounded-[100px] bg-highlight px-10  py-[3.5px] text-white">
          互動式網頁設計
        </H1>
      </div>
      <HeroDecorate />
    </section>
  );
}

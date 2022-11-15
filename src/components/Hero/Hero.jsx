import ImageLogo from "@/assets/logo/logo.png";
import Content from "./Content";

export default function Hero() {
  return (
    <>
      <div className="mx-auto mt-8 mb-3 w-[253px]">
        <img src={ImageLogo} alt="THE F2E" />
      </div>
      <Content />
    </>
  );
}

import Button from "../Button";
import ImageLogoBlockstudio from "@/assets/main/logo_blockstudio.png";
import ImageLogoTitansoft from "@/assets/main/logo_titansoft.png";
import ImagelogoKdanmobile from "@/assets/main/logo_kdanmobile.png";
import ImageFrame from "../ImageFrame";

export default function SponsorList() {
  return (
    <ul className="flex flex-col items-center gap-10 xl:flex-row xl:justify-between">
      <li>
        <ImageFrame className="mb-3" href="https://blockstudio.tw/">
          <img className="h-[12.5rem]" src={ImageLogoBlockstudio} alt="" />
        </ImageFrame>
        <Button
          className="mx-auto w-max px-6 py-1 text-mobile-highlight"
          variant="outline"
          color="secondary"
        >
          #版塊設計
        </Button>
      </li>
      <li>
        <ImageFrame className="mb-3" href="https://titansoft.com/tw">
          <img className="h-[12.5rem]" src={ImageLogoTitansoft} alt="" />
        </ImageFrame>
        <Button
          className="mx-auto w-max px-6 py-1 text-mobile-highlight"
          variant="outline"
          color="secondary"
        >
          #鈦坦科技
        </Button>
      </li>
      <li>
        <ImageFrame className="mb-3" href="https://www.kdanmobile.com/zh-tw">
          <img className="h-[12.5rem]" src={ImagelogoKdanmobile} alt="" />
        </ImageFrame>
        <Button
          className="mx-auto w-max px-6 py-1 text-mobile-highlight"
          variant="outline"
          color="secondary"
        >
          #凱鈿科技
        </Button>
      </li>
    </ul>
  );
}

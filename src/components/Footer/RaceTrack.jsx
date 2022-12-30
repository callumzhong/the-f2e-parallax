import ImageRoad from "@/assets/main/road.png";
import { Tree, Flowers } from "../Decorate";

export default function RaceTrack() {
  return (
    <div className="footer-section__race absolute inset-x-0 bottom-0 mx-auto h-max w-max origin-bottom">
      <img
        className="mx-auto w-[21.8125rem] xl:h-[min(13.23vh,8.4688rem)] xl:w-auto 2xl:h-auto 2xl:w-[73.4375rem]"
        src={ImageRoad}
        alt=""
      />
      <Flowers />
      <Tree />
    </div>
  );
}

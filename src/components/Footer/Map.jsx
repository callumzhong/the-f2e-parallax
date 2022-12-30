import ImageMap from "@/assets/main/map.svg";
import ImageMapFinish from "@/assets/main/map_finish.svg";
import ImageMapNow from "@/assets/main/map_now.gif";

export default function Map() {
  return (
    <div className="hidden xl:absolute xl:left-8 xl:bottom-0 xl:block">
      <img className="map" src={ImageMap} alt="" />
      <img
        className="map-finish absolute inset-0 -z-10"
        src={ImageMapFinish}
        alt=""
      />
      <img
        className="map-now absolute top-[52px] left-[2px] scale-110"
        src={ImageMapNow}
        alt=""
      />
    </div>
  );
}

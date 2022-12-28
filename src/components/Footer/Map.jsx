import ImageMap from "@/assets/main/map.svg";
import ImageMapNow from "@/assets/main/map_now.gif";

export const mapAnimation = {
  hero: (tl) => {
    tl.to("map-now", {
      left: 16,
      top: 20,
      duration: 10,
    }).to(".footer-section__map-now", {
      left: 44,
      top: 2,
      duration: 20,
    });
  },
};

export default function Map() {
  return (
    <div className="hidden xl:absolute xl:left-8 xl:bottom-0 xl:block">
      <img src={ImageMap} alt="" />
      <img
        className="map-now absolute top-[52px] left-[2px] scale-110"
        src={ImageMapNow}
        alt=""
        // style={{
        //   left: 44,
        //   top: 2,
        // }}
      />
    </div>
  );
}

import ImageMap from "@/assets/main/map.svg";
import ImageMapNow from "@/assets/main/map_now.gif";

export function mapAnimationHandler(tl) {
  // 第二站
  tl.to(".footer-section__map-now", {
    left: 16,
    top: 20,
    duration: 10,
  }).to(".footer-section__map-now", {
    left: 44,
    top: 2,
    duration: 20,
  });
}

export default function Map() {
  return (
    <div className="absolute left-8 bottom-0 hidden lg:block">
      <img src={ImageMap} alt="" />
      <img
        className="footer-section__map-now absolute top-[52px] left-[2px] scale-110"
        src={ImageMapNow}
        alt=""
      />
    </div>
  );
}

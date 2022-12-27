import Join from "./Join";
import Map from "./Map";
import RaceTrack from "./RaceTrack";

export default function Footer() {
  return (
    <footer className="footer-section sticky bottom-0 z-10">
      <Map />
      <RaceTrack />
      <Join />
    </footer>
  );
}

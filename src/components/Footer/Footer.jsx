import Join from "./Join";
import Map from "./Map";
import RaceTrack from "./RaceTrack";

export default function Footer() {
  return (
    <footer className="footer-section fixed inset-x-0 bottom-0 z-10 flex items-end justify-center px-5">
      <RaceTrack />
      <Join />
      <Map />
    </footer>
  );
}

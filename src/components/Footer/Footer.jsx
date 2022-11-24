import ActivityGroup from "./ActivityGroup";
import RaceTrack from "./RaceTrack";

export default function Footer() {
  return (
    <footer className="sticky bottom-0 flex justify-center px-5">
      <div className="relative flex w-full justify-center pb-4 md:w-[45.44vw] lg:max-h-[52vh] lg:w-full lg:max-w-[1175px] lg:gap-6">
        <RaceTrack />
        <ActivityGroup />
      </div>
    </footer>
  );
}

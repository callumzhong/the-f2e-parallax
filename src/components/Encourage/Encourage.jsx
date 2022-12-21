import Decorate from "./Decorate";

export default function Encourage() {
  return (
    <section className="relative xl:h-screen">
      <p className="pt-[14.25rem] pb-[15.75rem] text-center text-mobile-h2 text-highlight xl:pb-0 xl:pt-[14.5rem] xl:text-desktop-h2">
        區區修煉
        <br className="xl:hidden" />
        已經無法滿足了嗎？
      </p>
      <Decorate />
    </section>
  );
}

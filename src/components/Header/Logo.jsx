import ImageLogo from "@/assets/logo/logo_text.png";

export default function Logo() {
  return (
    <img
      className="mx-auto w-[133px] lg:hidden"
      src={ImageLogo}
      alt="THE F2E"
    />
  );
}

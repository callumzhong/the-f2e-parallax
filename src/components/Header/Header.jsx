import Logo from "./Logo";
import Menu from "./Menu";
import User from "./User";

export default function Header() {
  return (
    <header className="header-section fixed inset-x-0 top-0 z-50 flex h-[59px] px-10 pt-2 lg:h-auto lg:pt-[30px]">
      <Logo />
      <User />
      <Menu />
    </header>
  );
}

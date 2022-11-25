import Logo from "./Logo";
import Menu from "./Menu";
import User from "./User";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-10 flex h-[59px] px-12 pt-2 lg:h-auto lg:pt-11">
      <Logo />
      <User />
      <Menu />
    </header>
  );
}

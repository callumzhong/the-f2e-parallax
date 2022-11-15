import Logo from "./Logo";
import Menu from "./Menu";
import User from "./User";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-10 h-[59px] bg-secondary px-12 pt-2">
      <Logo />
      <User />
      <Menu />
    </header>
  );
}

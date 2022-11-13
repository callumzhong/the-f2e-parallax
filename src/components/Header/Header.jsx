import Logo from "./Logo";
import Menu from "./Menu";
import User from "./User";

export default function Header() {
  return (
    <header className="relative px-12 pt-2">
      <Logo />
      <User />
      <Menu />
    </header>
  );
}

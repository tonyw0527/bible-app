import Link from "next/link";
import DarkModeToggleButton from "./basics/DarkModeToggleButton";

const linkStyle = {
  marginRight: 15,
};

type HeaderProps = {
  onToggleTheme: () => void;
};

const Header = ({ onToggleTheme }: HeaderProps) => (
  <div>
    <DarkModeToggleButton onToggleTheme={onToggleTheme} />
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
);

export default Header;

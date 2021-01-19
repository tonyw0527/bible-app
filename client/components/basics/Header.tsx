import Link from "next/link";
import DarkModeToggleButton from "./DarkModeToggleButton";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: start;
  padding: 0.5rem;
  width: 100%;
`;

const A = styled.a`
  margin-right: 1rem;
  font-size: 1.3rem;
  margin-top: 0.3rem;
`;

type HeaderProps = {
  onToggleTheme: () => void;
};

const Header = ({ onToggleTheme }: HeaderProps) => (
  <Container>
    <DarkModeToggleButton onToggleTheme={onToggleTheme} />
    <Link href="/">
      <A>홈</A>
    </Link>
    <Link href="/bible">
      <A>성경</A>
    </Link>
    <Link href="/pray-card">
      <A>기도카드</A>
    </Link>
  </Container>
);

export default Header;

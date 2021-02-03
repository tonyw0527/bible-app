import Link from "next/link";
import DarkModeToggleButton from "./DarkModeToggleButton";
import AuthComponent from "./AuthComponent";
import styled from "styled-components";

const Container = styled.header`
  display: flex;
  justify-content: start;
  width: 100%;
  padding: 0.8rem 1.1rem;
  background: ${({ theme }) => theme.color.header};
`;

const A = styled.a`
  margin-right: 1rem;
  font-size: 1.3rem;
  margin-top: 0.2rem;

  &: hover {
    cursor: pointer;
  }
`;

type HeaderProps = {
  onToggleTheme: () => void;
};

export default function Header({ onToggleTheme }: HeaderProps) {
  return (
    <Container>
      <Link href="/">
        <A>홈</A>
      </Link>
      <Link href="/bible">
        <A>성경</A>
      </Link>
      <Link href="/pray-card">
        <A>기도카드</A>
      </Link>
      <AuthComponent />
      <DarkModeToggleButton onToggleTheme={onToggleTheme} />
    </Container>
  );
}

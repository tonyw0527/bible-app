import Link from "next/link";
import DarkModeToggleButton from "./DarkModeToggleButton";
import { observer } from "mobx-react";
import { useStore } from "../../stores/RootStore";
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

const Input = styled.input`
  width: 4rem;
  height: 1.3rem;
  margin-top: 0.4rem;
  background: gray;
  border: 2px solid gray;
`;

type HeaderProps = {
  onToggleTheme: () => void;
};

const Header = observer(({ onToggleTheme }: HeaderProps) => {
  const store = useStore();

  return (
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
      <Input
        type="text"
        value={store.userStore.invitation_code}
        onChange={(e) => {
          store.userStore.updateInvitationCode(e.target.value);
        }}
        placeholder="초대코드"
      />
    </Container>
  );
});

export default Header;

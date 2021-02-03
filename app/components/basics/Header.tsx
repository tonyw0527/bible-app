import { useEffect, useRef } from "react";
import Link from "next/link";
import DarkModeToggleButton from "./DarkModeToggleButton";
import { observer } from "mobx-react";
import { useStore } from "../../stores/StoreProvider";
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

const Input = styled.input`
  display: none;
  width: 4rem;
  height: 1.3rem;
  margin-top: 0.4rem;
  background: gray;
  border: 2px solid gray;
`;

const Span = styled.span`
  display: none;
  margin-top: 0.44rem;
  margin-left: 1rem;
  font-size: 0.9rem;
`;

type HeaderProps = {
  onToggleTheme: () => void;
};

const Header = observer(({ onToggleTheme }: HeaderProps) => {
  const store = useStore();
  const { isAuth } = store.userStore;
  const { curr_book, curr_chapter } = store.bibleStore;
  const invicodeInputRef = useRef<HTMLInputElement>();
  const authSpanRef = useRef<HTMLSpanElement>();

  useEffect(() => {
    if (isAuth) {
      store.bibleStore.fetchOneChapter(curr_book, curr_chapter);

      invicodeInputRef.current.style.display = "none";
      authSpanRef.current.style.display = "block";
      authSpanRef.current.innerText = "환영합니다! :D";
    } else {
      invicodeInputRef.current.style.display = "block";
      authSpanRef.current.style.display = "none";
    }
    return () => {};
  }, [isAuth]);

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
      <Input
        ref={invicodeInputRef}
        type="text"
        value={store.userStore.invitation_code}
        onChange={(e) => {
          store.userStore.updateInvitationCode(e.target.value);
        }}
        onBlur={() => {
          store.userStore.requestAuth();
        }}
        placeholder="초대코드"
      />
      <Span ref={authSpanRef}></Span>
      <DarkModeToggleButton onToggleTheme={onToggleTheme} />
    </Container>
  );
});

export default Header;

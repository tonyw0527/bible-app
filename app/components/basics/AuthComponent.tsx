import { useEffect, useRef } from "react";
import { observer } from "mobx-react";
import { useStore } from "../../stores/StoreProvider";
import styled from "styled-components";

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

const AuthComponent = observer(() => {
  const store = useStore();
  const {
    isAuth,
    invitation_code,
    updateInvitationCode,
    requestAuth,
  } = store.userStore;
  const { curr_book, curr_chapter, fetchOneChapter } = store.bibleStore;
  const invicodeInputRef = useRef<HTMLInputElement>();
  const authSpanRef = useRef<HTMLSpanElement>();

  useEffect(() => {
    if (isAuth) {
      fetchOneChapter(curr_book, curr_chapter);

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
    <>
      <Input
        ref={invicodeInputRef}
        type="text"
        value={invitation_code}
        onChange={(e) => {
          updateInvitationCode(e.target.value);
        }}
        onBlur={() => {
          requestAuth();
        }}
        placeholder="초대코드"
      />
      <Span ref={authSpanRef}></Span>
    </>
  );
});

export default AuthComponent;

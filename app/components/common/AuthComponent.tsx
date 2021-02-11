import { useEffect, useRef } from "react";
import { observer } from "mobx-react";
import { useStore } from "../../stores/StoreProvider";
import { usePopUp } from "../../hooks/usePopUp";
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
  margin-left: 0.5rem;
  font-size: 0.9rem;
`;

// a component For imiation of auth & login form

const AuthComponent = observer(() => {
  const store = useStore();
  const { isAuth, invitation_code } = store.userStore;
  const { curr_book, curr_chapter } = store.bibleStore;

  const invicodeInputRef = useRef<HTMLInputElement>();
  const authSpanRef = useRef<HTMLSpanElement>();

  // alert pop-ups
  const [isPopUp, togglePopUp, renderPopUp] = usePopUp();
  const [
    isGreetingPopUp,
    toggleGreetingPopUp,
    renderGreetingPopUp,
  ] = usePopUp();

  const handleKeyPress = () => {
    store.userStore.requestAuth().then((res) => {
      togglePopUp(res);
    });
  };

  useEffect(() => {
    // try login in init time.
    store.userStore.requestAuth().then((res) => {
      toggleGreetingPopUp(res);
    });
    return () => {};
  }, []);

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
    <>
      {/* Pop Up */}
      {renderGreetingPopUp(
        "info",
        "환영합니다!",
        "초대코드를 입력해주세요.",
        "확인",
        () => {
          invicodeInputRef.current.focus();
          console.log("환영 팝업 cb");
        }
      )}
      {renderPopUp(
        "",
        "인증 오류",
        "초대코드를 다시 입력해주세요.",
        "확인",
        () => {
          invicodeInputRef.current.focus();
          console.log("오류 팝업 cb");
        }
      )}

      <Input
        ref={invicodeInputRef}
        type="text"
        value={invitation_code}
        onChange={(e) => {
          store.userStore.updateInvitationCode(e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.code === "Enter") {
            handleKeyPress();
          }
        }}
        placeholder="초대코드"
      />
      <Span ref={authSpanRef}></Span>
    </>
  );
});

export default AuthComponent;

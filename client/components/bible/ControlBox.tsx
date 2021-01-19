import { useStore } from "../../stores/RootStore";
import { useRouter } from "next/router";

import styled from "styled-components";

const StyledControlBox = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  padding: 0.3rem;

  width: 100vw;
  height: 7vh;
  background-color: ${({ theme }) => theme.color.main_back};
`;

const StyledControlButton = styled.button`
  width: 5rem;
  height: 2rem;
  margin: 0.2rem;

  border: 0;
  border-radius: 0.7rem;
  outline: 0;
  background-color: ${({ theme }) => theme.color.main_btn};

  font-size: 0.9rem;
  color: ${({ theme }) => theme.color.main_state_text};

  &: hover {
    cursor: pointer;
    background-color: #16c79a;
  }

  &: active {

  }
`;

const ControlBox = () => {
  const router = useRouter();
  const store = useStore();

  const handlePrevNextBtn = (action: string) => {
    const book = store?.bibleStore?.curr_book ?? 1;
    const chapter = store?.bibleStore?.curr_chapter ?? 1;
    const maxChapter = store?.bibleStore.curr_book_max_chapter;

    switch (action) {
      case "prev":
        if (chapter === 1) {
          alert("첫 장입니다 :)");
          return;
        }
        store?.bibleStore?.fetchOneChapter(book, chapter - 1);
        break;

      case "next":
        if (chapter === maxChapter) {
          alert("마지막 장입니다 :)");
          return;
        }
        store?.bibleStore?.fetchOneChapter(book, chapter + 1);
        break;

      default:
        break;
    }
  };

  return (
    <StyledControlBox>
      <StyledControlButton onClick={() => router.push("/")}>
        {"홈으로"}
      </StyledControlButton>
      <StyledControlButton onClick={() => router.push("/quick-search")}>
        {"빠른 검색"}
      </StyledControlButton>
      <StyledControlButton onClick={() => handlePrevNextBtn("prev")}>
        {"이전 장"}
      </StyledControlButton>
      <StyledControlButton onClick={() => handlePrevNextBtn("next")}>
        {"다음 장"}
      </StyledControlButton>
    </StyledControlBox>
  );
};

export default ControlBox;

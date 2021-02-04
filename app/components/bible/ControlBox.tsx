import { useStore } from "../../stores/StoreProvider";
import { useRouter } from "next/router";

import styled from "styled-components";

const StyledControlBox = styled.div`
  position: sticky;
  bottom: 0.5rem;
  padding: 0.7rem 1.1rem;

  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const CircleButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  margin-left: 0.3rem;

  @media (min-width: 768px) {
    width: 3rem;
    height: 3rem;
  }

  border-radius: 3rem;
  border: 0;
  outline: 0;
  background: none;
  opacity: 1;

  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  &: hover {
    cursor: pointer;
  }
`;

const HomeBtn = styled(CircleButton)`
  background-image: url("./home.svg");
`;
const SearchBtn = styled(CircleButton)`
  background-image: url("./search.svg");
`;
const LeftBtn = styled(CircleButton)`
  background-image: url("./left.svg");
`;
const RightBtn = styled(CircleButton)`
  background-image: url("./right.svg");
`;
const TopBtn = styled(CircleButton)`
  background-image: url("./chevron.svg");
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
      <HomeBtn onClick={() => router.push("/")}></HomeBtn>
      <SearchBtn onClick={() => router.push("/quick-search")}></SearchBtn>
      <LeftBtn onClick={() => handlePrevNextBtn("prev")}></LeftBtn>
      <RightBtn onClick={() => handlePrevNextBtn("next")}></RightBtn>
      <TopBtn
        id="topButton"
        type="button"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      ></TopBtn>
    </StyledControlBox>
  );
};

export default ControlBox;

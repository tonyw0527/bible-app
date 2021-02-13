import { useEffect } from "react";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import { useStore } from "../../stores/StoreProvider";
import Loading from "./Loading";
import VerseBox from "./VerseBox";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 0.8rem 0.8rem;
  padding-bottom: 0;

  word-break: keep-all;
  overflow-x: hidden;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0.8rem 4rem;
    padding-bottom: 0;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100vw;
  height: 100vh;
`;

const ContentBox = observer(() => {
  const store = useStore();
  const to = store.bibleStore.curr_verse;
  const { isFetching } = store.bibleStore;
  const { curr_chapter } = store.bibleStore;

  // 장 변경시 최상단으로 스크롤
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [curr_chapter]);

  // quick-search 페이지에서 선택된 절을 하이라이팅
  useEffect(() => {
    // 선택된 절을 가운데에 보여주기 위해 하나 이전의 절로 스크롤
    const prevTarget = document.getElementById("v" + String(to - 1));
    if (prevTarget === null) {
      return;
    }
    prevTarget.scrollIntoView({
      behavior: "auto",
      block: "start",
      inline: "nearest",
    });

    // 선택된 절 하이라이팅
    const target = document.getElementById("v" + String(to));
    if (target !== null) {
      target.style.backgroundColor = "#9ad3bc";
      setTimeout(() => {
        target.style.backgroundColor = "rgba(0,0,0,0)";
      }, 2000);
    }
  }, [to]);

  // 선택된 장의 절들을 렌더링
  const renderBible = () => {
    const verses = toJS(store.bibleStore.curr_bible);
    // 데스크톱 레이아웃을 위해 두 개의 블럭으로 나누어 렌더링

    const remainder = Math.ceil(verses.length / 2) - 1;
    const arr1 = verses.slice(0, -remainder);
    const arr2 = verses.slice(-remainder);

    // db 데이터를 fetching 중일 때 로딩 화면(lottie) 렌더링
    if (isFetching) {
      return (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      );
    }

    return (
      <Container>
        <div>
          {arr1?.map((item) => {
            return (
              <VerseBox
                id={"v" + item.verse}
                key={"v" + item.verse}
                item={item}
              />
            );
          })}
        </div>
        <div>
          {arr2?.map((item) => {
            return (
              <VerseBox
                id={"v" + item.verse}
                key={"v" + item.verse}
                item={item}
              />
            );
          })}
        </div>
      </Container>
    );
  };

  return renderBible();
});

export default ContentBox;

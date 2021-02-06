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

  word-break: keep-all;
  line-height: 1.9rem;

  overflow-x: hidden;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100vw;
  height: 100vh;
`;

const StyledContentBox = styled.div``;

const ContentBox = observer(() => {
  const store = useStore();
  const to = store.bibleStore.curr_verse;
  const { isFetching } = store.bibleStore;
  const { curr_chapter } = store.bibleStore;

  useEffect(() => {
    window.scrollTo(0, 0);

    return () => {};
  }, [curr_chapter]);

  useEffect(() => {
    const prevTarget = document.getElementById("v" + String(to - 1));
    if (prevTarget === null) {
      return;
    }
    prevTarget.scrollIntoView({
      behavior: "auto",
      block: "start",
      inline: "nearest",
    });

    const target = document.getElementById("v" + String(to));
    if (target !== null) {
      target.style.backgroundColor = "#9ad3bc";
      setTimeout(() => {
        target.style.backgroundColor = "rgba(0,0,0,0)";
      }, 2000);
    }
    return () => {};
  }, [to]);

  const renderBible = () => {
    const verses = toJS(store.bibleStore.curr_bible);
    const remainder = Math.ceil(verses.length / 2) - 1;
    const arr1 = verses.slice(0, -remainder);
    const arr2 = verses.slice(-remainder);

    if (isFetching) {
      return (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      );
    }

    return (
      <Container>
        <StyledContentBox>
          {arr1?.map((item) => {
            return (
              <VerseBox
                id={"v" + item.verse}
                key={"v" + item.verse}
                item={item}
              />
            );
          })}
        </StyledContentBox>
        <StyledContentBox>
          {arr2?.map((item) => {
            return (
              <VerseBox
                id={"v" + item.verse}
                key={"v" + item.verse}
                item={item}
              />
            );
          })}
        </StyledContentBox>
      </Container>
    );
  };

  return renderBible();
});

export default ContentBox;

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useStore } from "../../stores/StoreProvider";
import { observer } from "mobx-react";
import bibleIndex from "../../utils/bibleIndex";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow-x: hidden;
`;

const TitleBox = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
`;

const TitleSpan = styled.span`
  display: block;
  margin: 1rem;
  font-size: 1.3rem;
  font-weight: 700;
`;

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  text-align: center;
`;

const CategoryBox = styled.div`
  overflow-x: hidden;
  width: 32vw;
`;

const Ul = styled.ul`
  list-style-type: none;
  height: 78vh;
`;

const Li = styled.li`
  padding: 0.3rem;

  font-size: 1.2rem;
  font-weight: 500;

  &: hover {
    cursor: pointer;
    background-color: #16c79a;
  }
`;

type SearchState = {
  book: number | undefined;
  chapter: number | undefined;
};

const Quick = observer(() => {
  const router = useRouter();
  const store = useStore();

  const [searchState, setSearchState] = useState<SearchState>({
    book: store.bibleStore.curr_book,
    chapter: store.bibleStore.curr_chapter,
  });

  // 페이지 진입시 이전에 선택된 책, 장, 절을 하이라이팅 해줌
  useEffect(() => {
    const prev_book = searchState.book;
    const prev_chapter = searchState.chapter;

    if (!prev_book && !prev_chapter) {
      return;
    }

    const curr_book = document.getElementById("book" + prev_book);
    const curr_chapter = document.getElementById("chapter" + prev_chapter);

    curr_book.scrollIntoView();
    //document.getElementById("bookCtn").scrollTop -= 250;
    curr_book.style.backgroundColor = "yellowGreen";

    curr_chapter.scrollIntoView();
    //document.getElementById("chapterCtn").scrollTop -= 250;
    curr_chapter.style.backgroundColor = "yellowGreen";

    window.scrollTo(0, 0);

    return () => {};
  }, []);

  useEffect(() => {
    console.log("serch state - ", searchState);
  }, [searchState]);

  const renderCategory1 = () => {
    const books = [];
    for (let i = 1; i <= 66; i++) {
      const item = bibleIndex[i][0];
      books.push(
        <Li
          id={"book" + i}
          key={"book" + i}
          onClick={(e) => {
            const { book, chapter } = searchState;

            if (book) {
              const id = "book" + book;
              const prevChoice = document.getElementById(id);
              prevChoice!.style.background = "none";
            }

            const choice = document.getElementById((e.target as Element).id);
            choice!.style.background = "yellowGreen";

            const chapter_id = "chapter" + chapter;
            const prevChapter = document.getElementById(chapter_id);

            if (prevChapter) {
              console.log(prevChapter);
              prevChapter.style.background = "none";
            }
            setSearchState({ book: i, chapter: undefined });
          }}
        >
          {item}
        </Li>
      );
    }
    return books;
  };

  const renderCategory2 = () => {
    const chapters = [];
    const bookIndex = searchState.book;
    if (bookIndex) {
      const chapterIndex = bibleIndex[bookIndex][1] ?? 0;
      for (let i = 1; i <= chapterIndex; i++) {
        chapters.push(
          <Li
            id={"chapter" + i}
            key={"chapter" + i}
            onClick={(e) => {
              store?.bibleStore.fetchOneChapter(bookIndex, i);

              if (searchState.chapter) {
                const id = "chapter" + searchState.chapter;
                const prevChoice = document.getElementById(id);
                prevChoice!.style.background = "none";
              }

              const choice = document.getElementById((e.target as Element).id);
              choice!.style.background = "yellowGreen";

              setSearchState({
                book: bookIndex,
                chapter: i,
              });
            }}
          >
            {i} 장
          </Li>
        );
      }
      return chapters;
    } else {
      return <div></div>;
    }
  };

  const renderCategory3 = () => {
    const { book, chapter } = searchState;
    if (book === undefined || chapter === undefined) {
      return <div></div>;
    }

    const verses = [];
    const verse = store?.bibleStore.lengthOfBible;
    for (let i = 1; i <= verse!; i++) {
      verses.push(
        <Li
          id={"v" + i}
          key={i}
          onClick={(e) => {
            const choice = document.getElementById((e.target as Element).id);
            choice!.style.background = "yellowGreen";
            store.bibleStore.updateCurrVerse(i);
            router.push("/bible");
          }}
        >
          {i} 절
        </Li>
      );
    }
    return verses;
  };

  return (
    <Container>
      <TitleBox>
        <TitleSpan>빠른 검색</TitleSpan>
      </TitleBox>
      <CategoryWrapper>
        <CategoryBox id="bookCtn">
          <Ul>{renderCategory1()}</Ul>
        </CategoryBox>
        <CategoryBox id="chapterCtn">
          <Ul>{renderCategory2()}</Ul>
        </CategoryBox>
        <CategoryBox>
          <Ul>{renderCategory3()}</Ul>
        </CategoryBox>
      </CategoryWrapper>
    </Container>
  );
});

export default Quick;

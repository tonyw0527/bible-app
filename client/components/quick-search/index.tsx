import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useStore } from "../../stores/StoreProvider";
import { observer } from "mobx-react";
import bibleIndex from "../../utils/bibleIndex";
import Cookies from "js-cookie";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow-x: hidden;
`;

const TitleBox = styled.div``;

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
  height: 88vh;
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
    book: Number(Cookies.get("book")),
    chapter: Number(Cookies.get("chapter")),
  });

  // init - selecting curr_book, curr_chapter
  useEffect(() => {
    const prev_book = searchState.book;
    const prev_chapter = searchState.chapter;

    if (prev_book && prev_chapter) {
      console.log("state from cookies", prev_book, prev_chapter);
      setSearchState({ book: prev_book, chapter: prev_chapter });
    }

    const curr_book = document.getElementById(
      "book" + store.bibleStore.curr_book
    );
    const curr_chapter = document.getElementById(
      "chapter" + store.bibleStore.curr_chapter
    );

    curr_book.scrollIntoView();
    document.getElementById("bookCtn").scrollTop -= 250;
    curr_book.style.backgroundColor = "#9ad3bc";
    setTimeout(() => {
      curr_book.style.backgroundColor = "rgba(0,0,0,0)";
    }, 2000);

    if (curr_chapter === null) {
      return;
    }
    curr_chapter.scrollIntoView();
    document.getElementById("chapterCtn").scrollTop -= 250;
    curr_chapter.style.backgroundColor = "#9ad3bc";
    setTimeout(() => {
      curr_chapter.style.backgroundColor = "rgba(0,0,0,0)";
    }, 2000);
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
            if (searchState.book) {
              const id = "book" + searchState.book;
              const prevChoice = document.getElementById(id);
              prevChoice!.style.background = "none";
            }
            const choice = document.getElementById((e.target as Element).id);
            choice!.style.background = "yellowGreen";
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
              Cookies.set("book", String(bookIndex), { expires: 365 });
              Cookies.set("chapter", String(i), { expires: 365 });
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
            Cookies.set("verse", String(i), { expires: 365 });
            store?.bibleStore.updateCurrVerse(i);

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

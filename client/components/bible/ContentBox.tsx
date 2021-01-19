import { useEffect } from "react";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import { useStore } from "../../stores/RootStore";
import VerseBox from "./VerseBox";

import styled from "styled-components";

const StyledContentBox = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap");

  position: fiexd;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 80vh;
  padding: 1rem 0.5rem;
  overflow-y: auto;

  font-family: "Nanum Gothic", sans-serif;
  word-break: keep-all;
  line-height: 2rem;
`;

const ContentBox = observer(() => {
  const store = useStore();
  const to = store?.bibleStore.curr_verse;

  useEffect(() => {
    document.getElementById("v" + String(to! - 1))?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    const target = document.getElementById("v" + String(to));
    if (target) {
      target.style.backgroundColor = "#9ad3bc";
      setTimeout(() => {
        target.style.backgroundColor = "rgba(0,0,0,0)";
        console.log("lll");
      }, 3000);
    }

    console.log("to 변경", to);
    return () => {};
  }, [to]);

  const renderBible = () => {
    const verses = toJS(store?.bibleStore?.curr_bible);

    return verses?.map((item) => {
      return (
        <VerseBox id={"v" + item.verse} key={"v" + item.verse} item={item} />
      );
    });
  };

  return <StyledContentBox>{renderBible()}</StyledContentBox>;
});

export default ContentBox;

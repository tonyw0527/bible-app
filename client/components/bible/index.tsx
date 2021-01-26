import StateBox from "./StateBox";
import ContentBox from "./ContentBox";
import ControlBox from "./ControlBox";
import styled from "styled-components";

const Container = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ScrollToTopButton = styled.button`
  width: 3rem;
  height: 3rem;
  border-radius: 3rem;
  border: 0;
  outline: 0;
  opacity: 0.3;
  background: none;
  background-image: url("./chevron.svg");

  position: absolute;
  bottom: 8vh;
  right: 0.5rem;

  transition: opacity 2s ease;

  &: hover {
    cursor: pointer;
  }
`;

const Main = () => {
  return (
    <Container>
      <StateBox />
      <ContentBox />
      <ControlBox />
      <ScrollToTopButton
        id="topButton"
        type="button"
        onClick={() => {
          const contentCtn = document.getElementById("contentCtn");
          contentCtn.scrollTo(0, 0);
          window.scrollTo(0, 0);
        }}
      ></ScrollToTopButton>
    </Container>
  );
};

export default Main;

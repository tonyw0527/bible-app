import StateBox from "./StateBox";
import ContentBox from "./ContentBox";
import ControlBox from "./ControlBox";
import styled from "styled-components";

const Container = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flext-start;
  align-items: center;
`;

const Main = () => {
  return (
    <Container>
      <StateBox />
      <ContentBox />
      <ControlBox />
    </Container>
  );
};

export default Main;

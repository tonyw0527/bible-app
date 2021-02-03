import Copyright from "./Copyright";
import styled from "styled-components";

const Container = styled.footer`
  flex-shrink: 0;
  width: 90%;
  padding: 0.5rem;
  border-top: 1px solid gray;
`;

const WordBox = styled.div`
  margin-bottom: 0.3rem;
  text-align: center;
  font-size: 0.8rem;
`;

function Footer() {
  return (
    <Container>
      <WordBox>{"God is love."}</WordBox>
      <Copyright />
    </Container>
  );
}

export default Footer;

import styled from "styled-components";

const Container = styled.div`
  flex-shrink: 0;

  padding: 0.5rem;
  text-align: center;
  font-size: 0.6rem;
`;

const WordBox = styled.div`
  font-size: 1rem;
`;

const A = styled.a`
  &: link {
    color: ${({ theme }) => theme.color.text};
  }

  &: visited {
    color: ${({ theme }) => theme.color.text};
  }
`;

export default function Copyright() {
  return (
    <Container>
      <WordBox>{"God is love."}</WordBox>
      <div>
        {"Copyright © "}
        <A href="https://tonyw.tistory.com/">Tony West</A>{" "}
        {new Date().getFullYear()}
        {"."}
      </div>
    </Container>
  );
}

import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  font-size: 0.6rem;
`;
const WordBox = styled.div`
  margin-bottom: 0.3rem;
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
      <WordBox>{"성경버전 - 개역한글판(대한성서공회)"}</WordBox>
      {"Made By "}
      <A href="https://tonyw.tistory.com/">Tony West</A>{" "}
      {new Date().getFullYear()}
      {"."}
    </Container>
  );
}

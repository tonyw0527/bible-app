import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  font-size: 0.6rem;
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
      {"Made By "}
      <A href="https://tonyw.tistory.com/">Tony West</A>{" "}
      {new Date().getFullYear()}
      {"."}
    </Container>
  );
}

import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

const TitleBox = styled.div`
  margin-bottom: 3rem;
  padding: 5px;
`;

const TitleSpan = styled.span`
  display: block;
  font-size: 3rem;
`;

const DescBox = styled.div`
  display: flex;
  margin-bottom: 3rem;
`;
const DescSpan = styled.span`
  font-size: 2rem;
`;

const LinkBox = styled.div`
  margin: 1rem;
`;
const A = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 10rem;
  height: 10rem;
  border: 2px solid ${({ theme }) => theme.color.text};
  border-radius: 10px;

  &: hover {
    cursor: pointer;
  }
`;

const SignBox = styled.div``;
const SignButton = styled.button``;

export default function Home() {
  return (
    <Container>
      <TitleBox>
        <TitleSpan>온라인 성경</TitleSpan>
      </TitleBox>

      <DescBox>
        {/* <DescBtn onClick={() => router.push("/bible")}>성경 읽기</DescBtn>
        <DescBtn onClick={() => router.push("/pray-maker")}>
          기도카드 만들기
        </DescBtn> */}
        <LinkBox>
          <Link href="/bible">
            <A>성경 읽기</A>
          </Link>
        </LinkBox>
        <LinkBox>
          <Link href="/pray-card">
            <A>기도 카드</A>
          </Link>
        </LinkBox>
      </DescBox>

      <DescSpan>함께 읽어요!</DescSpan>

      {/* <SignBox>
        <SignButton onClick={() => router.push("/sign-in")}>로그인</SignButton>
        <SignButton onClick={() => router.push("/sign-up")}>
          회원가입
        </SignButton>
      </SignBox> */}
    </Container>
  );
}

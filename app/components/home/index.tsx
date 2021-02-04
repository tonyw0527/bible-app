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

const A = styled.a`
  transition: transform 0.5s ease-out;

  &: hover {
    cursor: pointer;
    transform: translateY(-1rem);
  }
`;

const LinkBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0.5em;
  background: none;

  width: 10rem;
  height: 10rem;

  font-size: 1.3rem;

  background: ${({ theme }) => theme.color.header};
  border-radius: 10px;

  @media (min-width: 768px) {
    margin: 1rem;
  }
`;
type Iprops = {
  source: string;
};
const I = styled.i<Iprops>`
  width: 3rem;
  height: 3rem;
  margin-top: 1rem;
  background-position: center;
  background-image: url(${(props) => props.source});
  background-size: contain;
  background-repeat: no-repeat;
  color: transparent;
`;
const Span = styled.span`
  display: none;
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
        <Link href="/bible">
          <A>
            <LinkBox>
              성경 읽기
              <I source="./open-bible.svg">
                <Span>bible icon</Span>
              </I>
            </LinkBox>
          </A>
        </Link>

        <Link href="/pray-card">
          <A>
            <LinkBox>
              기도 카드
              <I source="./pray-card.svg">
                <Span>pray card icon</Span>
              </I>
            </LinkBox>
          </A>
        </Link>
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

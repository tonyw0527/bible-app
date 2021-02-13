import { useEffect } from "react";
import { usePopUp } from "../../hooks/usePopUp";
import Cookies from "js-cookie";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 95vh;
  margin-bottom: 0.5rem;

  background-image: url(${({ theme }) => theme.home_img});
  background-size: cover;
`;

const TitleBox = styled.div`
  margin-bottom: 3rem;
  padding: 5px;
`;

const TitleSpan = styled.span`
  display: block;
  font-size: 1.6rem;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const DescBox = styled.div`
  display: flex;
  margin-bottom: 3rem;
`;
const DescSpan = styled.span`
  font-size: 1.2rem;

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
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

  margin: 0.5rem;
  background: none;

  width: 10rem;
  height: 10rem;

  font-size: 1.2rem;

  
Blur value
4.0

Transparency
0.15

Color

Show outline
CSS

background: rgba( 255, 255, 255, 0.15 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4.0px );
-webkit-backdrop-filter: blur( 4.0px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );

  @media (min-width: 768px) {
    margin: 1rem;
    font-size: 1.4rem;
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

export default function Home() {
  // pop up
  const [isPopUp, togglePopUp, renderPopUp] = usePopUp();
  const handleStamp = () => {
    Cookies.set("stamp", "1");
  };

  useEffect(() => {
    if (Cookies.get("stamp") !== "1") {
      console.log("there is no stamp");
      togglePopUp(false);
    }
    return () => {};
  }, []);

  return (
    <>
      {renderPopUp(
        "info",
        "환영합니다!",
        "God bless you!",
        "확인",
        handleStamp
      )}
      <Container>
        <TitleBox>
          <TitleSpan>온라인 성경</TitleSpan>
        </TitleBox>

        <DescBox>
          <Link href="/bible">
            <A>
              <LinkBox>
                성경 읽기
                <I source="./icons/home/open-bible.svg">
                  <Span>bible icon</Span>
                </I>
              </LinkBox>
            </A>
          </Link>

          <Link href="/pray-card">
            <A>
              <LinkBox>
                기도 카드
                <I source="./icons/home/pray-card.svg">
                  <Span>pray card icon</Span>
                </I>
              </LinkBox>
            </A>
          </Link>
        </DescBox>

        <DescSpan>함께 읽어요!</DescSpan>
      </Container>
    </>
  );
}

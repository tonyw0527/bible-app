import { useCardStore } from "./index";

import styled from "styled-components";

const Container = styled.div`
  color: #52575d;
  font-family: "NanumBarunGothic";
  font-size: 16px;
`;

const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 350px;

  margin: 0;
  padding: 1rem 1.5rem 0 1.5rem;

  // background: #184d47;
  background: url("/paper.jpg");
`;

const CardSubTitle = styled.span`
  display: block;
  margin-bottom: 0.3rem;
  width: 100%;

  font-family: "NanumBarunGothic";
  font-weight: 700;
  font-size: 1.1rem;
  text-align: start;

  color: #41444b;
`;
const CardImgBox = styled.div`
  margin-bottom: 1rem;
`;
const CardTitleSpan = styled.span`
  display: block;
  padding: 0.5rem;

  border-bottom: 1px solid #fddb3a;

  font-family: "yg-jalnan";
  text-align: center;
  font-weight: 700;
  font-size: 2.1rem;

  color: #41444b;
`;
const CardImg = styled.img`
  width: 300px;
  height: 230px;
  margin-top: 0.5rem;
  border-radius: 1rem;

  object-fit: cover;
`;

const CardBasicBox = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;
  padding: 0 0.6rem;
  word-break: keep-all;
  line-height: 1.5rem;
`;

const CardHowtoBox = styled(CardBasicBox)``;

const CardHowtoOl = styled.ol`
  list-style: none;
`;
const Li = styled.li`
  display: flex;
  margin-bottom: 0.5rem;
`;
const HowtoSpan = styled.span`
  font-weight: 700;
  font-size: 1.1rem;
  margin-right: 0.5rem;
`;
const BottomBox = styled.div`
  width: 350px;
  padding: 0.5rem;
  background: #fddb3a;
`;

const BibleBox = styled.div`
  text-align: center;
  color: #d89216;
  font-size: 0.7rem;

  background: none;

  word-break: keep-all;
  line-height: 1.1rem;
`;

type CardContentProps = {
  name: string;
  list: Array<string>;
};

function CardContent({ name, list }: CardContentProps) {
  const renderList = () => {
    return list.map((item, index) => {
      return (
        <Li>
          <HowtoSpan>{index + 1} </HowtoSpan> <span>{item}</span>
        </Li>
      );
    });
  };

  return (
    <>
      <CardSubTitle>{name}</CardSubTitle>
      <CardHowtoBox>
        <CardHowtoOl>{renderList()}</CardHowtoOl>
      </CardHowtoBox>
    </>
  );
}

function Card() {
  const [state, dispatch] = useCardStore();

  const renderContents = () => {
    return state.contents.map((content, index) => {
      return <CardContent name={content.name} list={content.list} />;
    });
  };

  return (
    <Container>
      <CardBox id="capture">
        <CardTitleSpan>{state.title}</CardTitleSpan>
        <CardImgBox>
          <CardImg id="card_img" src={state.img} alt={state.title} />
        </CardImgBox>

        {renderContents()}

        <BottomBox>
          <BibleBox>
            {/* {
              "너는 하나님께 소망을 두라 그가 나타나 도우심으로 말미암아 내 하나님을 여전히 찬송하리로다"
            }{" "}
            <Span>{"시편 43:5"}</Span> */}
            {state.word}
          </BibleBox>
        </BottomBox>
      </CardBox>
    </Container>
  );
}

export default Card;

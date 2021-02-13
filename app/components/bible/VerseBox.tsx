import styled from "styled-components";

const Container = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  display: flex;

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: nowrap;
    margin-left: 1rem;
    margin-right: 1rem;
    width: 40vw;
  }
`;
const VerseSpan = styled.span`
  min-width: 1.5rem;
  margin-right: 1rem;
  padding-top: 0.2rem;
  color: ${({ theme }) => theme.color.verse_num};
  font-size: 1.4rem;
  font-weight: 700;
  text-align: end;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;
const ContentSpan = styled.span`
  font-size: 1.3rem;
  line-height: 1.5;

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`;

type VerseData = {
  book: number;
  chapter: number;
  verse: number;
  content: string;
  _id: string;
};

type VerseBoxProps = {
  item: VerseData;
  id: string;
  key: string;
};

const VerseBox = ({ item, id }: VerseBoxProps) => {
  return (
    <Container id={id}>
      <VerseSpan>{item.verse}</VerseSpan>
      <ContentSpan>{" " + item.content}</ContentSpan>
    </Container>
  );
};

export default VerseBox;

import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 0.5rem;
  display: flex;

  @media (min-width: 768px) {
    width: 45vw;
    margin-left: 1rem;
    margin-right: 1rem;
    display: flex;
    flex-wrap: nowrap;
  }
`;
const VerseSpan = styled.span`
  min-width: 1.5rem;
  margin-right: 0.8rem;
  color: ${({ theme }) => theme.color.verse_num};
  font-size: 1.4rem;
  font-weight: 700;
  text-align: end;
`;
const ContentSpan = styled.span`
  font-size: 1.3rem;
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

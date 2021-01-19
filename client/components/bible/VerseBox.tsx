import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 0.5rem;
`;
const VerseSpan = styled.span`
  color: ${({ theme }) => theme.color.verse_num};
  font-size: 1.6rem;
  font-weight: 700;
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
      <ContentSpan>{' ' + item.content}</ContentSpan>
    </Container>
  );
};

export default VerseBox;

import { useStore } from "../../stores/StoreProvider";
import { observer } from "mobx-react";
import { useRouter } from "next/router";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 7vh;
  background: ${({ theme }) => theme.color.main_back};
  text-align: center;

  @media (min-width: 768px) {
    height: 8vh;
  }
`;

const StateSpan = styled.span`
  display: block;
  font-weight: 700;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color.main_state_text};

  &: hover {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

const StateBox = observer(() => {
  const store = useStore();
  const router = useRouter();

  const handleStateSpanClick = () => {
    router.push("/quick-search");
  };

  return (
    <Container>
      <StateSpan
        onClick={handleStateSpanClick}
      >{`${store?.bibleStore.curr_book_name} ${store?.bibleStore.curr_chapter}장`}</StateSpan>
    </Container>
  );
});

export default StateBox;

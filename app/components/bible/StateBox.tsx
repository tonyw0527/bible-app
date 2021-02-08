import { useStore } from "../../stores/StoreProvider";
import { observer } from "mobx-react";

import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 7vh;
  background: ${({ theme }) => theme.color.main_back};
  text-align: center;
`;

const StateSpan = styled.span`
  display: block;
  margin-top: 0.65rem;
  font-weight: 700;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color.main_state_text};
`;

const StateBox = observer(() => {
  const store = useStore();

  return (
    <Container>
      <StateSpan>{`${store?.bibleStore.curr_book_name} ${store?.bibleStore.curr_chapter}장`}</StateSpan>
    </Container>
  );
});

export default StateBox;

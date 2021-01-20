import { useStore } from "../../stores/RootStore";
import { observer } from "mobx-react";

import styled from "styled-components";

const StyledStateBox = styled.div`
  width: 100%;
  height: 10vh;
  background-color: ${({ theme }) => theme.color.main_back};

  text-align: center;
`;

const StyledStateSpan = styled.span`
  display: block;
  margin-top: 1.2rem;

  font-weight: 700;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color.main_state_text};
`;

const StateBox = observer(() => {
  const store = useStore();

  return (
    <StyledStateBox>
      <StyledStateSpan>{`${store?.bibleStore.curr_book_name} ${store?.bibleStore.curr_chapter}장`}</StyledStateSpan>
    </StyledStateBox>
  );
});

export default StateBox;

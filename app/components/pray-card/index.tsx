import { useReducer, createContext, useContext } from "react";
import Card from "./Card";
import Maker from "./Maker";

import styled from "styled-components";

const Container = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  overflow-x: hidden;
  padding: 1rem;
`;

type Content = {
  name: string;
  list: Array<string>;
};

type State = {
  title: string;
  img: string;
  contents: Array<Content>;
  word: string;
};

type Action =
  | { type: "SET_TITLE"; title: string }
  | { type: "SET_IMG"; img: string }
  | { type: "ADD_CONTENT"; content: Content }
  | { type: "UPDATE_CONTENT"; index: number; content: Content }
  | { type: "SET_WORD"; word: string };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_TITLE":
      return { ...state, title: action.title };
    case "SET_IMG":
      return { ...state, img: action.img };
    case "ADD_CONTENT":
      return { ...state, contents: state.contents.concat(action.content) };
    case "UPDATE_CONTENT":
      return {
        ...state,
        contents: state.contents.map((item, index) => {
          if (index === action.index) {
            return action.content;
          }
          return item;
        }),
      };
    case "SET_WORD":
      return { ...state, word: action.word };
    default:
      throw new Error("Unhandled action");
  }
}

const initialState = {
  title: "Tony's Pray Card",
  img: "./icons/pray-card/man.png",
  contents: [{ name: "Tony", list: ["For your happiness"] }],
  word: "God is love",
};

const CardContext = createContext<[State, React.Dispatch<any>]>([
  initialState,
  () => null,
]);
export const useCardStore = () => useContext(CardContext);

function PrayMaker() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Container>
      <CardContext.Provider value={[state, dispatch]}>
        <Maker />
        <Card />
      </CardContext.Provider>
    </Container>
  );
}

export default PrayMaker;

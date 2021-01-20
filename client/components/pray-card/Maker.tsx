import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useCardStore } from "./index";
import html2canvas from "html2canvas";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 1rem;
  width: 300px;
`;

const H1 = styled.h1`
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 0.5rem;
  padding: 0.3rem;
  font-size: 1rem;
`;

const ListBox = styled.div`
  margin-bottom: 0.5rem;
`;

const Ol = styled.ol`
  list-style: none;
`;
const Li = styled.li`
  margin-bottom: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem;
  background: none;
  border: 0;
  outline: 0;

  color: ${({ theme }) => theme.color.text};

  &: hover {
    cursor: pointer;
  }
`;

const CancelButton = styled.button`
  background: none;
  border: 0;
  color: red;
  opacity: 0.8;
`;

type ListItemProps = {
  item: string;
  index: number;
  onSetContent: Dispatch<SetStateAction<Content>>;
};

function ListItem({ item, index, onSetContent }: ListItemProps) {
  return (
    <Li>
      <span>
        {index + 1} {item}{" "}
      </span>
      <CancelButton
        type="button"
        onClick={() => {
          onSetContent((content) => {
            return {
              ...content,
              list: content.list.filter((item, idx) => idx !== index),
              currText: "",
            };
          });
        }}
      >
        X
      </CancelButton>
    </Li>
  );
}

type Content = {
  name: string;
  currText: string;
  list: Array<string>;
};

type ContentsBoxProps = {
  index: number;
};

function ContentsBox({ index }: ContentsBoxProps) {
  const [state, dispatch] = useCardStore();

  const [content, setContent] = useState<Content>({
    name: "",
    currText: "",
    list: [],
  });

  useEffect(() => {
    dispatch({ type: "ADD_CONTENT", content: content });
    return () => {};
  }, []);

  useEffect(() => {
    dispatch({ type: "UPDATE_CONTENT", index: index, content: content });
    return () => {};
  }, [content]);

  const renderList = () => {
    return content.list.map((item, index) => {
      return <ListItem item={item} index={index} onSetContent={setContent} />;
    });
  };

  return (
    <>
      <Input
        type="text"
        placeholder="이름"
        value={content.name}
        onChange={(e) => {
          setContent((content) => ({ ...content, name: e.target.value }));
        }}
      />
      <Input
        type="text"
        placeholder="기도 제목(Enter키를 눌러 추가 입력)"
        value={content.currText}
        onChange={(e) => {
          setContent((content) => ({ ...content, currText: e.target.value }));
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            if (content.currText !== "") {
              setContent((content) => {
                return {
                  ...content,
                  list: content.list.concat([content.currText]),
                  currText: "",
                };
              });
            }
          }
        }}
      />
      <ListBox>
        <Ol>{renderList()}</Ol>
      </ListBox>
    </>
  );
}

function Maker() {
  const [state, dispatch] = useCardStore();

  const [contentsBoxArr, setContentsBoxArr] = useState<Array<React.ReactNode>>(
    []
  );

  const addContentsBox = () => {
    setContentsBoxArr((prevState) => {
      return [...prevState, <ContentsBox index={contentsBoxArr.length} />];
    });
  };

  const renderContentsBox = () => {
    if (contentsBoxArr.length > 0) {
      return contentsBoxArr;
    } else {
      return <div></div>;
    }
  };

  return (
    <Wrapper>
      <H1>기도 카드 만들기</H1>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Input
          type="text"
          placeholder="제목"
          value={state.title}
          onChange={(e) => {
            dispatch({ type: "SET_TITLE", title: e.target.value });
          }}
        />
        <Input
          type="file"
          accept="image/*"
          placeholder="이미지"
          onChange={(e) => {
            dispatch({ type: "SET_IMG", img: e.target.value });
            if (e.target.files && e.target.files[0]) {
              const reader = new FileReader();
              reader.onload = (e) => {
                const img = document.getElementById("card_img");
                if (e.target) {
                  img?.setAttribute("src", e.target.result!.toString());
                }
              };
              reader.readAsDataURL(e.target.files[0]);
            }
          }}
        />

        <Input
          type="text"
          placeholder="말씀"
          value={state.word}
          onChange={(e) => {
            dispatch({ type: "SET_WORD", word: e.target.value });
          }}
        />

        <Button type="button" onClick={addContentsBox}>
          사람 추가
        </Button>
        {renderContentsBox()}

        <Button
          type="button"
          onClick={() => {
            window.scrollTo(0, 0);
            html2canvas(
              document.querySelector("#capture") ??
                document.createElement("div")
            ).then((canvas) => {
              const anchor = document.getElementById(
                "target"
              ) as HTMLAnchorElement;
              anchor.href = canvas.toDataURL("image/jpeg");
              anchor.download = `${state.title}.jpg`;
              anchor.click();
            });
          }}
        >
          기도카드 저장
        </Button>
        <a href="#" id="target" style={{ display: "none" }}></a>
      </Form>
    </Wrapper>
  );
}

export default Maker;

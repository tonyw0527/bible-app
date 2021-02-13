import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useCardStore } from "./index";
import html2canvas from "html2canvas";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 1rem 0 1rem;
  width: 300px;

  @media (max-width: 768px) {
    margin: 1rem;
  }
`;

const H1 = styled.h1`
  margin: 0;
  margin-bottom: 0.8rem;
  text-align: center;
`;

const Span = styled.span`
  display: block;

  text-align: center;
  font-size: 1rem;
  font-weight: 700;
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
  border: 1px solid #264445;

  &[type="file"] {
    border: none;
    margin-bottom: 0;
  }
`;

const ImgBox = styled.div`
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  border: 1px solid #264445;
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
  margin-bottom: 1.7rem;
  padding: 0.5rem;
  background: none;
  border: 1px solid #264445;
  outline: 0;

  color: ${({ theme }) => theme.color.text};

  &: hover {
    cursor: pointer;
    background: #bbbbbb;
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

// ListItem 컴포넌트 - ContentsBox 컴포넌트 안에 동적으로 추가 되는 컴포넌트
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

// ContentsBox 컴포넌트 - 사람 추가 버튼을 클릭할 때 Maker 컴포넌트 안에 동적으로 추가되는 컴포넌트
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

// Maker 컴포넌트
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
          maxLength={18}
          value={state.title}
          onChange={(e) => {
            dispatch({ type: "SET_TITLE", title: e.target.value });
          }}
        />

        <ImgBox>
          <Span>{"이미지"}</Span>
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
        </ImgBox>
        <Button type="button" onClick={addContentsBox}>
          사람 추가
        </Button>

        {renderContentsBox()}

        <Input
          type="text"
          placeholder="말씀"
          value={state.word}
          onChange={(e) => {
            dispatch({ type: "SET_WORD", word: e.target.value });
          }}
        />

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

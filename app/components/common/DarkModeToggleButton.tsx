import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 1rem;
  padding-top: 0.55rem;

  &: hover {
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  display: flex;
  border-radius: 50px;
  margin: 0.2rem;
  background-color: ${({ theme }) => theme.color.body};
`;

const Button = styled.button`
  width: 28px;
  height: 28px;
  border: 0;
  border-radius: 20px;
  outline: 0;
  background: url(${({ theme }) => theme.mode_img});
  transition: transform 0.1s;
  // transform: ${({ theme }) => {
    return theme.mode === "light" ? "translateX(0px)" : "translateX(28px)";
  }};

  &: hover {
    cursor: pointer;
  }
`;

type DarkModeToggleButtonProps = {
  onToggleTheme: () => void;
};

export default function DarkModeToggleButton({
  onToggleTheme,
}: DarkModeToggleButtonProps) {
  const handleToggleTheme = () => {
    onToggleTheme();
  };

  return (
    <Container>
      <Wrapper onClick={handleToggleTheme}>
        <Button></Button>
      </Wrapper>
    </Container>
  );
}

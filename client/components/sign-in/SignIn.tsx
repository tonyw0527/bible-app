import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

const Input = styled.input`
  display: block;
`;

const Button = styled.button``;

export default function SignIn() {
  return (
    <Container>
      <div>
        <span>로그인</span>
      </div>
      <form>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Invitation_code" />
        <label>
          <input type="checkbox" />
          <span>로그인 유지</span>
        </label>
        <div>
          <Button onClick={(e) => alert(e)}>SIGN IN</Button>
        </div>
      </form>
      <div>
        <a>비밀번호 찾기</a>
        <a>회원가입 하기</a>
      </div>
    </Container>
  );
}

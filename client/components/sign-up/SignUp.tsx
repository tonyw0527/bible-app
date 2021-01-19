import styled from 'styled-components';

const Container = styled.div``;

const FormBox = styled.div``;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;
const Input = styled.input``;
const CheckInput = styled.input``;
const Button = styled.button``;

export default function SignUp() {
  return (
    <Container>
      <FormBox>
        <Form>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <div>
            <CheckInput type="checkbox" />
            {'이메일을 통해 소식 받기'}
          </div>
          <Button type="submit">SIGN UP</Button>
        </Form>
      </FormBox>
    </Container>
  );
}

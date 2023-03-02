import styled from "styled-components";

const Container = styled.div`
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;

  border: 1px solid;
  border-radius: 5px;
`;

const FormArea = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;

  padding: 60px;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;

  &:first-child {
    margin-bottom: 16px;
  }
`;

const Label = styled.span`
  width: 40px;
  margin-right: 20px;
`;

const InputArea = styled.input`
  height: 30px;
  flex-grow: 1;
`;

const BottomArea = styled.div`
  display: flex;
  justify-content: center;

  padding: 0 60px 60px;
`;

interface LoginFormViewProps {
  onChangeValue: (value: string) => void;
  onSubmit: () => void;
}

const LoginFormView = ({ onChangeValue, onSubmit }: LoginFormViewProps) => {
  return (
    <Container>
      <FormArea>
        <FormGroup>
          <Label>ID</Label>
          <InputArea
            onChange={({ target: { value } }) => onChangeValue(value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>PW</Label>
          <InputArea type="password" />
        </FormGroup>
      </FormArea>
      <BottomArea>
        <button onClick={onSubmit}>Submit</button>
      </BottomArea>
    </Container>
  );
};

export default LoginFormView;

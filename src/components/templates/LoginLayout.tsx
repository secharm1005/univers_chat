import styled from "styled-components";
import Wireframe from "../atoms/Wireframe";

const Container = styled.div`
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginLayout = ({ children }: { children: JSX.Element | string }) => {
  return (
    <Container>
      <Wireframe>{children}</Wireframe>
    </Container>
  );
};

export default LoginLayout;

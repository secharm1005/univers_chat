import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  /* z-index: 999; */
`;

const BackdropView = ({ children }: { children: JSX.Element }) => {
  return <Container>{children}</Container>;
};

export default BackdropView;

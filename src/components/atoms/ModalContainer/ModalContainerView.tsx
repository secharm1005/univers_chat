import { CSSProperties } from "react";
import styled from "styled-components";

const Container = styled.div<ModalContainerViewProps>`
  height: ${({ height }) => height || "300px"};
  width: ${({ width }) => width || "400px"};
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  background-color: ${({ backgroundColor }) => backgroundColor || "#fff"};
  border-radius: ${({ borderRadius }) => borderRadius || "3px"};
  box-shadow: ${({ boxShadow }) =>
    boxShadow
      ? "rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 3px 6px, rgba(15, 15, 15, 0.2) 0px 9px 24px"
      : "unset"};
`;

export interface ModalContainerViewProps {
  children: JSX.Element;

  height?: string;
  width?: string;
  backgroundColor?: string;
  borderRadius?: string;
  boxShadow?: boolean;

  style?: CSSProperties;
}

const ModalContainerView = ({
  children,
  style,
  boxShadow = true,
  ...props
}: ModalContainerViewProps) => {
  return (
    <Container boxShadow={boxShadow} style={style} {...props}>
      {children}
    </Container>
  );
};

export default ModalContainerView;

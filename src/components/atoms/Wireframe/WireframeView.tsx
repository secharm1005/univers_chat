import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 2px solid #ccc;
  background: linear-gradient(
      to top right,
      transparent calc(50% - 1px),
      #ccc calc(50% - 1px),
      #ccc calc(50% + 1px),
      transparent calc(50% + 1px)
    ),
    linear-gradient(
      to bottom right,
      transparent calc(50% - 1px),
      #ccc calc(50% - 1px),
      #ccc calc(50% + 1px),
      transparent calc(50% + 1px)
    );
  color: gray;
  font-size: 1.2rem;
`;

interface WireframeViewProps {
  children: string;
}

const WireframeView = ({ children }: WireframeViewProps) => {
  return <Container>{children}</Container>;
};

export default WireframeView;

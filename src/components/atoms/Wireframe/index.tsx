import WireframeView from "./WireframeView";

const Wireframe = ({ children }: { children: string | JSX.Element }) => {
  return typeof children === "string" ? (
    <WireframeView>{children}</WireframeView>
  ) : (
    children
  );
};

export default Wireframe;

import BackdropView from "./BackdropView";

const Backdrop = ({ children }: { children: JSX.Element }) => {
  return <BackdropView>{children}</BackdropView>;
};

export default Backdrop;

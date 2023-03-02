import ModalContainerView, {
  ModalContainerViewProps,
} from "./ModalContainerView";

const ModalContainer = ({ children, ...props }: ModalContainerViewProps) => {
  return <ModalContainerView {...props}>{children}</ModalContainerView>;
};

export default ModalContainer;

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const Portal = ({
  children,
}: {
  children: JSX.Element | ((close: () => void) => JSX.Element);
}) => {
  const el = useRef(document.createElement("div"));

  const [dynamic] = useState(!el.current.parentElement);

  useEffect(() => {
    let div: HTMLDivElement;
    if (dynamic) {
      // el.current.id = id;
      document.body.appendChild(el.current);
      div = el.current;
    }

    return () => {
      if (dynamic && div.parentElement) {
        div.parentElement.removeChild(div);
      }
    };
  }, [dynamic]);

  const closeModal = () => {
    // document.body.removeChild(el.current);
    if (!el.current.parentElement) return;
    el.current.parentElement.removeChild(el.current);
  };

  return createPortal(
    typeof children === "function" ? children(closeModal) : children,
    el.current
  );
};

export default Portal;

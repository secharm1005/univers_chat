import { useCallback, useRef } from "react";
import { useRouter } from "next/router";

import LoginFormView from "./LoginFormView";

const LoginForm = () => {
  const { replace } = useRouter();

  const idRef = useRef<string>("");

  const onChangeValue = useCallback(
    (value: string) => (idRef.current = value),
    []
  );

  const onSubmit = useCallback(() => {
    if (!idRef.current) return alert("ID 없음");
    sessionStorage.setItem("id", idRef.current);
    replace("/");
  }, [replace]);

  return <LoginFormView onChangeValue={onChangeValue} onSubmit={onSubmit} />;
};

export default LoginForm;

import Head from "next/head";

import LoginLayout from "@/components/templates/LoginLayout";
import LoginForm from "@/components/molecules/LoginForm";

export default function Login() {
  return (
    <>
      <Head>
        <title>BRIQUE CNA - Login</title>
      </Head>

      <LoginLayout>
        <LoginForm />
      </LoginLayout>
    </>
  );
}

import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

import Wireframe from "@/components/atoms/Wireframe";

const Container = styled.section`
  height: inherit;
  display: flex;
  flex-grow: 1;

  overflow: hidden;
`;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>BRIQUE CNA - Home</title>
      </Head>

      <Container>
        <Wireframe>HOME</Wireframe>
      </Container>
    </>
  );
};

export default Home;

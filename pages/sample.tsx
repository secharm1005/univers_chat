import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import styled from "styled-components";

import { exampleAPI } from "@/apis";

import Wireframe from "@/components/atoms/Wireframe";

const Container = styled.section`
  height: inherit;
  display: flex;
  flex-grow: 1;

  overflow: hidden;
`;

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [exampleAPI.list.name],
    queryFn: exampleAPI.list,
  });

  return { props: { dehydratedState: dehydrate(queryClient) } };
};

const Sample: NextPage = () => {
  const { error } = useQuery({
    queryKey: [exampleAPI.list.name],
    queryFn: exampleAPI.list,
    enabled: false,
  });

  if (error) {
    const { message } = error as AxiosError;
    console.log("error: ", message);
  }

  return (
    <>
      <Head>
        <title>BRIQUE CNA - Sample</title>
      </Head>

      <Container>
        <Wireframe>Hello World 🎉</Wireframe>
      </Container>
    </>
  );
};

export default Sample;

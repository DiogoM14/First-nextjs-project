import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

const Feed: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Nova página</title>
      </Head>

      <Main>
        <Title>
          Nova página Next
        </Title>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  background: #121212;

  display: grid;
  grid-template-columns: 1fr 480px 1fr;
  grid-template-rows: 1fr 480px 1fr;
  grid-template-areas:
    '. . .'
    '. main .'
    '. . .'
  ;
`;

const Main = styled.main`
  grid-area: main;
  height: 100%;
  background: #000;
  box-shadow: #000 2px 2px 10px;
`;

const Title = styled.h1`
  font-family: Roboto;
  color: #fff;
  font-size: 40px;
`;

export default Feed;
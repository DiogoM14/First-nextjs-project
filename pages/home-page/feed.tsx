import React from 'react';
import Head from 'next/head';

import { Container, Main, Title } from './styles';

const Feed: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Feed</title>
      </Head>

      <Main>
        <Title>
          Bem vindo ao Feed
        </Title>
      </Main>
    </Container>
  );
}

export default Feed;
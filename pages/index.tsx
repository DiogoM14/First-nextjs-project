import Link from 'next/link'
import Head from 'next/head'

import styled from 'styled-components';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Title>
          Twitter NextJS
        </Title>

        <Link href="/home-page/feed">
          <Button>Ir para Feed</Button>
        </Link>

      </Main>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 480px 1fr;
  grid-template-rows: 1fr 480px 1fr;
  grid-template-areas: 
    ". . ."
    ". login ."
    ". . ."
  ;


`;

const Main = styled.main`
  grid-area: login;
  background: #7692FF;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 40px;
`;

const Button = styled.button`
  width: 250px;
  height: 50px;
  border-radius: 8px;
  border: none;
`;
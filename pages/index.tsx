import Link from 'next/link'
import Head from 'next/head'

import styled from 'styled-components';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Title>
          NextJS App
        </Title>

        <Link href="/home-page/feed">
          <Button>Trocar Página</Button>
        </Link>

      </Main>
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
  background: #121212;

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
  background: #000;
  border-radius: 8px;
  box-shadow: #000 2px 0px 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

const Title = styled.h1`
  font-family: Roboto;
  font-size: 40px;
  color: #fff;
  opacity: 85%;
  margin-bottom: 150px;
`;

const Button = styled.button`
  width: 250px;
  height: 50px;
  border-radius: 8px;
  border: none;
  background-color: #bb86fc;
  font-weight: 500;
  font-size: 20px;
  color: #000;
  cursor: pointer;
`;
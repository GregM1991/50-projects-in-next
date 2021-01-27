import Head from "next/head"
import styled from "styled-components"

const IndexContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-gap: 10px;
  width: 100%;
  height: 100%;
  padding: 10px;
  font-family: "Open Sans", sans-serif;
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 2/9;
`

const IndexTitle = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  line-height: 4.4rem;
  margin: 0 0 20px;
`

const IndexSubtitle = styled.p`
  font-size: 1.8rem;
  font-weight: 100;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Greggy-poo's 50 Projects</title>
      </Head>
      <IndexContainer>
        <HeaderContainer>
          <IndexTitle>Welcome to Greggy-poo's projecta-palooza</IndexTitle>
          <IndexSubtitle>
            Where people come from all over my immediate family and friendship
            circle to view my wild and incredible progress with HTML, CSS and
            Javascript. Rejoice!
          </IndexSubtitle>
        </HeaderContainer>
      </IndexContainer>
    </>
  )
}

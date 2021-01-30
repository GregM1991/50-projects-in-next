import React, { useState } from "react"
import Head from "next/head"
import styled from "styled-components"
import Panel from "../components/Blocks/Panel"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;

  @media (max-width: 480px) {
    width: 100vw;
  }
`

const ExpandingCards = () => {
  const [active, setIsActive] = useState("")

  return (
    <>
      <Head>
        <title>Expanding Cards</title>
      </Head>
      <Container>
        <Panel
          onClick={() => setIsActive("1")}
          active={active === "1"}
          backgroundImage="https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        />
        <Panel
          onClick={() => setIsActive("2")}
          active={active === "2"}
          backgroundImage="https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        />
        <Panel
          onClick={() => setIsActive("3")}
          active={active === "3"}
          backgroundImage="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
        />
        <Panel
          onClick={() => setIsActive("4")}
          active={active === "4"}
          backgroundImage="https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
        />
        <Panel
          onClick={() => setIsActive("5")}
          active={active === "5"}
          backgroundImage="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        />
      </Container>
    </>
  )
}
export default ExpandingCards

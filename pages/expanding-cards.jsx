import React, { useState } from "react"
import Head from "next/head"
import styled from "styled-components"

const Container = styled.div``

const Panel = styled.div`
  background-image: ${(props) => props.backgroundImage};
`

const ExpandingCards = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <Head>
        <title>Expanding Cards</title>
      </Head>
      <Container>
        <Panel backgroundImage="https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">
          <h3>Explore the World</h3>
        </Panel>
        <Panel backgroundImage="https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">
          <h3>Explore the World</h3>
        </Panel>
        <Panel backgroundImage="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80">
          <h3>Explore the World</h3>
        </Panel>
        <Panel backgroundImage="https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80">
          <h3>Explore the World</h3>
        </Panel>
        <Panel backgroundImage="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">
          <h3>Explore the World</h3>
        </Panel>
      </Container>
    </>
  )
}

export default ExpandingCards

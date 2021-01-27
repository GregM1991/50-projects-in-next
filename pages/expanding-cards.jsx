import React, { useState } from "react"
import Head from "next/head"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;

  @media (max-width: 480px) {
    container {
      width: 100vw;
    }
  }
`

const Panel = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  border-radius: 50px;
  color: white;
  cursor: pointer;
  flex: ${(props) => (props.isActive ? "5" : "0.5")};
  margin: 10px;
  position: relative;
  transition: flex 0.7s ease-in;

  @media (max-width: 480px) {
    &:nth-of-type(4),
    &:nth-of-type(5) {
      display: none;
    }
  }

  h3 {
    font-size: 24px;
    position: absolute;
    bottom: 20px;
    left: 20px;
    margin: 0;
    opacity: ${(props) => (props.isActive ? "1" : "0")};
  }
`

const ExpandingCards = () => {
  const [isActive, setIsActive] = useState(false)

  const handleClick = (e) => {
    console.log(e)
  }

  return (
    <>
      <Head>
        <title>Expanding Cards</title>
      </Head>
      <Container>
        <Panel
          onClick={(e) => handleClick(e)}
          backgroundImage="https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          isActive={isActive}
        >
          <h3>Explore the World</h3>
        </Panel>
        <Panel
          onClick={handleClick}
          backgroundImage="https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          isActive={isActive}
        >
          <h3>Explore the World</h3>
        </Panel>
        <Panel
          onClick={handleClick}
          backgroundImage="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
          isActive={isActive}
        >
          <h3>Explore the World</h3>
        </Panel>
        <Panel
          onClick={handleClick}
          backgroundImage="https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
          isActive={isActive}
        >
          <h3>Explore the World</h3>
        </Panel>
        <Panel
          onClick={handleClick}
          backgroundImage="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          isActive={isActive}
        >
          <h3>Explore the World</h3>
        </Panel>
      </Container>
    </>
  )
}

export default ExpandingCards

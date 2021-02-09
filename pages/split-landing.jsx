import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components"
import Head from "next/head"

const Body = styled.div`
  height: 100vh;
  overflow: hidden;
  margin: 0;
`

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #333;

  h1 {
    font-size: 4rem;
    color: #fff;
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translateX(-50%);
    white-space: nowrap;

    @media (max-width: 800px) {
      font-size: 2rem;
      top: 30%;
    }
  }
`

const SplitBase = css`
  position: absolute;
  width: 50%;
  height: 100%;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 1s ease-in-out;
`

const SplitLeft = styled.div`
  ${SplitBase};
  left: 0;
  background: url("https://github.com/bradtraversy/50projects50days/blob/master/split-landing-page/ps.jpg?raw=true");
  width: ${props =>
    props.isFocused === "0" ? "50%" : props.isFocused === "1" ? "75%" : "25%"};

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(87, 84, 236, 0.7);
  }
`

const SplitRight = styled.div`
  ${SplitBase};
  right: 0;
  background: url("https://github.com/bradtraversy/50projects50days/blob/master/split-landing-page/xbox.jpg?raw=true");

  width: ${props =>
    props.isFocused === "0" ? "50%" : props.isFocused === "1" ? "25%" : "75%"};

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(43, 43, 43, 0.8);
  }
`

const BuyNowButton = styled.a`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 50%;
  top: 40%;
  transform: translateX(-50%);
  text-decoration: none;
  color: #fff;
  border: #fff solid 0.2rem;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  width: 15rem;
  padding: 1.5rem;

  &:hover {
    background-color: ${props =>
      props.hoverColor === "green"
        ? "rgba(28, 122, 28, 1) "
        : "rgba(87, 84, 236, 1)"};
    border-color: ${props =>
      props.hoverColor === "green"
        ? "rgba(28, 122, 28, 1)"
        : "rgba(87, 84, 236, 1) "};
  }

  @media (max-width: 800px) {
    width: 12rem;
    padding: 1.2rem;
  }
`

const ProjectTemplate = () => {
  const [mouseOver, setMouseOver] = useState("0")
  const mouseOutHandler = () => {
    setMouseOver("0")
  }

  useEffect(() => {
    console.log(mouseOver)
  }, [mouseOver])
  return (
    <>
      <Head>
        <title>Split Landing</title>
      </Head>
      <Body>
        <Container>
          <SplitLeft
            onMouseEnter={() => setMouseOver("1")}
            onMouseLeave={mouseOutHandler}
            isFocused={mouseOver}
          >
            <h1>Playstation 5</h1>
            <BuyNowButton>Buy Now</BuyNowButton>
          </SplitLeft>
          <SplitRight
            onMouseEnter={() => setMouseOver("2")}
            onMouseLeave={mouseOutHandler}
            isFocused={mouseOver}
          >
            <h1>Xbox Series X</h1>
            <BuyNowButton hoverColor="green">Buy Now</BuyNowButton>
          </SplitRight>
        </Container>
      </Body>
    </>
  )
}

export default ProjectTemplate

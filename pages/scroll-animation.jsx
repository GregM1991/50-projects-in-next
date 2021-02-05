import React, { useState } from "react"
import styled from "styled-components"
import Head from "next/head"

const Body = styled.div`
  background-color: #efedd6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  overflow-x: hidden;

  h1 {
    margin: 10px;
  }
`

const Box = styled.div`
  background-color: steelblue;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 200px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.3);
  transform: ${props => (props.show ? "translateX(0)" : "translateX(400%)")};
  transition: transform 0.4s ease;

  &:nth-of-type(even) {
    transform: ${props => (props.show ? "translateX(0)" : "translateX(-400%)")};
  }

  h2 {
    font-size: 42px;
  }
`

// I need to find a way to access the boundingRect thing to get the bottom of the box, then
// once the bottom of the rect passes over the bottom of the screen, switch a bit of state
// that then triggers the animation to come into place

const ScrollAnimation = () => {
  const [show, setShow] = useState(false)
  // Need to implement some sort of custom hook to take in the scroll positions and spit out rerenders that don't tank my performance
  return (
    <>
      <Head>
        <title>Scroll Animation</title>
      </Head>
      <Body>
        <h1>Scroll to see the animation!</h1>
        <Box show={show}>
          <h2>Content</h2>
        </Box>
        <Box show={show}>
          <h2>Content</h2>
        </Box>
        <Box>
          <h2>Content</h2>
        </Box>
        <Box>
          <h2>Content</h2>
        </Box>
        <Box>
          <h2>Content</h2>
        </Box>
        <Box>
          <h2>Content</h2>
        </Box>
        <Box>
          <h2>Content</h2>
        </Box>
        <Box>
          <h2>Content</h2>
        </Box>
        <Box>
          <h2>Content</h2>
        </Box>
        <Box>
          <h2>Content</h2>
        </Box>
        <Box>
          <h2>Content</h2>
        </Box>
        <Box>
          <h2>Content</h2>
        </Box>
        <Box>
          <h2>Content</h2>
        </Box>
        <Box>
          <h2>Content</h2>
        </Box>
      </Body>
    </>
  )
}

export default ScrollAnimation

import React from "react"
import styled from "styled-components"
import Head from "next/head"

const Body = styled.div`
  background-color: #f6f7fb;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
`

const Box = styled.div``

const ScrollAnimation = () => {
  return (
    <>
      <Head>
        <title>Scroll Animation</title>
      </Head>
      <Body>
        <h1>Scroll to see the animation!</h1>
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

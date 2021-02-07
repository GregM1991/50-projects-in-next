import React from "react"
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
`

const SplitBase = css`
  position: absolute;
  width: 50%;
  height: 100%;
  overflow: hidden;
`

const SplitLeft = styled.div`
  ${SplitBase};
  left: 0;
  background: url("https://github.com/bradtraversy/50projects50days/blob/master/split-landing-page/ps.jpg?raw=true");
`

const SplitRight = styled.div`
  ${SplitBase};
  left: 50%;
  background: url("https://github.com/bradtraversy/50projects50days/blob/master/split-landing-page/xbox.jpg?raw=true");
`

const BuyNowButton = styled.a``

const ProjectTemplate = () => {
  return (
    <>
      <Head>
        <title>Split Landing</title>
      </Head>
      <Body>
        <Container>
          <SplitLeft>
            <h1>Playstation 5</h1>
            <BuyNowButton>Buy Now</BuyNowButton>
          </SplitLeft>
          <SplitRight>
            <h1>Xbox Series X</h1>
            <BuyNowButton>Buy Now</BuyNowButton>
          </SplitRight>
        </Container>
      </Body>
    </>
  )
}

export default ProjectTemplate

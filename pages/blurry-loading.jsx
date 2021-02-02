import React, { useState } from "react"
import styled from "styled-components"
import Head from "next/Head"

const Body = styled.div`
  background-color: #f6f7fb;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
`

const BGSection = styled.section`
  background: url(${props => props.BGImage}) no-repeat center center/cover;
  position: absolute;
  top: -30px;
  left: -30px;
  width: calc(100vw + 60px);
  height: calc(100vh + 60px);
  filter: blur(0px);
`

const LoadingText = styled.div`
  font-size: 50px;
  color: #fff;
  z-index: 1;
`

const BlurryLoading = () => {
  const [loadCounter, setLoadCounter] = useState(0)

  useState(() => {
    let int = setInterval(blurring, 30)

    const blurring = () => {
      setLoadCounter(loadCounter + 1)

      if (loadCounter > 99) {
        clearInterval()
      }
    }
  }, [])

  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }

  return (
    <>
      <Head>
        <title>Blurry Loading</title>
      </Head>
      <Body>
        <BGSection BGImage="https://images.unsplash.com/photo-1576161787924-01bb08dad4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80"></BGSection>
        <LoadingText>{`${loadCounter}%`}</LoadingText>
      </Body>
    </>
  )
}

export default BlurryLoading

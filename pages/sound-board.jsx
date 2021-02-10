import React from "react"
import styled from "styled-components"
import Head from "next/head"

const Body = styled.div`
  background-color: #f6f7fb;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
`

const ButtonContainer = styled.div``

const SoundBoard = () => {
  return (
    <>
      <Head>
        <title>Sound Board</title>
      </Head>
      <Body>
        <audio id="applause" src="audio/applause.mp3"></audio>
        <audio id="boo" src="audio/boo.mp3"></audio>
        <audio id="gasp" src="audio/gasp.mp3"></audio>
        <audio id="tada" src="audio/tada.mp3"></audio>
        <audio id="victory" src="audio/victory.mp3"></audio>
        <audio id="wrong" src="audio/applause.mp3"></audio>
      </Body>

      <ButtonContainer></ButtonContainer>
    </>
  )
}

export default SoundBoard

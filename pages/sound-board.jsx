import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import Head from "next/head"

const Body = styled.div`
  background-color: rgb(161, 100, 223);
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
`

const SoundButton = styled.button`
  background-color: rebeccapurple;
  border-radius: 5px;
  border: none;
  color: #fff;
  margin: 1rem;
  padding: 1.5rem 3rem;
  font-size: 1.2rem;
  font-family: inherit;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`

const SoundBoard = () => {
  const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"]
  const applause = useRef(null)
  const boo = useRef(null)
  const gasp = useRef(null)
  const tada = useRef(null)
  const victory = useRef(null)
  const wrong = useRef(null)

  const playAudio = sound => {
    console.log(sound)
    const audioEl = sound.current
    audioEl.play()
  }

  //TODO: Figure out how to get this working

  return (
    <>
      <Head>
        <title>Sound Board</title>
      </Head>
      <Body>
        <audio
          ref={applause}
          src="http://freewavesamples.com/files/Korg-Triton-Slow-Choir-ST-C4.wav"
          crossOrigin=""
        ></audio>
        <audio ref={boo} src="audio/boo.mp3"></audio>
        <audio ref={gasp} src="audio/gasp.mp3"></audio>
        <audio ref={tada} src="audio/tada.mp3"></audio>
        <audio ref={victory} src="audio/victory.mp3"></audio>
        <audio ref={wrong} src="audio/applause.mp3"></audio>
        <div>
          {sounds.map((sound, i) => (
            <SoundButton key={i} onClick={() => playAudio(applause)}>
              {sound}
            </SoundButton>
          ))}
        </div>
      </Body>
    </>
  )
}

export default SoundBoard

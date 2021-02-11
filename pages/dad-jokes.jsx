import React, { useState } from "react"
import styled from "styled-components"
import Head from "next/head"
import axios from "axios"

const Body = styled.div`
  background-color: #686de0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  padding: 20px;
`

const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
  padding: 50px 20px;
  text-align: center;
  max-width: 100%;
  width: 800px;

  h3 {
    margin: 0;
    opacity: 0.5;
    letter-spacing: 2px;
  }
`

const Joke = styled.div`
  font-size: 30px;
  letter-spacing: 1px;
  line-height: 40px;
  margin: 50px auto;
  max-width: 600px;
`

const JokeButton = styled.button`
  background-color: #9f68e0;
  color: #fff;
  border: 0;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
  padding: 14px 40px;
  font-size: 16px;
  cursor: pointer;

  &:active {
    transform: scale(0.98);
  }

  &:focus {
    outline: 0;
  }
`

const getDadJokeURL = "https://icanhazdadjoke.com/"

const DadJokes = () => {
  const [dadJoke, setDadJoke] = useState("")

  const getDadJoke = () => {
    axios
      .get(getDadJokeURL, {
        headers: {
          Accept: "application/json",
        },
      })
      .then(res => setDadJoke(res.data.joke))
  }
  return (
    <>
      <Head>
        <title>Dad Jokes</title>
      </Head>
      <Body>
        <Container>
          <h3>Don't Laugh Challenge</h3>
          <Joke>
            {dadJoke.length > 0
              ? dadJoke
              : "Click the button to receive the best goddamn dad joke you ever did hear"}
          </Joke>
          <JokeButton onClick={getDadJoke}>Get Another Joke</JokeButton>
        </Container>
      </Body>
    </>
  )
}

export default DadJokes

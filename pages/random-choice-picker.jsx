import React from "react"
import styled from "styled-components"
import Head from "next/head"

const Body = styled.div`
  background-color: #2b88f0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
`

const Container = styled.div`
  width: 500px;

  h3 {
    color: #fff;
    margin: 10px 0 20px;
  }
`

const TextArea = styled.textarea`
  border: none;
  display: block;
  width: 100%;
  height: 100px;
  font-family: inherit;
  padding: 10px;
  margin: 0 0 20px;
  font-size: 16px;
`

const Tags = styled.div``

const Tag = styled.span``

const RandomChoicePicker = () => {
  return (
    <>
      <Head>
        <title>Random Choice Picker</title>
      </Head>
      <Body>
        <Container>
          <h3>
            Enter all of the choices divided by a comma (',').
            <br />
            Press enter when you're done
          </h3>
          <TextArea placeholder="Enter choices here..."></TextArea>

          <Tags>
            <Tag>Choice 1</Tag>
            <Tag>Choice 2</Tag>
            <Tag>Choice 3</Tag>
          </Tags>
        </Container>
      </Body>
    </>
  )
}

export default RandomChoicePicker

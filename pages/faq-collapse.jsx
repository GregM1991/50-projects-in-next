import React from "react"
import styled from "styled-components"
import Head from "next/head"
import FAQComponent from "../components/Blocks/FAQComponent"

const Body = styled.div`
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;

  h1 {
    margin: 50px 0 30px;
    text-align: center;
  }
`

const FAQContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const FAQCollapse = () => {
  return (
    <>
      <Head>
        <title>FAQ Collapse</title>
      </Head>
      <Body>
        <h1>Frequently Asked Questions</h1>
        <FAQContainer>
          <FAQComponent
            title="Why shouldn't we atoms"
            text="They make up everything"
          />
          <FAQComponent
            title="What do you call someone with no body and no nose"
            text="Nobody knows"
          />
          <FAQComponent
            title="What's the object-oriented way to become wealthy?"
            text="Inheritence"
          />
          <FAQComponent
            title="How many tickles does it take to tickle an octopus?"
            text="Ten-tickles!"
          />
          <FAQComponent
            title="What is: 1 + 1?"
            text="Depends on who you're asking"
          />
        </FAQContainer>
      </Body>
    </>
  )
}

export default FAQCollapse

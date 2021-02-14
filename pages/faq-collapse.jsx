import React, { useState } from "react"
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
  const [isActive, setIsActive] = useState("0")
  const handleClick = id => {
    setIsActive(id)
  }

  return (
    <>
      <Head>
        <title>FAQ Collapse</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
          integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
          crossorigin="anonymous"
        />
      </Head>
      <Body>
        <h1>Frequently Asked Questions</h1>
        <FAQContainer>
          <FAQComponent
            handleClick={() => handleClick("1")}
            isActive={isActive === "1"}
            title="Why shouldn't we atoms"
            text="They make up everything"
          />
          <FAQComponent
            handleClick={() => handleClick("2")}
            isActive={isActive === "2"}
            title="What do you call someone with no body and no nose"
            text="Nobody knows"
          />
          <FAQComponent
            handleClick={() => handleClick("3")}
            isActive={isActive === "3"}
            title="What's the object-oriented way to become wealthy?"
            text="Inheritence"
          />
          <FAQComponent
            handleClick={() => handleClick("4")}
            isActive={isActive === "4"}
            title="How many tickles does it take to tickle an octopus?"
            text="Ten-tickles!"
          />
          <FAQComponent
            handleClick={() => handleClick("5")}
            isActive={isActive === "5"}
            title="What is: 1 + 1?"
            text="Depends on who you're asking"
          />
        </FAQContainer>
      </Body>
    </>
  )
}

export default FAQCollapse

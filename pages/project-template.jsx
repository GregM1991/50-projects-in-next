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

const ProjectTemplate = () => {
  return (
    <>
      <Head>
        <title>Project Template</title>
      </Head>
      <Body>
        <h1>Hello</h1>
      </Body>
    </>
  )
}

export default ProjectTemplate

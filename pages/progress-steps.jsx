import React from "react"
import styled from "styled-components"

const Body = styled.div`
  background-color: #f6f7fb;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
`

const Container = styled.div`
  text-align: center;
`

const ProgressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 30px;
  max-width: 100%;
  width: 350px;
`

const Progress = styled.div`
  background-color: #3498db;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 4px;
  width: 100%;
  z-index: -1;

  &::before {
    content: "";
    background-color: #e0e0e0;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 4px;
    width: 50%;
    z-index: -1;
    transition: 0.4s ease;
  }
`

const Circle = styled.div``

const Btn = styled.button``

const ProgressSteps = () => (
  <Body>
    <Container>
      <ProgressContainer>
        <Progress></Progress>
        <Circle>1</Circle>
        <Circle>2</Circle>
        <Circle>3</Circle>
        <Circle>4</Circle>
      </ProgressContainer>
      <Btn>Prev</Btn>
      <Btn>Next</Btn>
    </Container>
  </Body>
)

export default ProgressSteps

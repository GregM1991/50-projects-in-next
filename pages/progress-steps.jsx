import React, { useState } from "react"
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

  &:before {
    content: "";
    background-color: #e0e0e0;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 4px;
    width: 95%;
  }
`

const Progress = styled.div`
  background-color: #3498db;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 4px;
  width: ${(props) =>
    props.activeState === 0
      ? "0"
      : props.activeState === 1
      ? "33%"
      : props.activeState === 2
      ? "66%"
      : "95%"};
  transition: 0.4s ease;
`

const Circle = styled.div`
  background-color: #fff;
  color: #999;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid ${(props) => (props.activated ? "#3498db" : "#e0e0e0")};
  transition: 0.4s ease;
  z-index: 1;
`

const Btn = styled.button`
  background-color: #3498db;
  color: #fff;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  font-family: inherit;
  padding: 8px 30px;
  margin: 5px;
  font-size: 14px;

  &:active {
    transform: scale(0.98);
  }

  &:focus {
    outline: 0;
  }

  &:disabled {
    background-color: #e0e0e0;
    cursor: not-allowed;
  }
`

const ProgressSteps = () => {
  const [isActive, setIsActive] = useState(0)

  const handleNextStep = () => {
    isActive === 3 ? isActive : setIsActive(isActive + 1)
    console.log(isActive)
  }

  const handlePreviousStep = () => {
    isActive === 0 ? isActive : setIsActive(isActive - 1)
  }

  return (
    <Body>
      <Container>
        <ProgressContainer>
          <Progress activeState={isActive}></Progress>
          <Circle activated={isActive >= 0}>1</Circle>
          <Circle activated={isActive >= 1}>2</Circle>
          <Circle activated={isActive >= 2}>3</Circle>
          <Circle activated={isActive >= 3}>4</Circle>
        </ProgressContainer>
        <Btn onClick={handlePreviousStep} disabled={isActive === 0}>
          Prev
        </Btn>
        <Btn onClick={handleNextStep} disabled={isActive === 3}>
          Next
        </Btn>
      </Container>
    </Body>
  )
}

export default ProgressSteps

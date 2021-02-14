import React from "react"
import styled, { css } from "styled-components"

const FAQ = styled.div`
  background-color: ${props => (props.isActive ? "#fff" : "transparent")};
  border: 1px solid #9fa4a8;
  border-radius: 10px;
  margin: 20px 0;
  padding: 30px;
  position: relative;
  overflow: hidden;
  transition: 0.3s ease;
  ${props =>
    props.isActive &&
    css`
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1);

      &::before,
      &::after {
        content: "\f075";
        font-family: "Font Awesome 5 Free";
        color: #2ecc71;
        font-size: 7rem;
        position: absolute;
        opacity: 0.2;
        top: 20px;
        left: 20px;
        z-index: 0;
      }

      &::before {
        color: #3498db;
        top: -10px;
        left: -30px;
        transform: rotateY(180deg);
      }
    `}
`

const Title = styled.h3`
  margin: 0 35px 0 0;
`

const Text = styled.p`
  display: ${props => (props.isActive ? "block" : "none")};
`

const Toggle = styled.button`
  background-color: transparent;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  padding: 0;
  position: absolute;
  top: 30px;
  right: 30px;
  height: 30px;
  width: 30px;

  &:focus {
    outline: 0;
  }

  & .fa-times {
    display: none;
    ${props =>
      props.isActive &&
      css`
        color: #fff;
        display: block;
      `}

  & .fa-chevron down {
    display: none;
    ${props =>
      props.isActive &&
      css`
        background-color: #9fa4a8;
      `}
  }
`

const FAQComponent = ({ title, text }) => (
  <FAQ>
    <Title>{title}</Title>
    <Text>{text}</Text>
    <Toggle>
      <i class="fas fa-chevron-down"></i>
      <i class="fas fa-times"></i>
    </Toggle>
  </FAQ>
)

export default FAQComponent

import React, { useState } from "react"
import Head from "next/Head"
import styled, { css } from "styled-components"

const Body = styled.div`
  background-image: linear-gradient(90deg, #7d5fff, #7158e2);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
`

const Search = styled.div`
  position: relative;
  height: 50px;
`

const Input = styled.input`
  background-color: #fff;
  border: 0;
  font-size: 18px;
  padding: 15px;
  height: 50px;
  width: ${(props) => (props.isActive ? "200px" : "50px")};
  transition: width 0.3s ease;

  &:focus {
    outline: none;
  }
`

const Button = styled.button`
  background-color: #fff;
  border: 0;
  cursor: pointer;
  font-size: 24px;
  position: absolute;
  top: 0;
  left: 0;
  height: 50px;
  width: 50px;
  transition: transform 0.3s ease;
  ${(props) =>
    props.isActive &&
    css`
      transform: translateX(198px);
    `}

  &:focus {
    outline: none;
  }
`

const HiddenSearchWidget = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <Head>
        <title>Hidden Search Widget</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
          integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
          crossorigin="anonymous"
        />
      </Head>
      <Body>
        <Search>
          <Input isActive={isActive} type="text" placeholder="Search..." />
          <Button isActive={isActive} onClick={() => setIsActive(!isActive)}>
            <i className="fas fa-search"></i>
          </Button>
        </Search>
      </Body>
    </>
  )
}

export default HiddenSearchWidget

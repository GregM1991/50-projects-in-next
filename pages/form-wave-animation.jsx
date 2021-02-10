import React, { useRef, useEffect, useState } from "react"
import styled, { css } from "styled-components"
import Head from "next/head"

const Body = styled.div`
  background-color: steelblue;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
`

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  padding: 20px 40px;
  border-radius: 5px;

  h1 {
    text-align: center;
    margin-bottom: 30px;
  }

  a {
    text-decoration: none;
    color: lightblue;
  }
`

const inputBase = css`
  background-color: transparent;
  border: 0;
  border-bottom: 2px #fff solid;
  display: block;
  width: 100%;
  padding: 15px 0;
  font-size: 18px;

  &:focus,
  & input:valid {
    outline: 0;
    border-bottom-color: lightblue;
  }
`

const labelBase = css`
  position: absolute;
  top: 15px;
  left: 0;
`

const FormControl = styled.div`
  position: relative;
  margin: 20px 0 40px;
  width: 300px;

  input {
    ${inputBase}
  }

  label {
    ${labelBase}
  }

  label span {
    display: inline-block;
    font-size: 18px;
    min-width: 5px;
    transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  input:focus + label span,
  input:valid + label span {
    color: lightblue;
    transform: translateY(-30px);
  }
`

const LoginButton = styled.button`
  cursor: pointer;
  display: inline-block;
  width: 100%;
  background: lightblue;
  padding: 15px;
  font-family: inherit;
  font-size: 16px;
  border: 0;
  border-radius: 5px;

  &:focus {
    outline: 0;
  }

  &:active {
    transform: scale(0.98);
  }
`

const TextPara = styled.p`
  margin-top: 30px;
`

const ProjectTemplate = () => {
  const labelRef1 = useRef(null)
  const labelRef2 = useRef(null)

  useEffect(() => {
    const labelSpanInjector = ref => {
      if (ref) {
        const newRef = ref.current.innerText
          .split("")
          .map(
            (letter, idx) =>
              `<span style="transition-delay: ${idx * 30}ms">${letter}</span>`
          )
          .join("")

        return newRef
      }
    }

    labelRef1.current.innerHTML = labelSpanInjector(labelRef1)
    labelRef2.current.innerHTML = labelSpanInjector(labelRef2)
  }, [labelRef1, labelRef2])

  return (
    <>
      <Head>
        <title>Form Wave Animation</title>
      </Head>
      <Body>
        <Container>
          <h1>Please Login</h1>
          <form>
            <FormControl>
              <input type="text" required />
              <label ref={labelRef1}>Email</label>
            </FormControl>
            <FormControl>
              <input type="password" required />
              <label ref={labelRef2}>Password</label>
            </FormControl>
          </form>
          <LoginButton>Login</LoginButton>
          <TextPara>
            Don't have an account?<a href="#"> Register</a>
          </TextPara>
        </Container>
      </Body>
    </>
  )
}

export default ProjectTemplate

import React, { useRef } from "react"
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
  const labelRefs = useRef([])

  labelRefs.current = [0, 0].map((ref, index) => {
    labelRefs.current[index] = React.createRef()
  })

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
              <label ref={labelRefs[0]}>Email</label>
            </FormControl>
            <FormControl>
              <input ref={labelRefs[1]} type="password" required />
              <label>Password</label>
            </FormControl>
          </form>
          {console.log(labelRefs)}
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

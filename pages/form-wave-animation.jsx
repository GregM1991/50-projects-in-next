import React from "react"
import styled from "styled-components"
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

const Form = styled.form``

const FormControl = styled.div`
  position: relative;
  margin: 20px 0 40px;
  width: 300px;

  input {
    background-color: transparent;
    border: 0;
    border-bottom: 2px #fff solid;
    display: block;
    width: 100%;
    padding: 15px 0;
    font-size: 18px;
  }
`

const LoginButton = styled.button``

const TextPara = styled.p``

const ProjectTemplate = () => {
  return (
    <>
      <Head>
        <title>Form Wave Animation</title>
      </Head>
      <Body>
        <Container>
          <h1>Please Login</h1>
          <Form>
            <input type="text" required />
            <label>Email</label>
          </Form>
          <FormControl>
            <input type="password" required />
            <label>Password</label>
          </FormControl>

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

import React, { useEffect, useReducer } from "react"
import styled from "styled-components"
import Head from "next/head"

const Body = styled.div`
  background-color: #e1e1e1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
`

const Insert = styled.div``

const Key = styled.div`
  border: 1px solid #999;
  background-color: #eee;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  display: inline-flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  padding: 20px;
  flex-direction: column;
  margin: 10px;
  min-width: 150px;
  position: relative;

  small {
    position: absolute;
    top: -24px;
    left: 0;
    text-align: center;
    width: 100%;
    color: #555;
    font-seize: 14px;
  }
`

const initialState = { key: "", keyCode: 0, code: "" }

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_KEY":
      return { ...state, key: action.payload }
    case "SET_KEY_CODE":
      return { ...state, keyCode: action.payload }
    case "SET_CODE":
      return { ...state, code: action.payload }
  }
}

const EventKeycodes = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    window.addEventListener("keydown", function sendDispatches(e) {
      dispatch({ type: "SET_KEY", payload: e.key })
      dispatch({ type: "SET_KEY_CODE", payload: e.keyCode })
      dispatch({ type: "SET_CODE", payload: e.code })
    })
    return () => {
      window.removeEventListener("keydown", sendDispatches)
    }
  }, [])
  return (
    <>
      <Head>
        <title>Event Keycodes</title>
      </Head>
      <Body>
        <Insert>
          {state.key && (
            <>
              <Key>
                {state.key}
                <small>event.key</small>
              </Key>
              <Key>
                {state.keyCode}
                <small>event.keyCode</small>
              </Key>
              <Key>
                {state.code}
                <small>event.code</small>
              </Key>
            </>
          )}
          <Key>Press any key to get the keyCode</Key>
        </Insert>
      </Body>
    </>
  )
}

export default EventKeycodes

import React from "react"
import styled from "styled-components"

const PanelContainer = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  border-radius: 50px;
  color: white;
  cursor: pointer;
  flex: ${(props) => (props.active ? "5" : "0.5")};
  margin: 10px;
  position: relative;
  transition: flex 0.7s ease-in;

  @media (max-width: 480px) {
    &:nth-of-type(4),
    &:nth-of-type(5) {
      display: none;
    }
  }

  h3 {
    font-size: 24px;
    position: absolute;
    bottom: 20px;
    left: 20px;
    margin: 0;
    opacity: ${(props) => (props.active ? "1" : "0")};
    transition: opacity 0.3s ease-in 0.4s;
    color: white;
  }
`

const Panel = ({ backgroundImage, active, onClick }) => {
  return (
    <PanelContainer
      onClick={onClick}
      active={active}
      backgroundImage={backgroundImage}
    >
      <h3>Explore The World</h3>
    </PanelContainer>
  )
}

export default Panel

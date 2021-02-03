import React, { useState } from "react"
import Head from "next/head"
import styled, { css } from "styled-components"

//TODO: NEED TO FIX UP HOW THE BUTTONS ROTATE

const Body = styled.div`
  overflow: x-hidden;
  background-color: #333;
  color: #222;
  margin: 0;
`

const Container = styled.div`
  background-color: #fafafa;
  transform: ${props => (props.showNav ? "rotate(-20deg)" : "0")};
  transform-origin: top left;
  transition: transform 0.5s linear;
  width: 100vw;
  min-height: 100vh;
  padding: 50px;
`
const CircleContainer = styled.div`
  position: fixed;
  top: -100px;
  left: -100px;
`

const Circle = styled.div`
  background-color: #ff7979;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  position: relative;
  transition: transform 0.5s linear;

  ${props =>
    props.showNav &&
    css`
      transform: rotate(-70deg);
    `}
`

const NavButtonBase = css`
  cursor: pointer;
  position: absolute;
  top: 48%;
  left: 62%;
  height: 100px;
  background: transparent;
  border: 0;
  font-size: 26px;
  color: #fff;
  transform: ${props => (props.isOpen ? "rotate(70deg)" : "rotate(0deg)")};
  transform-origin: top left;

  &:focus {
    outline: none;
  }
`

const NavButtonOpen = styled.button`
  ${NavButtonBase};
  ${props =>
    props.isOpen &&
    css`
      left: 80%;
    `}
`

const NavButtonClose = styled.button`
  ${NavButtonBase};
  ${props =>
    !props.isOpen &&
    css`
      top: 60%;
      transform: rotate(90deg);
      tarnsform-origin: top left;
    `}
`

const Content = styled.div`
  max-width: 1000px;
  margin: 50px auto;

  h1 {
    margin: 0;
  }

  small {
    color: #555;
    font-style: italic;
  }

  p {
    color: #333;
    line-height: 1.5;
  }

  img {
    max-width: 100%;
  }
`

const Nav = styled.nav`
  position: fixed;
  bottom: 40px;
  left: 0;
  z-index: 100;
`

const NavUL = styled.ul`
  list-style-type: none;
  padding-left: 30px;

  ${props =>
    props.showNav &&
    `
    & li {
      transform: translateX(0) !important;
      transition-delay: 0.3s;
    }
  `}
`

const NavItem = styled.li`
  text-transform: uppercase;
  color: #fff;
  margin: 40px 0;
  transform: translateX(-100%);
  transition: transform 0.4s ease-in;

  i {
    font-size: 20px;
    margin-right: 10px;
  }

  & + & {
    margin-left: 15px;
    transform: translateX(-150%);
  }

  & + & + & {
    margin-left: 30px;
    transform: translateX(-200%);
  }
`

const RotatingNavigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Head>
        <title>Rotating Navigation</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
          integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
          crossorigin="anonymous"
        />
      </Head>

      <Body>
        <Container showNav={isOpen}>
          <CircleContainer>
            <Circle>
              <NavButtonOpen isOpen={isOpen} onClick={() => setIsOpen(true)}>
                <i class="fas fa-bars"></i>
              </NavButtonOpen>

              <NavButtonClose isOpen={!isOpen} onClick={() => setIsOpen(false)}>
                <i class="fas fa-times"></i>
              </NavButtonClose>
            </Circle>
          </CircleContainer>

          <Content>
            <h1>Amazing Article</h1>
            <small>Greg Martin</small>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
              esse corrupti officiis, iure cupiditate, laborum quae commodi
              veniam tenetur ut quisquam? Eius quos iusto voluptate impedit quod
              modi rem autem, nemo sed dolor aperiam qui ipsa nulla minus ipsam
              laudantium perferendis molestias rerum aut. Ipsa cupiditate cum
              sunt, consequuntur vero fuga placeat. Suscipit eius maiores
              laboriosam voluptate, hic dicta a facilis nobis asperiores itaque
              architecto sint similique corrupti, mollitia neque. Odit vitae
              architecto consectetur placeat inventore debitis omnis eum
              voluptates officiis recusandae, libero expedita autem excepturi
              quos exercitationem nemo voluptatibus asperiores voluptas nisi
              quae voluptatum laudantium sint! Harum, iure? Fugit.
            </p>
            <h3>My Dog</h3>
            <img src="https://images.unsplash.com/photo-1561046259-7d5b6e929ba0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=638&q=80"></img>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos reiciendis atque sequi dolores quia incidunt libero
              minus ab voluptatibus perspiciatis, placeat eaque inventore
              mollitia labore sunt possimus. Cupiditate animi voluptatum
              consequatur perferendis magni quo porro asperiores, hic commodi ut
              expedita, exercitationem explicabo unde distinctio rerum neque
              tenetur! Totam autem saepe alias nesciunt, quod repellat assumenda
              mollitia obcaecati qui error velit iste expedita, maxime quidem
              dolore. Odio, maxime veritatis aliquid voluptas dicta nulla?
              Exercitationem, quis iusto?
            </p>
          </Content>
        </Container>

        <Nav>
          <NavUL showNav={isOpen}>
            <NavItem>
              <i class="fas fa-home"></i> Home
            </NavItem>
            <NavItem>
              <i class="fas fa-user-alt"></i> About
            </NavItem>
            <NavItem>
              <i class="fas fa-envelope"></i> Contact
            </NavItem>
          </NavUL>
        </Nav>
      </Body>
    </>
  )
}

export default RotatingNavigation

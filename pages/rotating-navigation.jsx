import React from "react"
import Head from "next/Head"
import styled from "styled-components"

const Body = styled.div`
  overflow: x-hidden;
  background-color: #333;
  color: #222;
  margin: 0;
`

const Container = styled.div`
  background-color: #fafafa;
  transform: ${(props) => (props.showNav ? "rotate(-20deg)" : "0")};
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

const Circle = styled.div``

const CloseBtn = styled.button``

const OpenBtn = styled.button``

const Content = styled.div``

const Nav = styled.nav``

const NavUL = styled.ul``

const NavItem = styled.li``

const RotatingNavigation = () => {
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
        <Container showNav={false}>
          <CircleContainer>
            <Circle>
              <CloseBtn>
                <i class="fas fa-times"></i>
              </CloseBtn>
              <OpenBtn>
                <i class="fas fa-bars"></i>
              </OpenBtn>
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
          <NavUL>
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

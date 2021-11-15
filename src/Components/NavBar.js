// import React from 'react'
// import {Link} from 'react-router-dom'
// import '../Styling/link.scss'


// const NavBar = () => {
//     return (
//         <>
//             <div style={styles.main}>
//                     <Link style={styles.links} to="/">Home</Link>
//                     <Link style={styles.links} to="/About">About me</Link>
//                     <Link style={styles.links} to="/Projects">Projects</Link>
//                     <Link style={styles.links} to="/Resume">Resume</Link>
//                     <Link style={styles.links} to="/Contact">Contact</Link>

//             </div>
//         </>
//     )
// };

// const styles ={
//     main:{
//         background:"#212121",
//         display: "flex",
//     flexDirection: "row",
//     justifyContent: "right",
//     alignItems: "center",
//     },
//     links:{
//         color:"#F6F6F6",
//         paddingRight: "20px",
//         textDecoration: "none",
//     },
// };

// export default NavBar

import React, { useState } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  padding: 0 20px;
  min-height: 9vh;
  background: #212121;
  display: flex;
  flexDirection: row;
  justify-content: flex-end;
  align-items: center;
`;

// const Logo = styled.h1`
//   font-size: 25px;
//   color: white;
// `;

const Menu = styled.ul`
  list-style: none;
  display: flex;

  li:nth-child(2) {
    ${'' /* margin: 0px 20px; */}
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li`
margin-right: 20px;
}`;

const Link = styled.a`
  ${'' /* color: white;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  } */}
  
      position: relative;
      display: block;
      text-transform: uppercase;
      margin: 20px 0;
      padding: 10px 20px;
      text-decoration: none;
      color: #F6F6F6;
      font-family: sans-serif;
      font-size: 18px;
      font-weight: 600;
      transition: .5s;
      z-index: 1;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-top: 2px solid #F6F6F6;
        border-bottom: 2px solid #F6F6F6;
        transform: scaleY(2);
        opacity: 0;
        transition: .3s;
      }
      &:after {
        content: '';
        position: absolute;
        top: 2px;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #6D9886;
        transform: scale(0);
        opacity: 0;
        transition: .3s;
        z-index: -1;
      }
      &:hover {
        color: #fff;
        &:before {
          transform: scaleY(1);
          opacity: 1;
        }
        &:after {
          transform: scaleY(1);
          opacity: 1;
        }
      }
   
`;

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #fff;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${props => (props.open ? "40%" : "70%")};
  }
`;

const Overlay = styled.div`
  position: absolute;
  height: ${props => (props.open ? "91vh" : 0)};
  width: 100vw;
  background: #1c2022;
  transition: height 0.4s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);

  li {
    opacity: ${props => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`;

const NavBar = () => {
  const [toggle, toggleNav] = useState(false);
  return (
    <>
      <Nav>
        {/* <Logo>CSS Tricks</Logo> */}
        <Menu>
          <Item>
            <Link href="/">
              Home
            </Link>
          </Item>
          <Item>
            <Link href="/About">
            About
            </Link>
          </Item> 
          <Item>
            <Link  href="/Projects">
            Projects
            </Link>
          </Item>
          <Item>
            <Link target="#" href="https://drive.google.com/file/d/10kB9_MDjd65zeo7HNPuIduhFVhtRKNGh/view?usp=sharing">
            Resume
            </Link>
            {/* <Link to={{ pathname: "https://drive.google.com/file/d/1lGpeR3O0KbVszHVpT06QODUfQ_2U3lMn/view?usp=sharing" }} >Resume</Link> */}
          </Item>
          <Item>
            {/* <Link target="#" href="/Contact">
            Contact
            </Link> */}
          </Item>
        </Menu>
        <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>
      </Nav>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
          <Item>
          <Link  href="/">
              Home
            </Link>
          </Item>
          <Item>
          <Link href="/About">
            About
            </Link>
          </Item>
          <Item>
          <Link target="#" href="https://drive.google.com/file/d/10kB9_MDjd65zeo7HNPuIduhFVhtRKNGh/view?usp=sharing">
            Resume
            </Link>
          </Item>
          <Item>
          <Link href="/Projects">
            Projects
            </Link>
          </Item>
          <Item>
          {/* <Link target="#" href="/Contact">
            Contact
            </Link> */}
          </Item>
        </OverlayMenu>
      </Overlay>
    </>
  );
};

export default NavBar;



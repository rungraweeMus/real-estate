import React from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { menuData } from "../data/MenuData";
import { Buttton } from "./Button";
import { FaBars } from "react-icons/fa";
import icon from "../images/chatbot-ICON.png";

const Nav = styled.nav`
  height: 60px;
  /* background: black; */
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  /* opacity: 0.3; */
`;
const NavLink = css`
  /* color: gray; */
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  text-shadow: 0px 0px 20px #fff;
  font-family: 'Lora', serif;
`;

const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
`;
const MenuBars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    /* width: 40px;
        height: 30px; */
    position: absolute;
    color: white;
    /* background: gray; */
    /* border: darkgrey; */
    cursor: pointer;
    border-style: solid;
    /* top: 0; */
    right: 0;
    margin-right: 12px;
    transform: translateY(-50% -25%);
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Image = styled.img``;

const NavBar = ({ toggle }) => {
  const [close, setClose] = React.useState(true);
  const [show, setIsShow] = React.useState(false);

  const BtnClose = () => {
    setClose(!close);
  };

  const setInit = () => {
      setClose(true)
  }

  return (
    <Nav className="bg-none md:shadow-md md:bg-white md:bg-gradient-to-b">
      <Logo exact to="/">
        ELIXS
      </Logo>
      <MenuBars
        className="w-10 p-1 bg-indigo-200 border-indigo-600 rounded-lg h-9"
        onClick={toggle}
      />
      <NavMenu className="text-gray-500">
        {menuData.map((item, index) => (
          <NavMenuLinks
            className="text-lg text-indigo-400 rounded-md font-mediumedium hover:bg-gray-100"
            exact={`${item.link} == '/'? 'true' : 'false'`}
            to={item.link}
            key={index}
            onClick={setInit}
          >
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
         {close ? (
           <NavBtn>
             <Buttton to="/contact" onClick={BtnClose}>
               {/* <p className="text-base">Contact Us</p> */}
               {/* <Image className="w-5 h-5 mt-1 ml-2"></Image> */}
               <Image
                 src={icon}
                 className="object-cover w-auto h-16 mt-12"
               ></Image>
             </Buttton>
           </NavBtn>
         ) : <div className="px-14"></div>}
    </Nav>
  );
};

export default NavBar;

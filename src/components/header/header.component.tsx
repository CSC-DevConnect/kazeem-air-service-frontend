import React from "react";
import {
  HeaderContainer,
  HeaderItem,
  HeaderItemList,
  LogoContainer,
} from "./header.styles";
import { FiSearch } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import KazeemLogo from "../../assets/Group 1.png";

export const Header = ({ currentUser }: any) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <img src={KazeemLogo} alt="logo" />
      </LogoContainer>
      <HeaderItemList>
        <form method="post">
          <input type="text" className="textbox" placeholder="Search..." />
          <button title="Search" type="submit" className="button"><FiSearch /></button>
        </form>
        <HeaderItem>
          {currentUser ? (
            <a href="/dashboard">
              <CgProfile />
            </a>
          ) : (
            <a href="/signin">Login</a>
          )}
        </HeaderItem>
      </HeaderItemList>
    </HeaderContainer>
  );
};

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

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <img src={KazeemLogo} alt="logo" />
      </LogoContainer>
      <HeaderItemList>
        <HeaderItem>
          <FiSearch />
        </HeaderItem>
        <HeaderItem>
          <a href="/login">Login</a>
          <CgProfile />
        </HeaderItem>
      </HeaderItemList>
    </HeaderContainer>
  );
};

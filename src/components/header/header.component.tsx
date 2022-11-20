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
        <HeaderItem>
          <FiSearch />
        </HeaderItem>
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

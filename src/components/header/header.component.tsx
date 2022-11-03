import React from "react";
import {
  HeaderContainer,
  HeaderItem,
  HeaderItemList,
  Logo,
} from "./header.styles";
import { FiSearch } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        Kazeem Air
      </Logo>
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

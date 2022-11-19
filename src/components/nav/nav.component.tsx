import React from "react";
import { NavContainer, NavItem, NavItemLink, NavItemList } from "./nav.styles";

export const NavBar = ({ currentUser }: any) => {
  return (
    <NavContainer>
      <NavItemList>
        <NavItem>
          <NavItemLink to="/">home</NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink to="/#manage">manage</NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink to="/book">book</NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink to="/#about">about us</NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink to="/#help">help</NavItemLink>
        </NavItem>
        {currentUser ? (
          ""
        ) : (
          <NavItem>
            <NavItemLink to="/signup">sign up</NavItemLink>
          </NavItem>
        )}
      </NavItemList>
    </NavContainer>
  );
};

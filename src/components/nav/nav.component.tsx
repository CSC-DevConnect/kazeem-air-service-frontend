import React from "react";
import { useNavigate } from "react-router-dom";
import { NavContainer, NavItem, NavItemLink, NavItemList } from "./nav.styles";

export const NavBar = ({ currentUser }: any) => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  
  return (
    <NavContainer>
      <NavItemList>
        <NavItem>
          <NavItemLink to="/">home</NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink to="/contact">contact us</NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink to="/book">book</NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink to="/about">about us</NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink to="/#help">help</NavItemLink>
        </NavItem>
        {currentUser ? (
          <NavItem onClick={logout}>
            <NavItemLink to="#logout">log out</NavItemLink>
          </NavItem>
        ) : (
          <NavItem>
            <NavItemLink to="/signup">sign up</NavItemLink>
          </NavItem>
        )}
      </NavItemList>
    </NavContainer>
  );
};

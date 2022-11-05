import React from "react";
import {
  MobileNavContainer,
  MobileNavIcon,
  MobileNavItem,
  MobileNavLink,
  MobileNavLogo,
  MobileNavMenu,
  MobileNavWrapper,
} from "./mobile-nav.styles";
import { FiMenu, FiSearch } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";

type NavigationProps = {
  toggle: boolean;
  handleToggle: () => void;
};

export const MobileNav: React.FC<NavigationProps> = ({
  toggle,
  handleToggle,
}) => {
  return (
    <MobileNavContainer>
      <MobileNavWrapper>
        <MobileNavLogo>
          <MobileNavLink to="/">Kazeem</MobileNavLink>
        </MobileNavLogo>
        <MobileNavIcon>
          <span>
            <FiSearch />
          </span>
          <span onClick={handleToggle}>
            {toggle ? <IoCloseSharp /> : <FiMenu />}
          </span>
        </MobileNavIcon>
      </MobileNavWrapper>
      <MobileNavMenu toggle={toggle}>
        <MobileNavItem>
          <MobileNavLink to="/">Home</MobileNavLink>
        </MobileNavItem>
        <MobileNavItem>
          <MobileNavLink to="/#manage">Manage</MobileNavLink>
        </MobileNavItem>
        <MobileNavItem>
          <MobileNavLink to="/#book">Book</MobileNavLink>
        </MobileNavItem>
        <MobileNavItem>
          <MobileNavLink to="/#about">About Us</MobileNavLink>
        </MobileNavItem>
        <MobileNavItem>
          <MobileNavLink to="/#help">Help</MobileNavLink>
        </MobileNavItem>
        <MobileNavItem>
          <MobileNavLink to="/#signup">Sign Up</MobileNavLink>
        </MobileNavItem>
      </MobileNavMenu>
    </MobileNavContainer>
  );
};

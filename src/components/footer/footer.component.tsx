import React from "react";
import {
  FooterContainer,
  FooterLink,
  FooterList,
  FooterListItem,
  FooterListHeading,
  FooterWrapper,
  FooterLogo,
} from "./footer.styles";
import KazeemLogo from "../../assets/Group 1.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLogo>
          <Link to="/" className="logo-link">
            <img src={KazeemLogo} alt="logo" />
          </Link>
        </FooterLogo>
        <FooterList>
          <FooterListHeading>company</FooterListHeading>
          <FooterListItem>
            <FooterLink>about us</FooterLink>
          </FooterListItem>
          <FooterListItem>
            <FooterLink>detination</FooterLink>
          </FooterListItem>
          <FooterListItem>
            <FooterLink>packages</FooterLink>
          </FooterListItem>
          <FooterListItem>
            <FooterLink>contact</FooterLink>
          </FooterListItem>
        </FooterList>
        <FooterList>
          <FooterListHeading>help</FooterListHeading>
          <FooterListItem>
            <FooterLink>Help/FAQ</FooterLink>
          </FooterListItem>
          <FooterListItem>
            <FooterLink>cancel your flight</FooterLink>
          </FooterListItem>
          <FooterListItem>
            <FooterLink>press</FooterLink>
          </FooterListItem>
        </FooterList>
        <FooterList>
          <FooterListHeading>more</FooterListHeading>
          <FooterListItem>
            <FooterLink>domestic flights</FooterLink>
          </FooterListItem>
          <FooterListItem>
            <FooterLink>investors relations</FooterLink>
          </FooterListItem>
          <FooterListItem>
            <FooterLink>partnerships</FooterLink>
          </FooterListItem>
          <FooterListItem>
            <FooterLink>jobs</FooterLink>
          </FooterListItem>
        </FooterList>
        <FooterList>
          <FooterListHeading>terms</FooterListHeading>
          <FooterListItem>
            <FooterLink>privacy policy</FooterLink>
          </FooterListItem>
          <FooterListItem>
            <FooterLink>terms of use</FooterLink>
          </FooterListItem>
          <FooterListItem>
            <FooterLink>accessibility</FooterLink>
          </FooterListItem>
        </FooterList>
      </FooterWrapper>
    </FooterContainer>
  );
};

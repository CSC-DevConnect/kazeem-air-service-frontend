import styled from "styled-components";
import { Link } from "react-router-dom";

type NavItemProps = {
  toggle: boolean;
};

export const MobileNavContainer = styled.div`
  /* padding: 20px; */

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const MobileNavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.5rem;
  padding: 20px;
`;

export const MobileNavIcon = styled.div`
  span {
    cursor: pointer;
    margin: 0 10px;
  }
`;

export const MobileNavMenu = styled.ul<NavItemProps>`
  display: ${(props) => (props.toggle ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  color: #1e266d;
  background: #eee;
  transition: ${(props) =>
    !props.toggle ? "all 0.5s ease" : "all 20s ease-in-out"};
  overflow: hidden;
  width: 100%;
  height: 70vh;
  padding: 20px;
  z-index: 1000000;
`;

export const MobileNavItem = styled.li`
  font-size: 1rem;
  font-weight: 500;
`;

export const MobileNavLink = styled(Link)`
  color: #000;
`;

export const MobileNavLogo = styled.div``;

export const MobileNavBarIcon = styled.div``;

export const MobileNavCloseIcon = styled.div``;

export const MobileNavBtn = styled.div``;

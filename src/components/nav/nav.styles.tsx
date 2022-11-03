import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  width: 100%;
  position: relative;
`;

export const NavItemList = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const NavItem = styled.li`
  padding: 1rem 2rem 1rem 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:nth-child(5) {
    margin-left: auto;
  }

  &:last-child {
    padding: 0;
  }
`;

export const NavItemLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-transform: capitalize;
`;

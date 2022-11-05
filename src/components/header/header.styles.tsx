import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin: 0;
`;

export const LogoContainer = styled(Link)`
  height: 35px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const HeaderItemList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
`;

export const HeaderItem = styled.li`
  margin: 0 10px;
  font-size: 1rem;
  font-weight: 500;
  color: #000;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    color: #000;
    margin: 0 10px;
  }
`;

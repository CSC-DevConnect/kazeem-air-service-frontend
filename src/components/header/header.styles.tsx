import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin: 0;
`;

export const Logo = styled.h3`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  color: #3177ff;
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

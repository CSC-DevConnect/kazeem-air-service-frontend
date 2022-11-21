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

  form {
    outline: 0;
    float: left;
    -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
      0 1px 2px rgba(0, 0, 0, 0.24);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    -webkit-border-radius: 4px;
    border-radius: 4px;
  }

  form > .textbox {
    outline: 0;
    height: 32px;
    width: 244px;
    line-height: 42px;
    padding: 0 16px;
    background-color: rgba(255, 255, 255, 0.8);
    color: #212121;
    border: 0;
    float: left;
    -webkit-border-radius: 4px 0 0 4px;
    border-radius: 4px 0 0 4px;
  }

  form > .textbox:focus {
    outline: 0;
    background-color: #fff;
  }

  form > .button {
    outline: 0;
    background: none;
    background-color: rgba(38, 50, 56, 0.8);
    float: left;
    height: 32px;
    width: 42px;
    text-align: center;
    line-height: 42px;
    border: 0;
    color: #fff;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: 16px;
    text-rendering: auto;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    -webkit-transition: background-color 0.4s ease;
    transition: background-color 0.4s ease;
    -webkit-border-radius: 0 4px 4px 0;
    border-radius: 0 4px 4px 0;
  }

  form > .button:hover {
    background-color: rgba(0, 150, 136, 0.8);
  }
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

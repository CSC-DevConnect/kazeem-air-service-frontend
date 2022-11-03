import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Header, NavBar } from "../../components";
import { NavigationContainer } from "./navigation.styles";

export const Navigation = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <Header />
        <NavBar />
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

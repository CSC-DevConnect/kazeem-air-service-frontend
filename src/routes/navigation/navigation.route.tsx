import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useCheckMobileScreen } from "../../common";
import { Header, MobileNav, NavBar } from "../../components";
import { NavigationContainer } from "./navigation.styles";

export const Navigation = () => {
  const [toggle, setToggle] = React.useState(false);
  const [togglePosition, setTogglePostion] = React.useState(false);

  const width = useCheckMobileScreen();

  console.log("width", width);

  const toggleMenuPosition = () => {
    if (window.scrollY >= 80) {
      setTogglePostion(true);
    } else {
      setTogglePostion(false);
    }
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  // React.useEffect(() => {
  //   window.addEventListener("scroll", toggleMenuPosition);
  // }),
  //   [togglePosition];

  return (
    <Fragment>
      {width <= 768 ? (
        <MobileNav toggle={toggle} handleToggle={handleToggle} />
      ) : (
        <NavigationContainer>
          <Header />
          <NavBar />
        </NavigationContainer>
      )}
      <Outlet />
    </Fragment>
  );
};

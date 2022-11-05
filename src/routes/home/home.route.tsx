import React from "react";
import { Hero, Trip } from "../../components";
import { HomeContainer } from "./home.styles";

export const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      <Trip />
    </HomeContainer>
  );
};

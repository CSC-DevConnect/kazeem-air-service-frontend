import React from "react";
import { Filght, Hero, Offer, Trip } from "../../components";
import { HomeContainer } from "./home.styles";

export const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      <Trip />
      <Filght />
      <Offer />
    </HomeContainer>
  );
};

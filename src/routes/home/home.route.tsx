import React from "react";
import { Filght, Footer, Hero, Offer, Trip } from "../../components";
import { HomeContainer } from "./home.styles";

export const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      <Trip />
      <Filght />
      <Offer />
      <Footer />
    </HomeContainer>
  );
};

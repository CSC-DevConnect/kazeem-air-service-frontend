import React from "react";
import { SectionContainer } from "../../common";
import { Body, Form, OfferContainer } from "./offer.styles";

export const Offer = () => {
  return (
    <SectionContainer>
      <OfferContainer>
        <Body>
          <h3>Never miss an offer</h3>
          <p>Try it for free and get access to exclusive offers</p>
        </Body>
        <Form>
          <input type="email" placeholder="Enter your email address" />
          <button>subscribe</button>
        </Form>
      </OfferContainer>
    </SectionContainer>
  );
};

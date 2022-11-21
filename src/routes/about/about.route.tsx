/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import owner from "../../assets/img.png";
import { ImageContainer, OwnerContainer, OwnerContent } from "./about.styles";

const OwnerRoute = () => {
  return (
    <OwnerContainer>
      <OwnerContent>
        <ImageContainer>
          <img src={owner} alt="image" />
          <div>
            <h4>MEET THE OWNER</h4> <p>KAZEEM QUDUS OLADIMEJI</p>{" "}
            <span>Visit us today!</span>
          </div>
        </ImageContainer>
        <p>Privacy Statement | Accessibility Statement</p>
        <p className="span">
          Disclaimer: This Website has been developed for assessment purposes
          2022.
        </p>
      </OwnerContent>
    </OwnerContainer>
  );
};

export default OwnerRoute;

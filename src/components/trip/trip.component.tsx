import React from "react";
import {
  SectionBgImg,
  SectionBox,
  SectionContainer,
  SectionContent,
  SectionHeader,
  SectionInfo,
} from "../../common";
import FirstTrip from "../../assets/Rectangle140.png";
import SecondTrip from "../../assets/Rectangle141.png";
import ThirdTrip from "../../assets/Rectangle142.png";

export const Trip = () => {
  return (
    <SectionContainer>
      <SectionHeader>
        <h2>Plan your next Trip</h2>
        <p>
          Are you thinking of Traveling soon, here are some of options that may
          suit your interest.
        </p>
      </SectionHeader>
      <SectionContent>
        <SectionBox>
          <SectionBgImg bgImg={FirstTrip} />
          <SectionInfo>
            {/* <h4>Best time to enjoy holiday</h4> */}
            <p>Book a Package</p>
          </SectionInfo>
        </SectionBox>
        <SectionBox>
          <SectionBgImg bgImg={SecondTrip} />
          <SectionInfo>
            {/* <h4>Travel Requirements</h4> */}
            <p>Find out more</p>
          </SectionInfo>
        </SectionBox>
        <SectionBox>
          <SectionBgImg bgImg={ThirdTrip} />
          <SectionInfo>
            {/* <h4>Get familiar with destination</h4> */}
            <p>Find flight and more</p>
          </SectionInfo>
        </SectionBox>
      </SectionContent>
    </SectionContainer>
  );
};

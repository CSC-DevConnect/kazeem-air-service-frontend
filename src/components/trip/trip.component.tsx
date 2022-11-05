import React from "react";
import {
  TripBgImg,
  TripBox,
  TripContainer,
  TripContent,
  TripHeader,
  TripInfo,
} from "./trip.styles";
import FirstTrip from "../../assets/Rectangle140.png";
import SecondTrip from "../../assets/Rectangle141.png";
import ThirdTrip from "../../assets/Rectangle142.png";

export const Trip = () => {
  console.log(FirstTrip);
  return (
    <TripContainer>
      <TripHeader>
        <h2>Plan your next trip</h2>
        <p>
          Are you thinking of Traveling soon, here are some of options that may
          suit your interest.
        </p>
      </TripHeader>
      <TripContent>
        <TripBox>
          <TripBgImg bgImg={FirstTrip} />
          <TripInfo>
            {/* <h4>Best time to enjoy holiday</h4> */}
            <p>Book a Package</p>
          </TripInfo>
        </TripBox>
        <TripBox>
          <TripBgImg bgImg={SecondTrip} />
          <TripInfo>
            {/* <h4>Travel Requirements</h4> */}
            <p>Find out more</p>
          </TripInfo>
        </TripBox>
        <TripBox>
          <TripBgImg bgImg={ThirdTrip} />
          <TripInfo>
            {/* <h4>Get familiar with destination</h4> */}
            <p>Find flight and more</p>
          </TripInfo>
        </TripBox>
      </TripContent>
    </TripContainer>
  );
};

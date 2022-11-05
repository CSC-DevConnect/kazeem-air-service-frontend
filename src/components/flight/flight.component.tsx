import React from "react";
import {
  FlightContainer,
  FlightContent,
  FlightHeader,
  FlightNote,
  FlightReservations,
} from "./flight.styles";
import {
  SectionContent,
  SectionHeader,
  SectionBgImg,
  SectionBox,
  SectionInfo,
} from "../../common";
import FirstFlight from "../../assets/Rectangle147.png";
import SecondFlight from "../../assets/Rectangle148.png";
import ThirdFlight from "../../assets/Rectangle149.png";

export const Filght = () => {
  return (
    <FlightContainer>
      <FlightHeader>
        <h2>the flight gesticulation</h2>
      </FlightHeader>
      <FlightContent>
        <FlightNote>
          <h4>
            Explore 4000+ entertainment options, unwind in spacious seats and
            dine on gourmet cuisine. Book on Kazeemair to enjoy special fares
            and take full control of your journey. State-Of-The-Art Fleet.
            Oneworld Alliance. Award-Winning Airline. Best Business Class.
          </h4>
          <button>join us today</button>
        </FlightNote>
      </FlightContent>

      <FlightReservations>
        <SectionHeader>
          <h2>Looking for more than a Flight</h2>
          <p>Having access to extra activities</p>
        </SectionHeader>
        <SectionContent>
          <SectionBox>
            <SectionBgImg bgImg={FirstFlight} />
            <SectionInfo>
              <p>Book an Hotel</p>
            </SectionInfo>
          </SectionBox>
          <SectionBox>
            <SectionBgImg bgImg={SecondFlight} />
            <SectionInfo>
              <p>Need a Driver</p>
            </SectionInfo>
          </SectionBox>
          <SectionBox>
            <SectionBgImg bgImg={ThirdFlight} />
            <SectionInfo>
              <p>Explore</p>
            </SectionInfo>
          </SectionBox>
        </SectionContent>
      </FlightReservations>
    </FlightContainer>
  );
};

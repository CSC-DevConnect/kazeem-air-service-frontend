import { Link } from "react-router-dom";
import styled from "styled-components";

export const FlightListContainer = styled.div`
  width: 100%;
  padding: 50px;
  overflow: hidden;
`;

export const FlightListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  padding: 20px;
`;

export const FlightCard = styled(Link)`
  background: linear-gradient(
    128.35deg,
    #3177ff -37.96%,
    rgba(49, 119, 255, 0.240164) -2.69%,
    rgba(49, 119, 255, 0) 72.09%
  );
  border: 1px solid #aac7ff;
  padding: 20px;
  border-radius: 10px;
`;

export const FlightCardHeader = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const FlightCardBody = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const FlightLogo = styled.div``;

export const FlightOrigin = styled.div``;

export const FlightDuration = styled.div``;

export const FlightDestination = styled.div``;

export const FlightPrice = styled.div``;

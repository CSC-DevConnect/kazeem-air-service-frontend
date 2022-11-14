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
  color: #000;
`;

export const FlightCardHeader = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  margin: 0 auto 10px;

  h3 {
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    text-transform: capitalize;
  }
`;

export const FlightCardBody = styled.div`
  display: flex;
  margin-top: 20px;

  & > div {
    padding: 0 5px;
    width: 100%;
  }
`;

export const FlightLogo = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const FlightOrigin = styled.div`
  text-align: left;

  p {
    font-size: 12px;
    text-transform: capitalize;
    margin-top: 12px;
  }
`;

export const FlightDuration = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  p {
    font-weight: 500;
    font-size: 9px;
    text-transform: capitalize;
  }
`;

export const FlightDestination = styled.div`
  text-align: left;

  p {
    font-size: 12px;
    text-transform: capitalize;
    margin-top: 12px;
  }
`;

export const FlightPrice = styled.div`
  h2 {
    line-height: 30px;
  }
`;

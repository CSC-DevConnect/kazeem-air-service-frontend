import styled from "styled-components";
import BgImg from "../../assets/Rectangle153.png";

export const FlightContainer = styled.div`
  position: relative;
  padding: 32px 40px;
`;

export const FlightHeader = styled.div`
  margin-bottom: 32px;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-weight: 600;
    font-size: 32px;
    line-height: 48px;
    text-transform: capitalize;
  }
`;

export const FlightContent = styled.div`
  display: flex;
  background-image: url(${BgImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 70vh;
  width: 100%;
  margin: 0 auto;
  padding: 20px 40px;
  border-radius: 20px;
`;

export const FlightNote = styled.div`
  background: #4282fd;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 400px;
  margin: auto 40px auto;

  h4 {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    margin-bottom: 20px;
  }

  button {
    background: #d9d9d9;
    background-blend-mode: darken;
    border: 2.5px solid #ffffff;
    border-radius: 30px;
    outline: none;
    cursor: pointer;
    text-transform: capitalize;
    padding: 10px;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
    margin-left: auto;
  }
`;

export const FlightReservations = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 40px;
`;

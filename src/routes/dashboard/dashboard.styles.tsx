import styled from "styled-components";
import BgImg from "../../assets/Rectangle162.png";

export const DashboardContainer = styled.div`
  position: relative;
`;

export const DashboardHero = styled.div`
  width: 100%;
  height: 70vh;
  background: url(${BgImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #fff;
  padding: 20px 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;

export const DashboardWelcomeText = styled.h2`
  font-size: 45px;
  line-height: 60px;
  font-weight: bold;
`;

export const DashboardWelcomeNote = styled.div`
  h3 {
    font-size: 30px;
    line-height: 40px;
  }

  p {
    line-height: 24px;
    opacity: 0.8;
  }
`;

export const DashboardWelcomeBtn = styled.button`
  background: transparent;
  outline: none;
  border-radius: 25px;
  border: 1px solid #fff;
  color: #fff;
  opacity: 0.8;
  padding: 10px;
  cursor: pointer;
`;

export const DashboardContent = styled.div`
  padding: 16px;
  background: lightgray;

  h3 {
    font-size: 20px;
    line-height: 44px;
  }

  h4 {
    font-size: 18px;
    line-height: 39px;
    font-weight: 500;
  }

  h5 {
    font-weight: 400;
    font-size: 14px;
    line-height: 48px;
    color: #3177ff;
    border-bottom: 1px solid #3177ff;
    width: max-content;
  }

  p {
    font-size: 16px;
    line-height: 36px;
  }
`;
export const DashboardTrips = styled.div`
  position: relative;
`;

export const DashboardActivities = styled.div`
  background: #fefeff;
  border-radius: 20px;
  padding: 16px;

  h4 {
    color: #474545;
  }

  .message {
    font-size: 18px;

    > span {
      font-weight: bold;
    }
  }
`;

export const DashboardTravels = styled.div`
  .travel-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 20px;
    margin: 20px 0;

    .travel-box {
      background: #fff;
      border-radius: 8px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }
`;

export const DashboardContentBtn = styled.button`
  background: #3177ff;
  border-radius: 25px;
  border: 1px solid #3177ff;
  outline: none;
  color: #fff;
  padding: 10px;
  cursor: pointer;
  margin: 20px 0;
`;

export const DashboardContentBtnOutline = styled.button`
  background: transparent;
  border-radius: 25px;
  border: 1px solid #3177ff;
  outline: none;
  color: #3177ff;
  padding: 10px;
  margin: 20px 0;
  margin-right: 10px;
  cursor: pointer;
`;

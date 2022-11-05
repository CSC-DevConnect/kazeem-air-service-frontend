import styled from "styled-components";
import BgImg from "../../assets/Rectangle18.png";

export const OfferContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  background-image: url(${BgImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 75vh;
  width: 100%;
  padding: 32px 60px;
  border-radius: 20px;
`;

export const Body = styled.div`
  text-align: center;
  margin-bottom: 30px;

  h3 {
    font-size: 25px;
    line-height: 40px;
    color: #041c44;
  }

  p {
    font-size: 16px;
    line-height: 25px;
    color: #02102b;
  }
`;

export const Form = styled.form`
  background: #ffffff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding: 10px;

  input {
    border: none;
    outline: none;
    padding: 10px;
  }

  button {
    background: #3177ff;
    border: none;
    outline: none;
    border-radius: 12px;
    color: #fff;
    font-weight: 500;
    font-size: 16px;
    line-height: 32px;
    text-align: center;
    text-transform: capitalize;
    padding: 5px 14px;
    cursor: pointer;
  }
`;

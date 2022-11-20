import styled from "styled-components";

export const BookDetailsContainer = styled.div`
  background: #fff;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;

export const BookDetailsContent = styled.div`
  background: #ffffff;
  padding: 10px;
  width: 60%;
  margin: 10px;
  height: fit-content;
  border-radius: 10px;
`;

export const TripDetails = styled.div`
  padding: 10px;
  width: 100%;
  background: #e8edef;
  border-radius: 5px;

  .trip-meta-data {
    display: flex;
    flex-direction: column;
    margin-top: 15px;

    div {
      display: flex;
    }
  }

  .journey {
    display: flex;
    margin-top: 15px;
    flex-direction: column;

    .journey-type {
      background: #9f7f7f;
      font-size: 12px;
      padding: 5px;
      width: fit-content;
      border-radius: 10px;
      margin-top: 10px;
    }

    .airline {
      display: flex;
      margin-top: 30px;

      .air-icon {
        width: 25%;
        padding: 10px;
        display: flex;
        align-items: center;

        img {
          background: #9f7f7f;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          object-fit: contain;
          margin-right: 5px;
        }
      }
    }
  }
`;
export const ContactDetails = styled.div`
  background: #e8edef;
  padding: 15px;
  width: 100%;
  margin-top: 30px;
  border-radius: 5px;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  transition: 0.5s;

  form {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
  }

  form p {
    font-size: 14px;
    font-weight: 600;
    text-transform: capitalize;
    letter-spacing: 2px;
    text-align: center;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 10px;
    color: #555;
    a {
      font-weight: 600;
      text-decoration: none;
      color: #677eff;
      cursor: pointer;
    }
  }

  form input {
    position: relative;
    width: 80%;
    height: 50px;
    padding: 10px;
    background: #f5f5f5;
    color: #333;
    border: none;
    outline: none;
    box-shadow: none;
    margin: 8px 0;
    font-size: 14px;
    letter-spacing: 1px;
    font-weight: 300;
  }
`;

export const PriceDetailsContent = styled.div`
  background: #000;
  padding: 10px;
  width: 20%;
  height: 300px;
  border-radius: 10px;
`;



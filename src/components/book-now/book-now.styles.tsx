import styled from "styled-components";

export const BookNowFormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.8);
  /* background: red; */
  z-index: 999;
  position: fixed;
  top: 0;
  padding: 20px;
  overflow: hidden;
`;

export const BookNowFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlightCard = styled.div`
  background: linear-gradient(
    128.35deg,
    #3177ff -37.96%,
    rgba(49, 119, 255, 0.240164) -2.69%,
    rgba(49, 119, 255, 0) 72.09%
  );
  border: 1px solid #aac7ff;
  border-radius: 20px;
`;

export const FlightCardHeader = styled.div``;

export const FlightCardBody = styled.div``;


export const BookNowFormContent = styled.form`
  background: #fff;
  padding: 20px;
`;

export const BookNowFormInput = styled.div`
  background: #f1f6ff;
  border: 1px solid #dadada;
  border-radius: 8px;
  display: flex;
  align-items: center;
  width: 400px;
  padding: 0 14px;
  margin: 20px 0;

  input,
  select {
    border: none;
    outline: none;
    width: 100%;
    background: transparent;
    padding: 10px;
  }

  option {
    width: 100%;
  }

  label {
    color: #000;
    font-size: 0.7rem;
  }
`;

export const BookNowFormButton = styled.div`
  width: 100%;
  background: #dadada;
  display: flex;
  justify-content: center;
  height: 50px;

  .book-btn {
    color: #000;
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
  }
`;

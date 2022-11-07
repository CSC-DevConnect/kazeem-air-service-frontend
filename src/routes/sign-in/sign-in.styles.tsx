import styled from "styled-components";
import BgImg from "../../assets/image3.png";

export const SignInContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  width: 100%;
`;

export const SignInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

export const SignInAlt = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: url(${BgImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 50%;
`;

export const SignInAltText = styled.div`
  color: #fff;
  padding: 20px;

  h3 {
    font-weight: 600;
    font-size: 32px;
    line-height: 49px;
  }

  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    margin-bottom: 30px;
  }

  .register-link {
    background: transparent;
    border: 2px solid #ffffff;
    padding: 14px;
    font-size: 1.4rem;
    text-transform: capitalize;
    color: #fff;
    width: 200px;
    cursor: pointer;
  }
`;

export const SignInHeader = styled.div`
  text-align: center;

  h3 {
    font-weight: 600;
    font-size: 32px;
    line-height: 56px;
    color: #000000;
    text-transform: capitalize;
  }

  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    text-align: center;
    color: #3177ff;
  }
`;

export const SignInForm = styled.form`
  position: relative;

  .forgot-password {
    text-transform: capitalize;
    text-align: right;
  }
`;

export const SignInFormInput = styled.div`
  background: #f1f6ff;
  border: 1px solid #dadada;
  border-radius: 25px;
  display: flex;
  align-items: center;
  width: 300px;
  padding: 0 14px;
  margin: 20px 0;

  input {
    border: none;
    outline: none;
    background: transparent;
    padding: 10px;
    color: #000;
    width: 100%;
  }
`;

export const SignInFormButton = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  background: #3177ff;
  border-radius: 25px;
  margin: 20px 0;

  button {
    border: none;
    outline: none;
    background: transparent;
    text-transform: capitalize;
    color: #fff;
    font-size: 1.2rem;
    cursor: pointer;
  }
`;

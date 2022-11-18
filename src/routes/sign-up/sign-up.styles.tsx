import styled from "styled-components";

export const SignUpContainer = styled.section`
  position: relative;
  min-height: 100vh;
  /* background-color: #f8dd30; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const ImageBox = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  transition: 0.5s;
  left: 0%;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const FormTitle = styled.h1`
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
  width: 100%;
  margin-bottom: 10px;
  color: #555;
`;

export const FormContainer = styled.h1`
  /* position: relative; */
  width: 50%;
  height: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  transition: 0.5s;

  form {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
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

export const SignUpButton = styled.input`
  max-width: 100px;
  background: #677eff;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  transition: 0.5s;
`;

export const SignUpContent = styled.div`
  /* position: relative; */
  width: 80%;
  height: 700px;
  background: #fff;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const SignUpForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const VerticalLine = styled.div`
  border-left: 6px solid green;
  height: 100%;
  position: absolute;
  left: 50%;
  margin-left: -3px;
  top: 0;
  overflow: hidden;
`;

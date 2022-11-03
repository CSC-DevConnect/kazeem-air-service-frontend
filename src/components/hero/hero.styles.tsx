import styled from "styled-components";
import BgImg from "../../assets/image1.png";

export const HeroContainer = styled.div`
  background-image: url(${BgImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 85vh;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const HeroBox = styled.div`
  background: #fff;
  padding: 24px;
  border-radius: 25px;
  width: 800px;

  ul {
    display: flex;
    align-items: center;
    margin: 10px;

    li {
      font-size: 1rem;
      text-transform: capitalize;
      padding: 0 10px;
      display: flex;
      align-items: center;

      span {
        margin: 0 10px;
      }

      &:last-child {
        margin-left: auto;
      }
    }

    &:last-child {
      justify-content: space-between;

      li {
        &:last-child {
          margin-left: 0;
        }
      }
    }
  }

  form {
    display: flex;
    align-items: center;
    margin: 15px 18px 0;
    background: #a7c5ff;

    input {
      border: none;
      outline: none;
      border-right: 2px solid #ecebeb;
      background: transparent;
      padding: 10px;
      color: #fff;

      ::placeholder {
        color: #fff;
      }
    }
  }
`;

export const HeroFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  margin-top: 30px;

  button {
    background: transparent;
    border: 2px solid #ffffff;
    padding: 14px;
    font-size: 1.4rem;
    text-transform: capitalize;
    color: #fff;
    width: 200px;
    margin-top: 20px;
    cursor: pointer;
  }
`;

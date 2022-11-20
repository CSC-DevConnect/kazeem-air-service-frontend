import styled from "styled-components";
import BgImg from "../../assets/image7.png";

export const BookContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const BookHero = styled.div`
  position: relative;
  width: 100%;
  height: 70vh;
  background: url(${BgImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  margin-bottom: 30px;
  padding: 0 50px;

  h2 {
    font-size: 3rem;
    line-height: 70px;
    text-transform: uppercase;
  }

  p {
    font-size: 1.5rem;
    line-height: 40px;

  }
`;

export const BookBox = styled.div`
  background: #eff4ff;
  box-shadow: 2px 2px 3px -3px #430b06;
  padding: 24px;
  border-radius: 0px;
  width: 100%;

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

  .form {
    display: flex;
    align-items: center;
    margin: 15px 18px 0;
    background: #a7c5ff;
    margin: 10px;

    .airline {
      display: flex;
      align-items: center;
      margin: 0 10px;
      border-right: 2px solid #ecebeb;
      width: 100%;
    }
  }

  input,
  select {
    border: none;
    outline: none;
    border-right: 2px solid #ecebeb;
    background: transparent;
    padding: 10px;
    color: #000;
    width: 100%;

    ::placeholder {
      color: #fff;
    }
  }

  select {
    border-right: none;
    font-size: 1rem;
  }

  option {
    background: gray;
  }

  label {
    font-size: 1rem;
  }
`;

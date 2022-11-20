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
    align-items: flex-start;
    margin: 10px;

    li {
      font-size: 1rem;
      text-transform: capitalize;
      padding: 0 10px;
      display: flex;
      align-items: center;

      span {
        margin: 0 10px;
        color: #000;
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

    p {
      color: #000;
      font-size: 16px;
      line-height: 20px;
    }

    .passenger {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    #passenger {
      align-items: flex-start;
      margin: 10px 0;

      > img {
        margin-right: 10px;
      }
    }

    .passenger-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }

    .passenger-type {
      margin-right: 10px;

      > p {
        color: #a7c5ff;
        font-weight: 600;
      }
    }

    table {
      border-radius: 5px;
      width: 100px;
      margin-top: 10px;

      td {
        cursor: pointer;
        border: 2px solid gray;

        > span {
          color: #a7c5ff;
          font-weight: bold;
        }

        .count {
          color: #000;
        }
      }
    }
  }

  .form {
    display: flex;
    align-items: center;
    background: #a7c5ff;
    height: 80px;
    margin: 30px 0;

    .airline {
      display: flex;
      align-items: center;
      justify-content: center;
      border-right: 2px solid #ecebeb;
      width: 100%;
      height: 100%;
      padding: 10px;
    }

    .form-inner {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      padding: 10px;
    }

    .form-input {
      background: #bbd2ff;
      border: 1px solid #f9fbff;
      padding: 5px;
      color: #848587;
      text-align: left;
    }

    .input {
      margin: 0 5px;
    }
  }

  input,
  select {
    outline: none;
    background: transparent;
    color: #848587;
    width: 100%;
    border: none;
    outline: none;

    ::placeholder {
      color: #fff;
    }
  }

  label {
    font-size: 14px;
  }

  select {
    border-right: none;
    font-size: 1rem;
    margin-right: 5px;
    padding: 10px 0;
  }

  option {
    background: #bbd2ff;
    border: 1px solid #f9fbff;
    color: #848587;
  }
`;

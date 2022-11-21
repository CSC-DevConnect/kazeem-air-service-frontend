import styled from "styled-components";

export const OwnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

export const OwnerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #eff4ff;
  box-shadow: 0px 0px 8px -1px #430b06;
  border-radius: 30px;
  padding: 25px;
  width: fit-content;

  .span {
    width: fit-content;
    padding: 5px;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    margin-top: 20px;
    padding: 10px;
    background: #3177ff;
    mix-blend-mode: multiply;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    margin-right: 100px;
    margin-bottom: 50px;
  }

  div h4 {
    width: fit-content;
    padding: 5px;
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    background: #3177ff;
    mix-blend-mode: multiply;
    margin-bottom: 10px;
  }

  div p {
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 30px;
    text-align: justify;
    color: #000000;
    margin-bottom: 10px;
  }
`;

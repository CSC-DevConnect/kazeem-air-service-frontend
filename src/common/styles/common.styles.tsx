import styled from "styled-components";

type Props = {
  bgImg: string;
};

export const SectionContainer = styled.div`
  padding: 32px 40px;
  position: relative;
`;

export const SectionHeader = styled.div`
  margin-bottom: 32px;
  color: #000000;

  h2 {
    font-weight: 600;
    font-size: 32px;
    line-height: 48px;
  }

  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
  }
`;

export const SectionContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SectionBgImg = styled.div<Props>`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.bgImg});
`;

export const SectionInfo = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 14px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid #d6d4d4;
  border-radius: 0px 0px 20px 20px;
  background-color: white;
  opacity: 0.7;

  h4 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 14px;
    color: #4a4a4a;
    text-transform: uppercase;
  }

  p {
    font-weight: 500;
    font-size: 17px;
    line-height: 30px;
    color: #000000;
  }
`;

export const SectionBox = styled.div`
  position: relative;
  min-width: 30%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px 20px 0px 0px;
  margin: 0 7.5px 15px;
  overflow: hidden;
  &:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }
  &:hover {
    cursor: pointer;
    ${SectionBgImg} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    ${SectionInfo} {
      opacity: 0.9;
    }
  }
`;

export const Container = styled.div`
  padding: 40px;
`;

export const Text = styled.div`
  color: #000;

  h2 {
    font-size: 18px;
    font-weight: bold;
    line-height: 32px;
  }

  p {
    font-size: 14px;
    line-height: 24px;
    text-align: justify;
    margin-bottom: 20px;

    .data-collection {
      list-style: disc;
      margin-left: 30px;

      li {
        margin: 10px 0;
      }
    }
  }
`;

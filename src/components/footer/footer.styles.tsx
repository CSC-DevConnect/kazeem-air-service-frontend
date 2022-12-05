import styled from "styled-components";

export const FooterContainer = styled.div`
  background: #3177ff;
  color: #fff;
  padding: 2rem;
`;

export const FooterWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
`;

export const FooterLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .logo-link {
    height: 35px;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;

export const FooterList = styled.ul`
  text-transform: capitalize;
`;

export const FooterListItem = styled.li`
  padding: 10px 0;
`;

export const FooterListHeading = styled.h3`
  font-weight: bold;
  line-height: 30px;
  margin-bottom: 10px;
`;

export const FooterLink = styled.a`
  cursor: pointer;
  color: #fff;
`;

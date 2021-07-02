import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 100%;
  height: 50px;
  background: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
`;

export const FooterContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto 50px auto;
  display: flex;
  align-items: center;
  height: 100%;
`;

export const FooterCopyrightContent = styled.div`
  float: left;
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const FooterCopyrightText = styled.p`
  color: ${({ theme }) => (theme === "light" ? "#fff" : "#000")};
`;

export const FooterListLogo = styled.div`
  color: white;
  width: 50%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const FooterListUL = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;
export const FooterListLI = styled.li`
  float: left;
  margin-left: 20px;
`;
export const FooterLink = styled.a`
  display: block;
  color: ${({ theme }) => (theme === "light" ? "#fff" : "#000")};
  text-decoration: none;
`;

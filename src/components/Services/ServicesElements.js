import styled from "styled-components";

export const ServicesContainer = styled.div`
  color: ${({ theme }) => (theme === "light" ? "#fff" : "#000")};
  background: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
  @media screen and (max-width: 786px) {
    padding: 100px 0;
  }
`;

export const ServicesWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 30px;
`;

export const SectionTitle = styled.p`
  font-family: "Poppins", serif;
  font-weight: bolder;
  color: ${(props) => props.color};
  text-align: center;
  font-size: 2rem;
  letter-spacing: 3px;
  margin: 50px 0 25px 0;
`;

export const SectionSubTitle = styled.p`
  font-weight: 300;
  font-size: 18px;
  text-align: center;
  max-width: 550px;
  margin: 0 auto 25px auto;
  color: ${({ theme }) => (theme === "light" ? "#fff" : "#000")};
`;

export const ServiceListWrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto 50px auto;
  display: grid;
  grid-template-columns 1fr 1fr 1fr;
  grid-gap: 16px;
  padding: 0 50px;


  @media screen and (max-width: 760px){
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 480px){
      grid-template-columns: 1fr;
      padding: 0 20px;
  }
`;

export const ServiceCol = styled.div`
  display: flex;
  flex-direction: column;
  jusitfy-content: flex-start;
  align-items: center;
  padding: 10px;
`;

export const ServiceLogo = styled.div`
  margin-bottom: 10px;
  color: ${(props) => props.color};
  font-size: 5rem;
`;
export const ServiceTitle = styled.h5`
  text-align: center;
  font-size: 24px;
  color: ${({ theme }) => (theme === "light" ? "#fff" : "#000")};
  margin-bottom: 15px;
`;

export const ServiceDescription = styled.p`
  text-align: center;
  font-size: 1rem;
  color: ${({ theme }) => (theme === "light" ? "#fff" : "#000")};
`;

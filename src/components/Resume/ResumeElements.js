import styled from "styled-components";
import { TiPlus, TiMinus } from "react-icons/ti";

export const ResumeContainer = styled.div`
  color: ${({ theme }) => (theme === "black" ? "#000" : "#fff")};
  background: ${({ theme }) => (theme === "dark" ? "#000" : "#fff")};
  @media screen and (max-width: 786px) {
    padding: 100px 0;
  }
`;

export const ResumeWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 30px;
  margin-bottom: 50px;
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
  color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
`;

export const SectionBorder = styled.div`
  width: 75px;
  height: 5px;
  background-color: ${(props) => props.color};
  margin: 0 auto 50px auto;
`;

export const ResumeTitleWrapper = styled.div`
  display: block;
  color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
  margin-bottom: 25px;
`;

export const ResumeTitleText = styled.p`
  font-weight: 300;
  font-size: 1rem;
  margin-bottom: 5px;
`;

export const ResumeListWrapper = styled.div`
  max-width: 1140px;
  display: grid;
  grid-auto-columns: minmax(10px, auto);
  grid-template-areas: "resumeCol1 resumeCol2";

  @media screen and (max-width: 768px) {
    grid-template-areas: "resumeCol1 resumeCol1" "resumeCol2 resumeCol2";
  }
`;

export const ResumeLabel = styled.div`
  width: 228px;
  margin-bottom: 15px;
  padding: 0 5px;
  grid-area: resumeCol1;
  position: relative;
  display: flex;
`;
export const ResumeYearWrapper = styled.div`
  width: 150px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: ${(props) => props.color};
  margin-right: 25px;

  @media screen and (max-width: 768px) {
    margin-right: 17px;
  }
`;

export const ResumeYearText = styled.p`
  font-size: 1rem;
`;

export const ResumeButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  width: 50px;
  height: 50px;
  border: 1px solid ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ResumeButtonLogoPlus = styled(TiPlus)`
  font-size: 1.25rem;
  color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
`;

export const ResumeButtonLogoMinus = styled(TiMinus)`
  font-size: 1.25rem;
  color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
`;

export const ResumeContent = styled.div`
  width: 912px;
  margin-bottom: 15px;
  padding: 0 5px;
  grid-area: resumeCol2;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ResumeContentWrapper = styled.div`
  width: 100%;
  min-height: 50px;
  border: 1px solid ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
  padding: 10px 15px 10px 15px;
  margin-bottom: 18px;
`;

export const ResumeContentMain = styled.h4`
  font-size: 1.2rem;
  font-weight: 400;

  color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
`;

export const ResumeContentSub = styled.p`
  font-weight: 300;
  font-size: 0.8rem;
  line-height: 1.2rem;
  margin-top: 12px;
  color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
`;

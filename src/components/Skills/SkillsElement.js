import styled from "styled-components";

export const SkillsContainer = styled.div`
  color: ${({ theme }) => (theme === "black" ? "#000" : "#fff")};
  background: ${({ theme }) => (theme === "dark" ? "#000" : "#fff")};
  @media screen and (max-width: 786px) {
    padding: 100px 0;
  }
`;

export const SkillWrapper = styled.div`
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
  color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
`;

export const SectionBorder = styled.div`
  width: 75px;
  height: 5px;
  background: ${(props) => props.color};
  margin: 0 auto 50px auto;
`;

export const SkillListWrapper = styled.div`
    max-width: 1140px;
    margin: 0 auto 50px auto;
    display: grid;
    grid-template-columns 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;


    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const SkillListLabel = styled.p`
  text-align: center;
  font-size: 24px;
  margin-bottom: 35px;
  color: ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};
`;

export const SkillListCol = styled.div`
  display: flex;
  flex-direction: column;
  jusitfy-content: flex-start;
  align-items: center;
  padding: 10px;
`;
export const Skill = styled.div``;
export const SkillImg = styled.img`
  width: 200px;
  height: 200px;
`;
export const SkillLabel = styled.p`
  text-align: center;
  color: ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};
  font-size: 22.5px;
`;

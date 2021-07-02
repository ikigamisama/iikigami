import styled from "styled-components";
import { GoPerson, GoLocation } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { FaDownload } from "react-icons/fa";
import { SiAdobephotoshop, SiAdobexd } from "react-icons/si";

export const ProfileContainer = styled.div`
  color: ${({ theme }) => (theme === "light" ? "#fff" : "#000")};
  background: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
  @media screen and (max-width: 786px) {
    padding: 100px 0;
  }
`;

export const ProfileWrapper = styled.div`
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

export const ProfileRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(10px, auto);
  align-items: center;
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1 col1" "col2 col2";
  }
`;
export const ProfileColumn1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;
export const TextWrapper = styled.div`
  max-width: 555px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const HeadingText = styled.h1`
  margin-bottom: 30px;
  font-size: 36px;
  line-height: 1.1;
  font-weight: 500;
  color: ${({ theme }) => (theme === "light" ? "#fff" : "#000")};

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

export const ContentText = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ theme }) => (theme === "light" ? "#fff" : "#000")};

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ContentBorder = styled.div`
  background-color: ${(props) => props.color};
  width: 50px;
  height: 7.5px;
  margin-bottom: 25px;
`;

export const ContentTextTitle = styled.p`
  max-width: 440px;
  margin-bottom: 18px;
  font-size: 20px;
  line-height: 24px;
  color: ${({ theme }) => (theme === "light" ? "#fff" : "#000")};
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

export const ContactTextList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  margin-bottom: 25px;
`;

export const ContactList = styled.li`
  display: flex;
`;

export const ContactLogoName = styled(GoPerson)`
  margin: 5px 8px 5px 0;
  color: ${({ theme }) => (theme === "light" ? "#fff" : "#000")};
`;

export const ContactLogoAddress = styled(GoLocation)`
  margin: 5px 8px 5px 0;
  color: ${({ theme }) => (theme === "light" ? "#fff" : "#000")};
`;

export const ContactLogoPhone = styled(FiPhoneCall)`
  margin: 5px 8px 5px 0;
  color: ${({ theme }) => (theme === "light" ? "#fff" : "#000")};
`;

export const ContactLogoEmail = styled(MdEmail)`
  margin: 5px 8px 5px 0;
  color: ${({ theme }) => (theme === "light" ? "#fff" : "#000")};
`;
export const ContactContent = styled.p`
  color: ${({ theme }) => (theme === "light" ? "#fff" : "#000")};
`;

export const ButtonProfile = styled.a`
  position: relative;
  background-color: ${(props) => props.color};
  color: white;
  width: 100%;
  cursor: pointer;
  display: block;
  text-align: center;
  padding: 12.5px;
  border: 2px solid transparent;
  margin-bottom: 15px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: transparent;
    border: 2px solid ${(props) => props.color};
    color: ${(props) => props.color};
  }
`;

export const ButtonDownloadIcon = styled(FaDownload)`
  margin-right: 10px;
  &:hover {
    transition: all 0.2s ease-in-out;
  }
`;

export const ButtonXDIcon = styled(SiAdobexd)`
  margin-right: 10px;
  color: white;
  font-size: 15px;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${(props) => props.color};
  }
`;

export const ButtonPSIcon = styled(SiAdobephotoshop)`
  margin-right: 10px;
  color: white;
  font-size: 15px;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${(props) => props.color};
  }
`;

export const ButtonRows = styled.div`
  display: grid;
  grid-auto-columns: minmax(10px, auto);
  align-items: center;
  grid-template-areas: "buttoncol1 buttoncol2";

  @media screen and (max-width: 768px) {
    grid-template-areas: "buttoncol1 buttoncol2" "buttoncol2 buttoncol2";
  }
`;

export const ButtonCols1 = styled.div`
  margin-bottom: 15px;
  padding: 0 5px;
  grid-area: buttoncol1;
`;

export const ButtonCols2 = styled.div`
  margin-bottom: 15px;
  padding: 0 5px;
  grid-area: buttoncol2;
`;

export const ProfileColumn2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

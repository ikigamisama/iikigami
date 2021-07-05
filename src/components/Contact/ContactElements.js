import { Button, CircularProgress, TextField } from "@material-ui/core";
import styled from "styled-components";

export const ContactContainer = styled.div`
  color: ${({ theme }) => (theme === "black" ? "#000" : "#fff")};
  background: ${({ theme }) => (theme === "dark" ? "#000" : "#fff")};
  @media screen and (max-width: 786px) {
    padding: 100px 0;
  }
`;

export const ContactWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1140px;
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
  background: ${(props) => props.color};
  margin: 0 auto 50px auto;
`;

export const ContactFromWrapper = styled.div`
  width: 550px;
  margin: 0 auto 50px auto;
  @media screen and (max-width: 768px) {
    width: 400px;
  }
`;

export const ContactForm = styled.form``;
export const ContactTextField = styled(TextField)`
  margin-bottom: 18px !important;
  font-family: "Poppins", serif !important;
  > .MuiFormLabel-root {
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")} !important;
  }
  > .MuiInputBase-root {
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")} !important;
  }
  > .MuiInput-underline::before {
    border-bottom: 1px solid
      ${({ theme }) => (theme === "light" ? "#000" : "#fff")} !important;
  }
  > .MuiInput-underline::after {
    border: 1px solid ${(props) => props.colorform} !important;
  }
  > .MuiFormLabel-root.Mui-focused {
    color: ${(props) => props.colorform} !important;
  }
`;

export const ContactSubmitButton = styled(Button)`
  background: ${(props) => props.colorbutton} !important;
  color: white !important;
  font-family: "Poppins", serif !important;
`;

export const ContactDetailList = styled.div`
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
export const ContactDetailCol = styled.div`
  display: flex;
  flex-direction: column;
  jusitfy-content: flex-start;
  align-items: center;
  padding: 10px;
`;

export const ContactDetailIcons = styled.div`
  margin-bottom: 10px;
  color: ${(props) => props.color};
  font-size: 3rem;
`;

export const ContactDetailTitle = styled.h5`
  text-align: center;
  font-size: 24px;
  color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
  margin-bottom: 15px;
`;

export const ContactDetailContent = styled.p`
  text-align: center;
  font-size: 1rem;
  color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
`;

export const ContactResponseEmail = styled.div`
  width: 100%;
  border: 2px solid
    ${({ success }) => (success === true ? "#c3e6cb" : "#f8d7da")};
  background-color: ${({ success }) =>
    success === true ? "#d4edda" : "#f5c6cb"};
  color: ${({ success }) => (success === true ? "#155724" : "#721c24")};
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 1rem;
  margin-bottom: 25px;
  > svg {
    margin-right: 10px;
  }
`;

export const ContactLoadingProgress = styled(CircularProgress)`
  color: white !important;
  width: 35px !important;
  height: 35px !important;
`;

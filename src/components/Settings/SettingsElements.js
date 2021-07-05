import { FiSettings } from "react-icons/fi";
import styled from "styled-components";
import { FormControl, MenuItem } from "@material-ui/core";

export const SettingWrapper = styled.div`
  position: fixed;
  top: 120px;
  right: 0;
  z-index: 1001;
  display: flex;
  transition: all 0.5s ease-in-out;

  @media screen and (max-width: 768px) {
    top: 50px;
  }
  @media screen and (max-width: 480px) {
    top: 0px;
  }
`;

export const SettingButton = styled.div`
  width: 50px;
  height: 50px;
  cursor: pointer;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 0 4px 5px 0 rgb(0 0 0 / 14%),
    0 1px 10px 0 rgb(0 0 0 / 12%), 0 2px 4px -1px rgb(0 0 0 / 30%);
  box-shadow: 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%),
    0 2px 4px -1px rgb(0 0 0 / 30%);

  @media screen and (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
  @media screen and (max-width: 480px) {
    width: 35px;
    height: 35px;
  }
`;

export const SettingButtonLogo = styled(FiSettings)`
  color: black;
  font-size: 1.2rem;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const SettingsListWrapper = styled.div`
  width: 250px;
  padding: 15px;
  background-color: white;
  z-index: 990;
  -webkit-box-shadow: 0 4px 5px 0 rgb(0 0 0 / 14%),
    0 1px 10px 0 rgb(0 0 0 / 12%), 0 2px 4px -1px rgb(0 0 0 / 30%);
  box-shadow: 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%),
    0 2px 4px -1px rgb(0 0 0 / 30%);
`;

export const SettingFormControl = styled(FormControl)`
  margin-bottom: 22px !important;
`;

export const ColorLabelMenuList = styled(MenuItem)`
  font-family: "Poppins", serif !important;
  font-weight: 700 !important;
  background-color: #e2e2e2 !important;
  color: black !important;
  width: 100% !important;
  height: 45px !important;
`;

export const ColorList = styled(MenuItem)`
  width: 100% !important;
  height: 45px !important;
`;

export const ColorExample = styled.div`
  width: 25px;
  height: 25px;
  background: ${(props) => props.color};
  margin-right: 18px;
`;

export const ColorLabel = styled.div`
  font-family: "Poppins", serif !important;
  font-weight: 300 !important;
  color: #444444 !important;
`;

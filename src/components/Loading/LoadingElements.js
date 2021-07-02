import styled from "styled-components";
import { CircularProgress } from "@material-ui/core";

export const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1500;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: hidden !important;
`;

export const LoadingLogo = styled(CircularProgress)`
  width: 75px !important;
  height: 75px !important;
  color: #2196f3 !important;
`;

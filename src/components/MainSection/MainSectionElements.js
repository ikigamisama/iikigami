import styled, { keyframes } from "styled-components";
import { Link } from "react-scroll";

export const MainSectionContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 885px;
  padding: 0 25px;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(100deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)),
      linear-gradient(100deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6));

    z-index: 2;
  }
`;

export const MainSectionVideoBG = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBG = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const MainSectionContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SubTitleText = styled.h3`
  font-weight: 700;
  color: ${(props) => props.color};
  font-size: 32px;
  text-align: center;
  margin-bottom: 0;

  @media screen and (max-width: 768px) {
    font-size: 26px;
  }

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const MainText = styled.h1`
  font-weight: 700;
  color: #fff;
  margin: 0 !important;
  font-size: 75px;
  text-align: center;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 50px;
  }

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;

export const SubText = styled.p`
  margin-top: 5px;
  color: #fff;
  font-size: 27px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const MainSectionButtonWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const MainSectionButton = styled(Link)`
  padding: 19px 35px;
  color: white;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  border: 1px solid;
  border-color: white;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${(props) => props.color};
    border-color: ${(props) => props.color};
  }
`;

const typingAnimate = keyframes`
  from { width: 0 }
    to { width: 100% }
`;

const blinkTypeAnimate = (color) => keyframes`
  from, to { border-color: transparent }
  50% { border-color: ${color}; }
  100% { border: 0;border-color: transparent; }
`;

export const KeyType = styled.p`
  overflow: hidden;
  white-space: nowrap;
  margin: 0 auto;
  border-right: 0.15em solid ${(props) => props.color};
  animation: ${typingAnimate} 2.5s steps(30, end),
    ${(props) => blinkTypeAnimate(props.color)} 1s step-end infinite;
`;

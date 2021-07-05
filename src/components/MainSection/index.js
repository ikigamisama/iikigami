import React, { useContext } from "react";
import { ConfigContext } from "../../utils/ConfigContext";
import video from "../../assets/video/bg.mp4";

import {
  MainSectionContainer,
  MainSectionVideoBG,
  VideoBG,
  MainSectionContent,
  SubTitleText,
  MainText,
  SubText,
  MainSectionButtonWrapper,
  MainSectionButton,
  KeyType,
} from "./MainSectionElements";

const MainSection = () => {
  const { config, onFormatColorText } = useContext(ConfigContext);
  return (
    <MainSectionContainer>
      <MainSectionVideoBG>
        <VideoBG autoPlay loop muted src={video} type="video/mp4" />
      </MainSectionVideoBG>
      <MainSectionContent>
        <SubTitleText color={onFormatColorText(config.color)}>
          HELLO, WORLD.
        </SubTitleText>
        <MainText>
          <KeyType color={onFormatColorText(config.color)}>
            I'm FRANZ MONZALES
          </KeyType>
        </MainText>
        <SubText>FULL STACK DEVELOPER | UI / UX DESIGNER</SubText>
        <MainSectionButtonWrapper>
          <MainSectionButton to="profile" color={config.color}>
            KNOW ME BETTER
          </MainSectionButton>
        </MainSectionButtonWrapper>
      </MainSectionContent>
    </MainSectionContainer>
  );
};

export default MainSection;

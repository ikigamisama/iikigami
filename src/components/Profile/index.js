import React, { useContext } from "react";
import { ConfigContext } from "../../utils/ConfigContext";
import {
  ProfileContainer,
  ProfileWrapper,
  SectionTitle,
  ProfileRow,
  ProfileColumn1,
  TextWrapper,
  HeadingText,
  ContentText,
  ContentBorder,
  ContentTextTitle,
  ContactTextList,
  ContactList,
  ContactLogoName,
  ContactLogoAddress,
  ContactLogoPhone,
  ContactLogoEmail,
  ContactContent,
  ButtonProfile,
  ButtonDownloadIcon,
  ButtonRows,
  ButtonCols1,
  ButtonCols2,
  ButtonXDIcon,
  ButtonPSIcon,
  ProfileColumn2,
  ImgWrap,
  Img,
} from "./ProfileElements";

import profileImg from "../../assets/img/profile.png";

const Profile = () => {
  const { config } = useContext(ConfigContext);
  return (
    <ProfileContainer theme={config.theme} id="profile">
      <ProfileWrapper>
        <SectionTitle color={config.color}>PROFILE</SectionTitle>
        <ProfileRow>
          <ProfileColumn1>
            <TextWrapper>
              <HeadingText theme={config.theme}>
                HELLO, MY NAME IS FRANZ!
              </HeadingText>
              <ContentText theme={config.theme}>
                Franz Monzales, 24 years of age, born & grew up in Davao City,
                Philippines. Highly passionate creative developer, with capable
                of experience working in tech industry
              </ContentText>
              <ContentBorder color={config.color} />
              <ContentTextTitle theme={config.theme}>
                CONTACT DETAILS
              </ContentTextTitle>
              <ContactTextList>
                <ContactList>
                  <ContactLogoName theme={config.theme}></ContactLogoName>
                  <ContactContent theme={config.theme}>
                    Franz Monzales
                  </ContactContent>
                </ContactList>
                <ContactList>
                  <ContactLogoAddress theme={config.theme}></ContactLogoAddress>
                  <ContactContent theme={config.theme}>
                    538 Carntion St. Buhangin Davao City
                  </ContactContent>
                </ContactList>
                <ContactList>
                  <ContactLogoPhone theme={config.theme}></ContactLogoPhone>
                  <ContactContent theme={config.theme}>
                    +639454108464
                  </ContactContent>
                </ContactList>
                <ContactList>
                  <ContactLogoEmail theme={config.theme}></ContactLogoEmail>
                  <ContactContent theme={config.theme}>
                    ikigamidevs.15@gmail.com
                  </ContactContent>
                </ContactList>
              </ContactTextList>

              <ButtonProfile
                color={config.color}
                onClick={() =>
                  window.open(
                    "https://github.com/ikigamisama/iikigami/raw/new_website/FranzMonzalesResume.pdf",
                    "_blank",
                  )
                }
              >
                <ButtonDownloadIcon></ButtonDownloadIcon>
                DOWNLOAD MY RESUME
              </ButtonProfile>

              <ButtonRows>
                <ButtonCols1>
                  <ButtonProfile
                    color={"#844cb0"}
                    onClick={() =>
                      window.open(
                        "https://github.com/ikigamisama/iikigami/raw/new_website/Ikigami%20Resume.xd",
                        "_blank",
                      )
                    }
                  >
                    <ButtonXDIcon></ButtonXDIcon>
                    DOWNLOAD XD
                  </ButtonProfile>
                </ButtonCols1>
                <ButtonCols2>
                  <ButtonProfile
                    color={"#8BC3FC"}
                    onClick={() =>
                      window.open(
                        "/ikigamisama/iikigami/raw/new_website/Ikigami%20Resume-xd.psd",
                        "_blank",
                      )
                    }
                  >
                    <ButtonPSIcon></ButtonPSIcon>
                    DOWNLOAD PS
                  </ButtonProfile>
                </ButtonCols2>
              </ButtonRows>
            </TextWrapper>
          </ProfileColumn1>
          <ProfileColumn2>
            <ImgWrap>
              <Img src={profileImg} alt="profile"></Img>
            </ImgWrap>
          </ProfileColumn2>
        </ProfileRow>
      </ProfileWrapper>
    </ProfileContainer>
  );
};

export default Profile;

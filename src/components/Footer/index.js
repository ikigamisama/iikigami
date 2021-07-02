import React, { useContext } from "react";
import { ConfigContext } from "../../utils/ConfigContext";
import { footerLogo } from "./config";
import {
  FooterWrapper,
  FooterContainer,
  FooterCopyrightContent,
  FooterCopyrightText,
  FooterListLogo,
  FooterListUL,
  FooterListLI,
  FooterLink,
} from "./FooterElement";

const Footer = () => {
  const { config } = useContext(ConfigContext);
  return (
    <FooterWrapper theme={config.theme}>
      <FooterContainer>
        <FooterCopyrightContent>
          <FooterCopyrightText theme={config.theme}>
            © Copyright ikigamidevs 2021.
          </FooterCopyrightText>
        </FooterCopyrightContent>
        <FooterListLogo>
          <FooterListUL>
            {footerLogo.map((list, i) => (
              <FooterListLI key={i}>
                <FooterLink
                  theme={config.theme}
                  href={list.link}
                  target="_blank"
                >
                  <list.icon />
                </FooterLink>
              </FooterListLI>
            ))}
          </FooterListUL>
        </FooterListLogo>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;

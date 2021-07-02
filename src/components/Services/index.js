import React, { useContext } from "react";
import { ConfigContext } from "../../utils/ConfigContext";
import {
  ServicesContainer,
  ServicesWrapper,
  SectionSubTitle,
  SectionTitle,
  ServiceListWrapper,
  ServiceCol,
  ServiceLogo,
  ServiceTitle,
  ServiceDescription,
} from "./ServicesElements";

import { serviceList } from "./config";

const Services = () => {
  const { config } = useContext(ConfigContext);
  return (
    <ServicesContainer theme={config.theme}>
      <ServicesWrapper>
        <SectionTitle color={config.color}>SERVICES</SectionTitle>
        <SectionSubTitle theme={config.theme}>
          What can i do for you ?
        </SectionSubTitle>
        <ServiceListWrapper>
          {serviceList.map((service, i) => (
            <ServiceCol key={i}>
              <ServiceLogo color={config.color}>
                <service.icons />
              </ServiceLogo>
              <ServiceTitle theme={config.theme}>{service.title}</ServiceTitle>
              <ServiceDescription theme={config.theme}>
                {service.description}
              </ServiceDescription>
            </ServiceCol>
          ))}
        </ServiceListWrapper>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;

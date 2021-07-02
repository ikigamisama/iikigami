import React, { lazy } from "react";

import ConfigContextProvider from "../../utils/ConfigContext";

const MainSection = lazy(() => import("../../components/MainSection")),
  Profile = lazy(() => import("../../components/Profile")),
  Skills = lazy(() => import("../../components/Skills")),
  Resume = lazy(() => import("../../components/Resume")),
  Services = lazy(() => import("../../components/Services")),
  Contact = lazy(() => import("../../components/Contact")),
  Footer = lazy(() => import("../../components/Footer"));

const Home = () => {
  return (
    <ConfigContextProvider>
      <MainSection />
      <Profile />
      <Skills />
      <Resume />
      <Services />
      <Contact />
      <Footer />
    </ConfigContextProvider>
  );
};

export default Home;

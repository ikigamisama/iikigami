import React, { useEffect } from "react";
import { LoadingContainer, LoadingLogo } from "./LoadingElements";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const Loading = () => {
  useEffect(() => {
    NProgress.start();
    return () => {
      NProgress.done();
    };
  }, []);
  return (
    <LoadingContainer>
      <LoadingLogo />
    </LoadingContainer>
  );
};

export default Loading;

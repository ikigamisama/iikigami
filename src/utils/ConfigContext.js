import React, { createContext, useState } from "react";

export const ConfigContext = createContext();

const configState = { theme: "light", color: "#2196F3" };

const ConfigContextProvider = (props) => {
  const [config, setConfig] = useState(configState);

  const changeConfig = (newTheme, newColor) => {
    setConfig({ theme: newTheme, color: newColor });
  };

  return (
    <ConfigContext.Provider value={{ config, changeConfig }}>
      {props.children}
    </ConfigContext.Provider>
  );
};

export default ConfigContextProvider;

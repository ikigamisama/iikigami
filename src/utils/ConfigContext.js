import React, { createContext, useState } from "react";

export const ConfigContext = createContext();

const configState = { theme: "light", color: "#2196f3" };

const ConfigContextProvider = (props) => {
  const [config, setConfig] = useState(configState);

  const changeConfig = (newTheme, newColor) => {
    setConfig({ theme: newTheme, color: newColor });
  };
  const onFormatColorText = (color) => {
    let newColorFormatTrial = [];

    if (color.includes("linear-gradient")) {
      newColorFormatTrial = color
        .replace("linear-gradient(45deg,", "")
        .replace(")", "")
        .split(",");

      return newColorFormatTrial[Math.round(Math.random() * 1)];
    } else {
      return color;
    }
  };
  return (
    <ConfigContext.Provider value={{ config, changeConfig, onFormatColorText }}>
      {props.children}
    </ConfigContext.Provider>
  );
};

export default ConfigContextProvider;

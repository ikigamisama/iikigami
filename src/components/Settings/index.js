import React, { useState, useContext } from "react";
import { ConfigContext } from "../../utils/ConfigContext";
import {
  SettingWrapper,
  SettingButton,
  SettingButtonLogo,
  SettingsListWrapper,
  SettingFormControl,
  ColorLabelMenuList,
  ColorList,
  ColorExample,
  ColorLabel,
} from "./SettingsElements";

import { Select, MenuItem, InputLabel } from "@material-ui/core";
import { themeList, colorList } from "./config";

import "./index.css";

const Settings = () => {
  const { config, changeConfig } = useContext(ConfigContext);
  const [isClickSetting, setClickedSettings] = useState(false);

  const outputColorSettings = (colorList) => {
    let data = [];

    data.push({ type: colorList.type });
    colorList.colors.forEach((colorData, q) => {
      data.push({
        name: colorData.name,
        value:
          colorList.type === "gradient"
            ? "linear-gradient(45deg," + colorData.color + ")"
            : colorData.color,
      });
    });

    return data;
  };

  const onChangeThemeColor = (theme, color) => {
    changeConfig(theme, color);
  };

  return (
    <SettingWrapper
      className={
        isClickSetting === false ? "setting-wrap-close" : "setting-wrap-open"
      }
    >
      <SettingButton
        id="setting_button"
        onClick={() => {
          setClickedSettings(!isClickSetting);
        }}
      >
        <SettingButtonLogo />
      </SettingButton>

      <SettingsListWrapper id="setting_list_wrap">
        <SettingFormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="config_theme">Theme: </InputLabel>
          <Select
            fullWidth
            inputProps={{
              id: "config_theme",
            }}
            label="Theme"
            value={config.theme}
            onChange={(e) => onChangeThemeColor(e.target.value, config.color)}
          >
            {themeList.map((item, i) => (
              <MenuItem key={i} value={item.value}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </SettingFormControl>
        <SettingFormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="config_color">Color: </InputLabel>
          <Select
            fullWidth
            inputProps={{
              id: "config_color",
            }}
            label="Color:"
            value={config.color}
            onChange={(e) => onChangeThemeColor(config.theme, e.target.value)}
          >
            {colorList.map((_, i) => {
              return outputColorSettings(colorList[i]).map((colorData, q) => {
                if (colorData.type !== undefined) {
                  return (
                    <ColorLabelMenuList disabled>
                      {colorData.type.charAt(0).toUpperCase() +
                        colorData.type.slice(1)}
                    </ColorLabelMenuList>
                  );
                } else {
                  return (
                    <ColorList key={q} value={colorData.value}>
                      <ColorExample color={colorData.value} />
                      <ColorLabel>
                        {colorData.name.charAt(0).toUpperCase() +
                          colorData.name.slice(1)}
                      </ColorLabel>
                    </ColorList>
                  );
                }
              });
            })}
          </Select>
        </SettingFormControl>
      </SettingsListWrapper>
    </SettingWrapper>
  );
};

export default Settings;

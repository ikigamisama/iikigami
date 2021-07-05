import React, { useContext } from "react";
import { ConfigContext } from "../../utils/ConfigContext";
import {
  SkillsContainer,
  SkillWrapper,
  SectionTitle,
  SectionSubTitle,
  SectionBorder,
  SkillListWrapper,
  SkillListLabel,
  SkillListCol,
  Skill,
  SkillImg,
  SkillLabel,
} from "./SkillsElement";

import { skill } from "./config";

const Skills = () => {
  const { config, onFormatColorText } = useContext(ConfigContext);

  return (
    <SkillsContainer theme={config.theme}>
      <SkillWrapper>
        <SectionTitle color={onFormatColorText(config.color)}>
          MY SKILLS & EXPERTIES
        </SectionTitle>
        <SectionSubTitle theme={config.theme}>
          I cherish what I do. I take awesome delight in what I do. And
          sometimes I can't do something in the middle or even three-fourths,
          nine-tenths. I strive to exceed my own limitations.
        </SectionSubTitle>
        <SectionBorder color={config.color} />

        {skill.map((item, i) => (
          <React.Fragment key={i}>
            <SkillListLabel theme={config.theme}>{item.type}</SkillListLabel>
            <SkillListWrapper>
              {item.features.map((skill_list, skill_key) => (
                <SkillListCol key={skill_key}>
                  <Skill>
                    <SkillImg
                      src={
                        config.theme === "light"
                          ? skill_list.img_dark
                          : skill_list.img_light
                      }
                      alt={skill_list.title}
                    />
                    <SkillLabel theme={config.theme}>
                      {skill_list.title}
                    </SkillLabel>
                  </Skill>
                </SkillListCol>
              ))}
            </SkillListWrapper>
          </React.Fragment>
        ))}
      </SkillWrapper>
    </SkillsContainer>
  );
};

export default Skills;

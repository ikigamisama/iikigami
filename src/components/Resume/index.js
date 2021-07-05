import React, { useContext, useState } from "react";
import { ConfigContext } from "../../utils/ConfigContext";
import { resumeList } from "./config";
import {
  ResumeContainer,
  ResumeWrapper,
  SectionTitle,
  SectionSubTitle,
  SectionBorder,
  ResumeTitleWrapper,
  ResumeTitleText,
  ResumeListWrapper,
  ResumeLabel,
  ResumeYearWrapper,
  ResumeYearText,
  ResumeButton,
  ResumeButtonLogoPlus,
  ResumeButtonLogoMinus,
  ResumeContent,
  ResumeContentWrapper,
  ResumeContentMain,
  ResumeContentSub,
} from "./ResumeElements";

const Resume = () => {
  const { config, onFormatColorText } = useContext(ConfigContext);
  const [resumeExpand, setResumeExpand] = useState(resumeList);

  const resumeExpandClick = (index, toExpand) => {
    let newResumeData = [...resumeExpand];
    newResumeData[index].isExpand = !toExpand;
    setResumeExpand(newResumeData);
  };

  return (
    <ResumeContainer theme={config.theme}>
      <ResumeWrapper>
        <SectionTitle color={onFormatColorText(config.color)}>
          RESUME
        </SectionTitle>
        <SectionSubTitle theme={config.theme}>
          If you call failures experiments, you can put them in your resume and
          claim them as achievements.
        </SectionSubTitle>
        <SectionBorder color={config.color} />
        <ResumeTitleWrapper theme={config.theme}>
          <ResumeTitleText>WORK EXPERIENCE</ResumeTitleText>
          <ResumeTitleText>2016 - 2020</ResumeTitleText>
        </ResumeTitleWrapper>

        {resumeExpand.map((resume, i) => (
          <ResumeListWrapper key={i}>
            <ResumeLabel>
              <ResumeYearWrapper color={config.color}>
                <ResumeYearText>{resume.year}</ResumeYearText>
              </ResumeYearWrapper>
              <ResumeButton
                type="button"
                theme={config.theme}
                onClick={() => resumeExpandClick(i, resume.isExpand)}
              >
                {resume.isExpand === true ? (
                  <ResumeButtonLogoPlus theme={config.theme} />
                ) : (
                  <ResumeButtonLogoMinus theme={config.theme} />
                )}
              </ResumeButton>
            </ResumeLabel>
            <ResumeContent>
              <ResumeContentWrapper theme={config.theme}>
                <ResumeContentMain theme={config.theme}>
                  {resume.position + " - " + resume.company}
                </ResumeContentMain>
                {resume.isExpand === true ? null : (
                  <ResumeContentSub theme={config.theme}>
                    {resume.responsibilities}
                  </ResumeContentSub>
                )}
              </ResumeContentWrapper>
            </ResumeContent>
          </ResumeListWrapper>
        ))}
      </ResumeWrapper>
    </ResumeContainer>
  );
};

export default Resume;

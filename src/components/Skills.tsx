import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Presentation } from "./Introduction";

// Media
import * as imgList from "../assets/imgList";
import { FC } from "react";

type Ref = React.RefObject<HTMLDivElement>;

interface ISkillsProps {
  skillsRef: Ref;
}

export const Skills: FC<ISkillsProps> = ({ skillsRef }) => {
  const { t } = useTranslation();

  return (
    <SkillsStyle ref={skillsRef} id="skills">
      <SkillsPresentation>
        <span data-aos="fade-left" data-aos-duration="500">
          -{t("skills")}
        </span>
        <header data-aos="fade-left" data-aos-duration="700">
          <span>{t("What is the secret")}</span>
          <span>{t("mastering")}</span>
          <span>{t("development")}</span>
        </header>
        <div data-aos="fade-left" data-aos-duration="900">
          <p>{t("Practicing")}</p>
          <p>{t("the best way to")}</p>
        </div>
        <footer data-aos="fade-left" data-aos-duration="1200">
          <h2>+9</h2>
          <span>{t("Technologies studied")}</span>
        </footer>
      </SkillsPresentation>
      <SkillsList>
        <img src={imgList.frontBasicSkill} data-aos="fade-left" data-aos-duration="500" alt="Front End Basic Skills" />
        <img src={imgList.sassSkill} data-aos="fade-left" data-aos-duration="700" alt="Sass logo" />
        <img src={imgList.typescriptSkill} data-aos="fade-left" data-aos-duration="900" alt="Typescript logo" />
        <img src={imgList.reactSkill} data-aos="fade-left" data-aos-duration="1100" alt="React Logo" />
        <img src={imgList.styledSkill} data-aos="fade-left" data-aos-duration="1300" alt="Styled-Components logo" />
        <img src={imgList.reduxSkill} data-aos="fade-left" data-aos-duration="1500" alt="Redux logo" />
        <img src={imgList.nodeSkill} data-aos="fade-left" data-aos-duration="1700" alt="Node and Express logo" />
        <img src={imgList.mongoSkill} data-aos="fade-left" data-aos-duration="1900" alt="MongoDB logo" />
        <img src={imgList.figmaSkill} data-aos="fade-left" data-aos-duration="2100" alt="Figma lolgo" />
      </SkillsList>
    </SkillsStyle>
  );
};

const SkillsStyle = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--black);
  gap: 10px;
  min-height: 750px;
  padding: 50px 0;

  /* Change Skills segment to column */
  @media (max-width: 1750px) {
    flex-direction: column;
    min-height: initial;
    scroll-snap-align: start;
    gap: 100px;
  }

  @media (max-width: 700px) {
    align-items: center;
  }
`;

const SkillsPresentation = styled(Presentation)`
  margin-top: 0;

  header {
    span:nth-of-type(2) {
      color: var(--green);
    }
  }

  > div {
    p {
      display: inline;

      &:first-of-type {
        color: var(--green);
      }
    }
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 791px;
  gap: 40px;
  margin-right: 50px;

  img {
    width: 227px;
  }

  /* Object size and position adjustments */
  @media (max-width: 1750px) {
    margin-left: 312px;
  }
  @media (max-width: 1340px) {
    margin-left: 90px;
    width: 90%;
  }

  @media (max-width: 700px) {
    margin-left: 20px;

    img {
      width: 150px;
    }
  }
`;

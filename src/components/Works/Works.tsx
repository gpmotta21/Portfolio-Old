import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { ProjectsUl } from "./ProjectsList";
import * as imgList from "../../assets/imgList";

type Ref = React.RefObject<HTMLDivElement>;

interface IWorksProps {
  worksRef: Ref;
}

export const Works: FC<IWorksProps> = ({ worksRef }) => {
  const { t } = useTranslation(),
    [filter, setFilter] = useState<string>("visual");

  return (
    <WorksStyle ref={worksRef} id="works">
      <span className="dash" data-aos="fade-left" data-aos-duration="500">
        -{t("works")}
      </span>
      <header data-aos="fade-left" data-aos-duration="900">
        <h1>{t("Sort by:")}</h1>
        <div>
          <button onClick={() => setFilter("visual")}>Visual</button>
          <button onClick={() => setFilter("complexity")}>{t("Complexity")}</button>
        </div>
      </header>
      <ProjectsUl filter={filter} />
      <img src={imgList.click} alt="Mouse click svg" />
    </WorksStyle>
  );
};

const WorksStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
  color: var(--white);
  font-family: "Zen Kaku Gothic Antique", sans-serif;
  scroll-snap-align: start;

  .dash {
    opacity: 0.5;
  }

  header {
    h1 {
      font-family: "Fira Code", monospace;
      font-size: 64px;
    }

    button {
      min-width: 150px;
      margin-top: 20px;
      margin-right: 30px;
      padding: 10px;
      font-size: 24px;
      background-color: var(--gray);
      border: 2px solid var(--green);
      border-radius: 0px 10px 10px 0px;
      text-align: center;
      transition: all 0.5s;

      &:hover {
        background-color: var(--green);
        color: var(--black);
      }
    }
  }

  > img {
    position: absolute;
    transform: translate(-100%, -50%);
    left: 95%;
    top: 130px;
    margin-left: 0;
  }

  @media (max-width: 700px) {
    > img {
      display: none;
    }
  }
`;

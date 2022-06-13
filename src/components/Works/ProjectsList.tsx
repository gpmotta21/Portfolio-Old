import { FC, useEffect, useState } from "react";
import styled from "styled-components";

// Media

import * as imgList from "../../assets/imgList";
import { ProjectsLi } from "./ProjectsLi";

interface IProps {
  filter: string;
}

export interface IProject {
  name: string;
  category?: string;
  dash: string;
  img: string;
  gif: string;
  website: string;
  code: string;
}

const projects = [
  {
    name: "Limitless",
    category: "visual",
    dash: "- Landing Page",
    img: imgList.limitless,
    gif: imgList.limitlessGif,
    website: "https://gpmotta21.github.io/Limitless/",
    code: "https://github.com/gpmotta21/Limitless",
  },
  {
    name: "Spacejet",
    category: "complexity visual",
    dash: "- Landing Page / API",
    img: imgList.spacejet,
    gif: imgList.spacejetGif,
    website: "https://spacejet.netlify.app/",
    code: "https://github.com/gpmotta21/spacejet",
  },
  {
    name: "Bella Italia",
    category: "visual",
    dash: "- Landing Page",
    img: imgList.bellaItalia,
    gif: imgList.bellaItaliaGif,
    website: "https://gpmotta21.github.io/Bella-Italia/",
    code: "https://github.com/gpmotta21/Bella-Italia",
  },
  {
    name: "Unote",
    category: "complexity",
    dash: "- Full-Stack",
    img: imgList.unote,
    gif: imgList.unoteGif,
    website: "https://unote.netlify.app/",
    code: "https://github.com/gpmotta21/Unote/tree/main/client/src",
  },
  {
    name: "Moovei",
    category: "complexity",
    dash: "- API",
    img: imgList.moovei,
    gif: imgList.mooveiGif,
    website: "https://gpmotta21.github.io/Moovei-React-Project/",
    code: "https://github.com/gpmotta21/Moovei-React-Project",
  },
];

export const ProjectsUl: FC<IProps> = ({ filter }) => {
  const [filtered, setFiltered] = useState<IProject[]>([]),
    [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const filteredProjects = projects.filter((i) => i.category.includes(filter));
    setLoading(true);

    setTimeout(() => {
      setFiltered(filteredProjects);
      setLoading(false);
    }, 1500);
  }, [filter]);

  const showProjects = () => {
    if (loading) {
      return <img src={imgList.logo} className="floating" />;
    } else {
      return filtered.map((i) => (
        <ProjectsLi name={i.name} gif={i.gif} img={i.img} dash={i.dash} code={i.code} website={i.website} />
      ));
    }
  };

  return <ProjectsUlStyle>{showProjects()}</ProjectsUlStyle>;
};

const ProjectsUlStyle = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;
  max-width: 75%;
  padding-right: 20px;
  min-height: 300px;
`;

import { FC } from "react";
import styled from "styled-components";

import * as FAicons from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import { IProject } from "./ProjectsList";

interface ILiProps {
  gif: string;
}
export const ProjectsLi: FC<IProject> = ({ name, gif, img, dash, website, code }) => {
  return (
    <LiStyle gif={gif} data-aos="fade-left" data-aos-duration="700">
      <img src={img} alt="Project image" />
      <div>
        <span className="dash">{dash}</span>
        <header>
          <h1>{name}</h1>
          <span>
            <a target="_blank" href={website}>
              <BsGlobe2 />
            </a>
            <a target="_blank" href={code}>
              <FAicons.FaCode />
            </a>
          </span>
        </header>
      </div>
    </LiStyle>
  );
};

const LiStyle = styled.li<ILiProps>`
  transition: all 0.5s;
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 335px;
  background-color: var(--gray);
  width: 1200px;

  img {
    width: 600px;
    height: 100%;
  }

  /* Div containing name of the project
  and anchors */
  > div {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    width: 100%;
    padding: 0 15px;
    transition: all 0.5s ease-in-out;

    header {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      gap: 40px;

      span {
        display: flex;
      }

      svg {
        width: 60px;
        height: 60px;

        &:first-of-type {
          margin-right: 25px;
        }
      }
    }

    /* Green block that will slide right when hover over the List */
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background-color: var(--green);
      z-index: -1;
      transition: all 0.5s ease-in-out;
    }
  }

  /* When hovering the project, the image will be replaced with a gif */
  /* and the green block will slide to the right */
  &:hover {
    transform: translateX(30px);

    img {
      content: url(${({ gif }) => gif});
    }

    > div {
      color: var(--black);
      &::before {
        width: 100%;
      }
    }
  }

  @media (max-width: 1550px) {
    width: 900px;
    height: 235px;

    img {
      width: 400px;
      height: 100%;
    }

    > div {
      header {
        h1 {
          font-size: 44px;
        }
      }
    }
  }
  @media (max-width: 1025px) {
    flex-direction: column;
    height: 400px;
    width: auto;

    > div {
      justify-content: space-evenly;
      header {
        h1 {
          font-size: 30px;
          width: 150px;
        }

        svg {
          width: 45px;
          height: 45px;
        }
      }
    }
  }
  @media (max-width: 700px) {
    height: auto;

    &:hover {
      transform: none;
    }

    img {
      width: 100%;
      height: unset;
    }

    > div {
      height: 150px;
    }
  }
  @media (max-width: 400px) {
    > div {
      header {
        h1 {
          font-size: 20px;
          width: 70px;
        }
      }
    }
  }
`;

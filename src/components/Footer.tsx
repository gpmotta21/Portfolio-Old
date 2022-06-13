import { FC } from "react";
import styled from "styled-components";

import * as FAicons from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import * as imgList from "../assets/imgList";
import i18next from "i18next";

export const Footer: FC = () => {
  const currLanguage = i18next.languages[0];

  return (
    <FooterStyle>
      <img src={imgList.darkLogo} />
      <div>
        <a target="_blank" href="https://api.whatsapp.com/send/?phone=5521974264416&text&app_absent=0">
          <FAicons.FaWhatsapp />
        </a>
        <a href="mailto:gpmotta21@gmail.com" target="_blank">
          <MdMarkEmailRead />
        </a>
        <a href="https://www.linkedin.com/in/gpmotta21/">
          <FAicons.FaLinkedin />
        </a>
        <a href="https://github.com/gpmotta21" target="_blank">
          <FAicons.FaGithub />
        </a>
        <a
          target="_blank"
          download
          href={currLanguage == "pt-BR" ? "/Gabriel Pacheco Motta - Currículo.pdf" : "Gabriel Motta - CV.pdf"}
        >
          <img src={imgList.cv} alt="CV logo" />
        </a>
      </div>
    </FooterStyle>
  );
};

const FooterStyle = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 110px;
  background-color: var(--green);
  color: var(--black);
  padding: 30px 150px;

  div {
    display: flex;
    gap: 40px;

    svg,
    img {
      width: 54px;
      height: 55px;
    }
  }

  @media (max-width: 937px) {
    padding: 30px;

    > img {
      display: none;
    }

    div {
      display: flex;
      gap: 20px;

      svg,
      img {
        width: 34px;
        height: 35px;
      }
    }
  }
`;

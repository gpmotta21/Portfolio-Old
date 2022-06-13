import { FC } from "react";
import styled from "styled-components";
import { useTypewriter } from "react-simple-typewriter";
import { useTranslation } from "react-i18next";

// Media
import * as imgList from "../assets/imgList";
import * as FAicons from "react-icons/fa";
import i18next from "i18next";

type Ref = React.RefObject<HTMLDivElement>;

interface IIntroductionPros {
  introductionRef: Ref;
}

export const Introduction: FC<IIntroductionPros> = ({ introductionRef }) => {
  const { t } = useTranslation(),
    currLanguage = i18next.languages[0];

  const words: [] = t("typeWriter", { returnObjects: true }),
    { text } = useTypewriter({
      words,
      loop: 0,
    });

  return (
    <IntroductionStyle id="introduction" ref={introductionRef}>
      <Presentation>
        <span data-aos="fade-left" data-aos-duration="500">
          - {t("introduction")}
        </span>
        <header data-aos="fade-left" data-aos-duration="700">
          <span>{t("Hi, I'm")}</span>
          <span style={{ color: "var(--green)" }}> Gabriel</span>
        </header>
        <p data-aos="fade-left" data-aos-duration="900">
          {t("I'm a Front-End developer...")}
        </p>
        <footer data-aos="fade-left" data-aos-duration="1200">
          <h2>+13</h2>
          <span>{t("Completed projects")}</span>
        </footer>
      </Presentation>
      <GreenContainer data-aos="fade-left">
        <img src={imgList.me} alt="Picture of me" />
        <img className="dots" src={imgList.homepageDots} alt="Dots svg" />
        <span>{text}</span>
        <footer>
          <a href="https://github.com/gpmotta21" target="_blank">
            <FAicons.FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/gpmotta21/" target="_blank">
            <FAicons.FaLinkedinIn />
          </a>
          <a
            target="_blank"
            download
            href={currLanguage == "pt-BR" ? "/Gabriel Pacheco Motta - Currículo.pdf" : "Gabriel Motta - CV.pdf"}
          >
            <img src={imgList.cv} />
          </a>
        </footer>
      </GreenContainer>
    </IntroductionStyle>
  );
};

const IntroductionStyle = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 920px;
  overflow: hidden;
  background-color: var(--gray);

  /* Wave svg */
  &:after {
    content: "";
    position: absolute;
    transform: translateY(-100%);
    width: 1920px;
    height: 20%;
    left: 0;
    top: 100%;
    bottom: 0;
    background-image: url(${imgList.homepageBottomSvg});
    background-size: cover;
    background-repeat: no-repeat;
  }

  /* The Green Container now is on top */
  /* Objects size adjustments */
  @media (max-width: 1340px) {
    flex-direction: column-reverse;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 30px;
    min-height: 1000px;
    height: auto;
    padding-left: 0;

    /* Wave svg */
    &:after {
      width: 100%;
      background-size: contain;
      background-position: bottom;
    }
  }

  /* Objects size adjustments */
  @media (max-width: 890px) {
    min-height: 850px;
  }

  @media (max-width: 690px) {
    align-items: center;
  }
`;

export const Presentation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 520px;
  height: 465px;
  margin-top: 90px;
  margin-left: 312px;
  font-family: "Zen Kaku Gothic Antique", sans-serif;

  color: var(--white);
  z-index: 1;

  /* - Introduction */
  > span {
    opacity: 0.5;
  }

  /* Hi, Im Gabriel */
  header {
    font-size: 44px;
  }

  header,
  h2 {
    font-family: "Fira Code", monospace;
  }

  /* Im a Front-End Developer */
  p {
    font-size: 22px;
    margin-top: -40px;
  }

  /* 13 + Completed projects */
  footer {
    h2 {
      font-size: 44px;
      color: var(--green);
    }
  }

  /* The Green Container now is on top */
  /* Objects size adjustments */
  @media (max-width: 1340px) {
    justify-content: flex-start;
    gap: 30px;
    height: auto;
    max-width: 520px;
    margin-left: 90px;
    margin-top: 0px;

    > p {
      margin-top: 0;
    }
  }

  /* Objects size adjustments */
  @media (max-width: 920px) {
    max-width: 90%;
    header {
      font-size: 30px;
    }

    > p {
      font-size: 18px;
      margin-top: -20px;
    }

    footer h2 {
      font-size: 28px;
    }
  }

  @media (max-width: 700px) {
    margin-left: 0;
  }
`;

const GreenContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--green);
  height: 100%;
  width: 460px;
  color: var(--black);
  font-family: "Zen Kaku Gothic Antique", sans-serif;

  > img:first-of-type {
    z-index: 0;
    position: relative;
    margin-top: 60px;
  }

  .dots {
    position: absolute;
    transform: translate(-50%, -50%);
    left: 0%;
    top: 150px;
  }

  /* Typewriter wrapper  */
  span {
    position: relative;
    font-size: 32px;
    width: 270px;
    height: 50px;
    text-align: center;
    margin: 30px;
    font-weight: 900;
  }

  footer {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 150px;

    a {
      transition: all 0.2s ease-in-out;
      &:hover {
        transform: scale(1.2);
      }
      svg,
      img {
        width: 57px;
        height: 57px;
        cursor: pointer;
      }
    }
  }

  /* The Image Container now is on top */
  /* Objects size adjustments */
  @media (max-width: 1340px) {
    width: 100%;
    height: auto;
    padding-bottom: 20px;

    > img:first-of-type {
      width: 270px;
    }

    /* Typewriter */
    span {
      height: 70px;
      font-size: 28px;
      margin: 10px;
    }

    .dots {
      transform: rotate(270deg) translate(-50%, -100%);
      top: 55%;
      left: 98%;
    }

    footer {
      display: none;
    }
  }

  /* The Image Container now is on top */
  /* Objects size adjustments */
  @media (max-width: 920px) {
    > img:first-of-type {
    }

    .dots {
      display: none;
    }
  }
`;

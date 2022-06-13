import { FC } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import i18next from "i18next";
import { FaLanguage } from "react-icons/fa";

interface IBtn {
  currLanguage: string;
}

const LanguageBtn: FC = () => {
  const { i18n } = useTranslation(),
    currLanguage = i18next.languages[0];

  const handleClick = (): void => {
    if (currLanguage === "pt-BR") {
      i18n.changeLanguage("en-US");
    } else {
      i18n.changeLanguage("pt-BR");
    }
  };

  return (
    <Btn onClick={handleClick} currLanguage={currLanguage}>
      <FaLanguage />
      <span>{currLanguage}</span>
    </Btn>
  );
};

export default LanguageBtn;

const Btn = styled.button<IBtn>`
  position: fixed;
  transform: translate(-100%, -50%);
  top: 92%;
  left: 99%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  padding: 10px;
  overflow: visible;
  transition: all 0.1s;
  z-index: 100;

  ${({ currLanguage }) =>
    currLanguage === "pt-BR"
      ? `
    background-color: rgba(227, 31, 113, 1);
    color: var(--white);
    border: solid 2px var(--red);
    `
      : `
    background-color: rgba(255, 226, 64, 1);
    color: var(--black);

  `}

  &:active {
    margin-top: 15px;
  }

  svg {
    width: 50px;
    height: 50px;
  }

  span {
    font-family: "Zen Kaku Gothic Antique", sans-serif;
    font-size: 20px;
  }
`;

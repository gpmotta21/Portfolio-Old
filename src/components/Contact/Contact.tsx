import { FC } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import * as imgList from "../../assets/imgList";
import { FaWhatsapp } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { Form } from "./Form";

type Ref = React.RefObject<HTMLDivElement>;

interface IContactProps {
  contactRef: Ref;
}

export const Contact: FC<IContactProps> = ({ contactRef }) => {
  const { t } = useTranslation();

  return (
    <ContactStyle ref={contactRef} id="contact">
      <header>
        <span data-aos="fade-left" data-aos-duration="300">
          -{t("contact")}
        </span>
        <p data-aos="fade-left" data-aos-duration="400">
          {t("Do you have an idea ?")}
        </p>
        <div data-aos="fade-left" data-aos-duration="500">
          <h1>{t("Lets get in contact !")}</h1>
          <img src={imgList.wave} />
        </div>
      </header>
      <div>
        <Form />
        <OtherContact data-aos="fade-left" data-aos-duration="800">
          <a target="_blank" href="https://api.whatsapp.com/send/?phone=5521974264416&text&app_absent=0">
            <FaWhatsapp />
            <p>+55 21 974264416</p>
          </a>
          <a href="mailto:gpmotta21@gmail.com" target="_blank">
            <MdMarkEmailRead />
            <p>gpmotta21@gmail.com</p>
          </a>
        </OtherContact>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  min-height: 780px;
  font-family: "Zen Kaku Gothic Antique", sans-serif;
  background-color: var(--gray);
  padding: 90px 10px 250px 40px;
  background-image: url(${imgList.contactBg});
  background-repeat: no-repeat;
  > * {
    margin-left: 312px;
  }

  /* 'Lets get in contact' container */
  header {
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: var(--white);

    span {
      opacity: 0.5;
    }

    p {
      font-size: 24px;
    }

    div {
      display: flex;
      gap: 20px;

      h1 {
        font-size: 48px;
        color: var(--green);
        font-family: "Fira Code", monospace;
      }

      img {
        width: 100px;
        height: 100px;
        transform: translateY(-25px);
      }
    }
  }

  /* Container with form and other contact options  */
  > div {
    display: flex;
    gap: 20%;
  }

  @media (max-width: 1340px) {
    > * {
      margin-left: 90px;
    }
  }

  @media (max-width: 1124px) {
    > div {
      flex-direction: column;
      align-items: flex-start;
      gap: 70px;
    }
  }

  @media (max-width: 700px) {
    padding: 0 0 50px 0;

    > * {
      margin-left: 20px;
    }
  }
  @media (max-width: 535px) {
    header {
      p {
        font-size: 18px;
      }

      > div {
        width: 80%;
        gap: 5px;
        h1 {
          font-size: 30px;
        }

        img {
          width: 50px;
          height: 50px;
        }
      }
    }
  }
`;

const OtherContact = styled.div`
  > a {
    margin-top: 30px;
    display: flex;
    align-items: flex-end;
    min-width: 323px;
    height: auto;
    background-color: var(--black);
    padding: 10px;
    border-radius: 20px;
    border: solid 1px var(--green);

    svg {
      color: var(--green);
      width: 100px;
      height: 95px;
    }

    p {
      font-size: 20px;
      color: var(--white);
    }
  }

  @media (max-width: 535px) {
    > a {
      min-width: 250px;
    }
  }
`;

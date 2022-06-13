import { FC } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import * as imgList from "../assets/imgList";

type Ref = React.RefObject<HTMLDivElement>;

interface IServicesProps {
  servicesRef: Ref;
}

export const Services: FC<IServicesProps> = ({ servicesRef }) => {
  const { t } = useTranslation();

  const services = [
    {
      title: t("Front-End / Website Development"),
      img: imgList.code,
      content: t("I will help you Front"),
      color: "#E31F71",
    },
    {
      title: t("Landing Page Creation"),
      img: imgList.landingPage,
      content: t("I will help landing"),
      color: "#FFE240",
    },
    {
      title: "E-commerce",
      img: imgList.Ecommerce,
      content: t("Soon I will work with e-commerce"),
      color: "#00AEFF",
    },
  ];

  return (
    <ServicesStyle ref={servicesRef} id="services">
      <header>
        <span data-aos="fade-left" data-aos-duration="500">
          -{t("services")}
        </span>
        <h1 data-aos="fade-left" data-aos-duration="700">
          {t("Some of my services")}
        </h1>
      </header>
      <ul>
        {services.map((i, index) => (
          <li style={{ border: `solid 2px ${i.color}` }} data-aos="fade-left" data-aos-duration={index * 800}>
            <header>
              <img src={i.img} />
              <h1>{i.title}</h1>
            </header>
            <p>{i.content}</p>
          </li>
        ))}
      </ul>
    </ServicesStyle>
  );
};

const ServicesStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 700px;
  gap: 50px;
  color: var(--white);
  font-family: "Zen Kaku Gothic Antique", sans-serif;

  > header {
    span {
      opacity: 0.5;
    }

    h1 {
      font-family: "Fira Code", monospace;
      font-size: 54px;
      margin-top: 30px;
    }
  }

  /* Ul of cards for each service */
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 45px;
  }

  li {
    max-width: 383px;
    height: 240px;
    padding: 15px;
    border-radius: 15px;
    background-color: var(--gray);
    margin-right: 10px;

    header {
      display: flex;
      align-items: flex-end;

      h1 {
        font-size: 20px;
        margin-left: 10px;
      }
    }

    p {
      margin-top: 30px;
      font-size: 18px;
    }

    &:hover {
      transform: translateY(5px) !important;
    }
  }
`;

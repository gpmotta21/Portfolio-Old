import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useRefsCtx } from "../../context/refs";
import { useCheckNavCollision } from "../../hooks/useCheckNavCollision";
import { Link } from "react-scroll";

// Media
import * as imgList from "../../assets/imgList";
import * as FAicons from "react-icons/fa";
import * as BSicons from "react-icons/bs";

interface IVerticalNav {
  detectHit?: boolean;
  expandNav: boolean;
}

interface IAnchor {
  isGreen: any;
}

export const Navbar: FC = () => {
  const { t } = useTranslation(),
    { currSegment } = useRefsCtx(),
    [expandNav, setExpandNav] = useState<boolean>(false),
    detectHit = useCheckNavCollision();

  const isGreen = (desiredSegment: string) => {
    if (desiredSegment == currSegment) return true;
  };

  const handleCloseNav = () => {
    setExpandNav(false);
  };

  return (
    <VerticalNav detectHit={detectHit} expandNav={expandNav}>
      <div>
        <img src={imgList.logo} alt="My Logo" />
        <AnchorGroup expandNav={expandNav}>
          <Anchor to={"introduction"} isGreen={isGreen("introduction")} onClick={handleCloseNav}>
            <i>
              <FAicons.FaHouseDamage />
            </i>
            <span>{t("introduction")}</span>
          </Anchor>
          <Anchor to={"skills"} isGreen={isGreen("skills")} onClick={handleCloseNav}>
            <i>
              <FAicons.FaRegLightbulb />
            </i>
            <span>{t("skills")}</span>
          </Anchor>

          <Anchor to={"works"} isGreen={isGreen("works")} onClick={handleCloseNav}>
            <i>
              <FAicons.FaProjectDiagram />
            </i>
            <span>{t("works")}</span>
          </Anchor>
          <Anchor to={"services"} isGreen={isGreen("services")} onClick={handleCloseNav}>
            <i>
              <FAicons.FaRegEdit />
            </i>
            <span>{t("services")}</span>
          </Anchor>
          <Anchor to={"contact"} isGreen={isGreen("contact")} onClick={handleCloseNav}>
            <FAicons.FaMobileAlt />
            <span>{t("contact")}</span>
          </Anchor>
        </AnchorGroup>
        <button onClick={() => setExpandNav(!expandNav)}>
          <BSicons.BsListNested />
        </button>
      </div>
    </VerticalNav>
  );
};

const VerticalNav = styled.div<IVerticalNav>`
  position: fixed;
  top: 0;
  left: 0;
  height: 70px;
  width: 100%;
  z-index: 10;

  > div {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1920px;
    height: 100%;
    margin: 0 auto;

    > img {
      margin-left: 20px;
    }

    > button {
      display: none;
      margin-right: 40px;
      font-size: 50px;
      line-height: 0px;
      transition: all 1.3s;
      transform: ${(props) => (props.expandNav ? "rotate(0deg)" : "rotate(270deg)")};
    }

    @media (max-width: 1340px) {
      transition: all 1.2s ease-in-out;
      background-color: ${(props) => (props.detectHit || props.expandNav ? "var(--green)" : "none")};

      > button {
        display: block;
      }

      > img {
        content: url(${imgList.darkLogo});
      }
    }
  }
`;

const AnchorGroup = styled.div<IVerticalNav>`
  position: absolute;
  top: 180px;
  left: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  transition: none;
  z-index: 3;

  @media (max-width: 1340px) {
    top: -2000px;
    left: 0;
    right: 0;
    align-items: flex-end;
    gap: 40px;
    height: 100vh;
    padding: 50px 30px;
    background: rgba(33, 33, 33, 0.9);
    backdrop-filter: blur(10px);
    transition: transform 1s ease-in-out;

    ${({ expandNav }) =>
      expandNav &&
      `
      transform: translateY(2070px)
    `};
  }
`;

const Anchor = styled(Link)<IAnchor>`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  cursor: pointer;
  transition: all 0.2s;

  i {
    position: relative;

    // Vertical green line that connects every icon, except for the last one
    &:before {
      content: "";
      position: absolute;
      transform: translate(-50%, 0%);
      top: 95%;
      left: 50%;
      width: 5px;
      height: 50px;
      background-color: var(--green);
    }
  }

  /* Icon */
  svg {
    position: relative;
    width: 60px;
    height: 60px;
    border: var(--green) 2px solid;
    border-radius: 50%;
    padding: 10px;
    overflow: visible;
    background-color: var(--black);
    transition: all 1s;
    color: ${(props) => (props.isGreen ? "var(--green)" : "var(--white)")};
  }

  span {
    margin-bottom: 10px;
    font-size: 19px;
    font-family: "Zen Kaku Gothic Antique", sans-serif;
    color: var(--white);
    transition: all 0.6s;
  }

  :active {
    transform: translateY(7px);
  }

  &:hover span {
    color: var(--green);
  }

  @media (max-width: 1340px) {
    flex-direction: row-reverse;

    svg {
      width: 80px;
      height: 80px;
    }

    span {
      font-size: 26px;
    }
  }
`;

import { FC } from "react";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";

import * as imgList from "../assets/imgList";
import { useTranslation } from "react-i18next";
import { useSuccessCtx } from "../context/successMessage";

export const SuccessMessage: FC = () => {
  const { t } = useTranslation(),
    { successMessage } = useSuccessCtx();

  const transition = useTransition(successMessage, {
    from: { x: -100, opacity: 0 },
    enter: { x: 0, opacity: 1 },
    leave: { x: 100, opacity: 0 },
  });

  return transition(
    (style, item) =>
      item && (
        <Message style={style}>
          {item == "fail" ? (
            <Error>
              <span>{t("Oops, it seems a problem occurred")}</span>
              <img src={imgList.sady} />
            </Error>
          ) : (
            <Success>
              <span>{t("Thank you for sending me")}</span>
              <img src={imgList.smiley} />
            </Success>
          )}
        </Message>
      )
  );
};

const Message = styled(animated.div)`
  position: fixed !important;
  top: 2%;
  right: 2%;
  font-family: "Zen Kaku Gothic Antique", sans-serif;
  z-index: 100;

  > div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    width: 400px;
    text-align: center;
    font-size: 21px;
    font-weight: 800;
    padding: 15px;
    border-radius: 15px;

    img {
      width: 50px;
    }
  }

  @media (max-width: 700px) {
    transform: translateX(-50%) !important;
    left: 50%;
    top: 5%;
    right: initial;

    > div {
      width: 90vw;
    }
  }
`;

const Success = styled.div`
  background-color: var(--green);
`;

const Error = styled.div`
  background-color: var(--red);
  color: var(--white);
`;

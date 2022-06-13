import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useRefsCtx } from "../../context/refs";
import useCaptureSegment from "../../hooks/useCaptureSegment";
import { Contact } from "../Contact/Contact";
import { Introduction } from "../Introduction";
import LanguageBtn from "../LanguageBtn";
import { Services } from "../Services";
import { Skills } from "../Skills";
import { SuccessMessage } from "../SuccessMessagef";
import { Works } from "../Works/Works";

export default function Main() {
  const { setCurrSegment } = useRefsCtx();
  const introductionRef = useRef<HTMLDivElement>(null!),
    skillsRef = useRef<HTMLDivElement>(null!),
    worksRef = useRef<HTMLDivElement>(null!),
    servicesRef = useRef<HTMLDivElement>(null!),
    contactRef = useRef<HTMLDivElement>(null!);

  const segment = useCaptureSegment([introductionRef, skillsRef, worksRef, servicesRef, contactRef]);

  useEffect(() => {
    setCurrSegment(segment);
  }, [segment]);

  return (
    <MainStyle>
      <Introduction introductionRef={introductionRef} />
      <Skills skillsRef={skillsRef} />
      <Works worksRef={worksRef} />
      <Services servicesRef={servicesRef} />
      <Contact contactRef={contactRef} />
      <LanguageBtn />
      <SuccessMessage />
    </MainStyle>
  );
}

const MainStyle = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1920px;
  min-height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  gap: 100px;
  position: relative;

  > div:nth-of-type(3),
  > div:nth-of-type(4) {
    margin-left: 312px;
  }

  @media (max-width: 920px) {
    scroll-snap-type: none;
  }

  @media (max-width: 1340px) {
    > div:nth-of-type(3),
    > div:nth-of-type(4) {
      margin-left: 90px;
    }
  }
  @media (max-width: 700px) {
    > div:nth-of-type(3),
    > div:nth-of-type(4) {
      margin-left: 20px;
    }
  }
`;

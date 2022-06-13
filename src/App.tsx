import { FC, useEffect } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import styled, { createGlobalStyle } from "styled-components";
import Main from "./components/Main/Main";
import Aos from "aos";
import "aos/dist/aos.css";
import { Footer } from "./components/Footer";

const App: FC = () => {
  useEffect(() => {
    Aos.init({ offset: 0, once: false });
  }, []);

  return (
    <StyledApp>
      <GlobalStyle />
      <Navbar />
      <Main />
      <Footer />
    </StyledApp>
  );
};

const StyledApp = styled.div`
  position: relative;
  min-height: 100vh;
`;

const GlobalStyle = createGlobalStyle`
  :root{
    --black: #212121;
    --white: #F8F8F8;
    --green: #74FAC0;
    --gray: #2C2D31;
    --red: #E31F71;
  }

  body{
    background-color: var(--black);
    overflow-x: hidden;
    
    .floating {
      animation: floating 1.5s ease-in-out infinite;
      margin: 0 auto;
      margin-top: 50px;
      width: 70px;
    }
  
    @keyframes floating {
      0%,
      100% {
        transform: translateY(0px);
      }
  
      50% {
        transform: translateY(20px);
      }
    }
    
    ::-webkit-scrollbar {
    width: 10px;
  }
  

  /* Track */
  ::-webkit-scrollbar-track {
    background-color: #c3c3c3;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #797979;
    border-radius: 10px;
  }
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  button,a, li {
    all: unset;
    cursor: pointer;
  }

`;

export default App;

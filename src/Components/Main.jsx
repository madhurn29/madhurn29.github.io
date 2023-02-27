import { useEffect } from "react";
import About from "./About";

import Contacts from "./Contacts";
import GithubStats from "./GithubStats";
import Home from "./Home";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";


function Main() {
  
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  });
  const scrollToSection = (elementRef) => {
    console.log(elementRef);
    document.getElementById(elementRef).scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="container">
        <div style={{ position: "sticky", top: "0px", zIndex: 11 }}>
          <Navbar onClick={(e) => scrollToSection(e)} />
        </div>
        <Home />
        <About />
        <Skills />
        
        <Projects />
        <GithubStats />
        <Contacts />
      </div>
    </>
  );
}

export default Main;

import { useRef } from "react";
import About from "./About";
import Home from "./Home";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";

function Main() {
  const about = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);
  const scrollToSection = (elementRef) => {
    console.log(elementRef);
    document.getElementById(elementRef).scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="container">
        <div style={{ position: "sticky", top: "0px" }}>
          <Navbar onClick={(e) => scrollToSection(e)} />
        </div>
        <div id="home">
          <section>
            <Home />
          </section>
        </div>
        <div>
          <section id="about">
            <About />
          </section>
        </div>
        <div>
          <section>
            <Skills />
          </section>
        </div>
        <div>
          <section>
            <Projects />
          </section>
        </div>
      </div>
    </>
  );
}

export default Main;

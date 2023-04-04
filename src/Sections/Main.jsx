import { useEffect } from "react";
import About from "./About";

import Contacts from "./Contacts";
import GithubStats from "./GithubStats";
import Home from "./Home";
import Navbar from "../Components/Navbar/Navbar";
import Projects from "./Projects";
import Skills from "./Skills";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { BsBalloonHeartFill } from "react-icons/bs";
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
        <Box
          h="50px"
          bg="#005c9f"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {/* <Image src={"icons8-heart-balloon-32.png"}></Image> */}
          <Text fontSize={"14px"} color="#fff">
            Made by Madhur Nadamwar
          </Text>
          {/* <Image src={"icons8-heart-balloon-32.png"}></Image> */}
        </Box>
      </div>
    </>
  );
}

export default Main;

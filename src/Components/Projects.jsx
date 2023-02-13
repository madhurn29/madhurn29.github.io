import { Box, Text } from "@chakra-ui/react";
import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <Box
      id="projects"
      className="about-section"
      // bg="#EAE7DC"
      h={{ lg: "95vh" }}
      border={"1px solid red"}
      width={"100%"}
    >
      <Box
        border={"1px solid red"}
        w={{ lg: "90%" }}
        h={{ lg: "95%" }}
        m={{ lg: "20px auto" }}
      >
        <Text textAlign={{ lg: "center" }} fontSize={{ lg: "6xl" }}>
          Projects
        </Text>

        <Box
          display={"grid"}
          gridTemplateColumns={{ lg: "repeat(2,1fr)" }}
          gap={{ lg: "50px" }}
        >
          <ProjectCard imglink={"bewakoof.png"} title={"Stoopid - Bewakoof Clone"} 
          description={" Bewakoof.com is an E-commerce platform for casual wear and lifestyle brands."}
          
          />
          <ProjectCard />
        </Box>
      </Box>
    </Box>
  );
}

export default Projects;

import { Box, Text } from "@chakra-ui/react";
import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <Box
      id="projects"
      className="about-section"
      // bg="#EAE7DC"
      // h={{ lg: "95vh" }}
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
          gridTemplateColumns={{ lg: "repeat(1,1fr)" }}
          gap={{ lg: "50px" }}
        >
          <ProjectCard
            imglink={"bewakoof.png"}
            title={"Stoopid - Bewakoof Clone"}
            description={
              " Bewakoof.com is an E-commerce platform for casual wear and lifestyle brands."
            }
            techStack_1={"html-1.png"}
            techStack_2={"css-3.png"}
            techStack_3={"javascript.png"}
            // techStack_4={"Typescript.png"}
            // techStack_5={"html-1.png"}

            feature_1="Built the Landing Page"
            feature_2="Built the Product Page"
            feature_3="Implemented Sort and Filter functionality"
            feature_4="User Authentication"
            projectType={"Individual"}
            imageOrder={1}
            contentOrder={2}
          />
          <ProjectCard
            imglink={"bewakoof.png"}
            title={"Stoopid - Bewakoof Clone"}
            description={
              " Bewakoof.com is an E-commerce platform for casual wear and lifestyle brands."
            }
            techStack_1={"html-1.png"}
            techStack_2={"css-3.png"}
            techStack_3={"javascript.png"}
            // techStack_4={"Typescript.png"}
            // techStack_5={"html-1.png"}

            feature_1="Built the Landing Page"
            feature_2="Built the Product Page"
            feature_3="Implemented Sort and Filter functionality"
            feature_4="User Authentication"
            projectType={"Individual"}
            imageOrder={1}
            contentOrder={1}
          />
          <ProjectCard
            imglink={"bewakoof.png"}
            title={"Stoopid - Bewakoof Clone"}
            description={
              " Bewakoof.com is an E-commerce platform for casual wear and lifestyle brands."
            }
            techStack_1={"html-1.png"}
            techStack_2={"css-3.png"}
            techStack_3={"javascript.png"}
            // techStack_4={"Typescript.png"}
            // techStack_5={"html-1.png"}

            feature_1="Built the Landing Page"
            feature_2="Built the Product Page"
            feature_3="Implemented Sort and Filter functionality"
            feature_4="User Authentication"
            projectType={"Individual"}
            imageOrder={1}
            contentOrder={2}
          />
          <ProjectCard
            imglink={"bewakoof.png"}
            title={"Stoopid - Bewakoof Clone"}
            description={
              " Bewakoof.com is an E-commerce platform for casual wear and lifestyle brands."
            }
            techStack_1={"html-1.png"}
            techStack_2={"css-3.png"}
            techStack_3={"javascript.png"}
            // techStack_4={"Typescript.png"}
            // techStack_5={"html-1.png"}

            feature_1="Built the Landing Page"
            feature_2="Built the Product Page"
            feature_3="Implemented Sort and Filter functionality"
            feature_4="User Authentication"
            projectType={"Individual"}
            imageOrder={1}
            contentOrder={2}
          />
          
        </Box>
      </Box>
    </Box>
  );
}

export default Projects;

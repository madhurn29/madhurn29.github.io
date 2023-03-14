import { Box, Text } from "@chakra-ui/react";
import React from "react";
import ProjectCard from "./ProjectCard";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
function Projects() {
  return (
    <Box
      id="projects"
      className="about-section"
      border={"1px solid red"}
      width={"100%"}
      pb={{ base: "10px" }}
    >
      <Box>
        <Text
          textAlign={{ base: "center", sm: "center", lg: "center" }}
          fontSize={{ base: "4xl", sm: "4xl", lg: "6xl" }}
          mb={{ base: "25px", sm: "25px", lg: "35px" }}
        >
          Projects
        </Text>
      </Box>

      <Box
        border={"1px solid red"}
        w={{ lg: "90%" }}
        h={{ lg: "95%" }}
        m={{ lg: "20px auto" }}
      >
        <Box
          border={"1px solid red"}
          display={"grid"}
          w={{ base: "90%" }}
          m={{ base: "auto" }}
          gridTemplateColumns={{ lg: "repeat(1,1fr)" }}
          gap={{ base: "25px", lg: "60px" }}
        >
          <Box
            display={"grid"}
            // w={{ base: "90%" }}
            m={{ base: "auto" }}
            gridTemplateColumns={{ lg: "repeat(1,1fr)" }}
            gap={{ base: "25px", lg: "60px" }}
          >
            <Fade left>
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

                feature_1="Functional Product Page"
                feature_2="Functinal Cart Page"
                feature_3="Sort and Filter functionality"
                feature_4="User Authentication using Local Storage"
                projectType={"Individual"}
                imageOrder={1}
                contentOrder={2}
                live_link={"https://stoo-pid.netlify.app/"}
                github_link={"https://github.com/madhurn29/gullible-pear-795"}
              />
            </Fade>

            <Fade right>
              <ProjectCard
                imglink={"chargify_homePage_1.png"}
                title={"Chargify - Chargebee Clone"}
                description={
                  "Chargebee is a SaaS product company which build subscription and billing softwares."
                }
                techStack_1={"html-1.png"}
                techStack_2={"css-3.png"}
                techStack_3={"javascript.png"}
                // techStack_4={"Typescript.png"}
                // techStack_5={"html-1.png"}

                feature_1="User Authentication"
                feature_2="Functional Dashboard"
                feature_3="CRUD Operations using API"
                feature_4="Sort and serach operations using API"
                projectType={"Collabrative"}
                imageOrder={1}
                contentOrder={1}
                live_link={"https://chargify.netlify.app/"}
                github_link={
                  "https://github.com/Varun8177/permissible-step-1626"
                }
              />
            </Fade>
            <Zoom left>
              <ProjectCard
                imglink={"dellco.JPG"}
                title={"Dellco - Dell.com Clone"}
                description={
                  "Dell is a technology company that develops, sells, repairs and supports computers and related products and services."
                }
                techStack_1={"html-1.png"}
                techStack_2={"css-3.png"}
                techStack_3={"javascript.png"}
                techStack_4={"react.png"}
                techStack_5={"chakra.png"}
                feature_1="User Authentication using mock server"
                feature_2="Crud Operations using mock server"
                feature_3="Implemented Sort and Filter functionality"
                feature_4="Admin Page"
                projectType={"Individual"}
                imageOrder={1}
                contentOrder={2}
                live_link={"https://dellco.netlify.app/"}
                github_link={"https://github.com/madhurn29/rooted-scale-5183"}
              />
            </Zoom>
            <Zoom bottom>
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
            </Zoom>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Projects;

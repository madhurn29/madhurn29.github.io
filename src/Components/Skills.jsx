import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import SkillBox from "./SkillBox";

function Skills() {
  return (
    <Box id="skills" border={"1px solid red"} width={"100%"} h={{ lg: "95vh" }}>
      <Text mt="30px" color="black" textAlign={"center"} fontSize={"6xl"}>
        Skills and Tool set{" "}
      </Text>
      <Box
        display={"flex"}
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent={{ base: "center" }}
        alignItems={{ base: "center" }}
        border={"1px solid whit"}
        w={{ lg: "80%" }}
        m="20px auto"
        pt="50px"
      >
        <Box
          w={{ base: "95%", lg: "60%" }}
          m={"auto"}
          border={"1px solid re"}
          order={{ base: 2, lg: 1 }}
        >
          <Grid
            templateColumns={{
              base: "repeat(3, 1fr)",
              sm: "repeat(3,1fr)",
              md: "repeat(4,1fr)",
              lg: "repeat(5,1fr)",
            }}
            gap={6}
          >
            <GridItem w="100%">
              <SkillBox icon={"html-1.png"} text={"HTML"} />
            </GridItem>
            <GridItem w="100%">
              <SkillBox icon={"css-3.png"} text={"CSS"} />
            </GridItem>
            <GridItem w="100%">
              <SkillBox icon={"javascript.png"} text={"Javascript"} />
            </GridItem>
            <GridItem w="100%">
              <SkillBox icon={"react.png"} text={"React"} />
            </GridItem>
            <GridItem w="100%">
              <SkillBox icon={"redux.png"} text={"Redux"} />
            </GridItem>
            <GridItem w="100%">
              <SkillBox icon={"chakra.png"} text={"Chakra"} />
            </GridItem>
            <GridItem w="100%">
              <SkillBox icon={"mongodb.png"} text={"MongoDB"} />
            </GridItem>
            <GridItem w="100%">
              <SkillBox icon={"Typescript.png"} text={"TypeScript"} />
            </GridItem>
            <GridItem w="100%">
              <SkillBox icon={"express.png"} text={"Express"} />
            </GridItem>
            <GridItem w="100%">
              <SkillBox icon={"nodejs.png"} text={"NodeJS"} />
            </GridItem>
          </Grid>
        </Box>

        <Box
          width={{ base: "50%", sm: "50%", md: "45%", lg: "35%" }}
          border={"1px solid re"}
          className="skill-image-box"
          display={"flex"}
          justifyContent={"center"}
          order={{ base: 1, lg: 2 }}
        >
          <Text fontSize={{ lg: "5xl" }} color={"black"}>
            Skills
          </Text>
        </Box>
      </Box>
      <Box
        display={"flex"}
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent={{ base: "center" }}
        alignItems={{ base: "center" }}
        border={"1px solid whit"}
        w={{ lg: "80%" }}
        m="20px auto"
        pt="50px"
      >
        <Box
          width={{ base: "50%", sm: "50%", md: "35%", lg: "25%" }}
          border={"1px solid re"}
          className="skill-image-box"
          display={"flex"}
          justifyContent={"center"}
          order={{ base: 1, lg: 1 }}
        >
          <Text fontSize={{lg:"5xl"}} color={"black"}>
            Tools
          </Text>
        </Box>
        <Box
          w={{ base: "95%", lg: "50%" }}
          m={"auto"}
          border={"1px solid re"}
          order={{ base: 2, lg: 2 }}
        >
          <Grid
            templateColumns={{
              base: "repeat(3, 1fr)",
              sm: "repeat(3,1fr)",
              md: "repeat(4,1fr)",
              lg: "repeat(5,1fr)",
            }}
            gap={6}
          >
            <GridItem w="100%">
              <SkillBox icon={"git.png"} text={"Git"} />
            </GridItem>
            <GridItem w="100%">
              <SkillBox icon={"github-1.png"} text={"Github"} />
            </GridItem>
            <GridItem w="100%">
              <SkillBox icon={"netlify.png"} text={"Netlify"} />
            </GridItem>
            <GridItem w="100%">
              <SkillBox icon={"vercel.png"} text={"Vercel"} />
            </GridItem>
            <GridItem w="100%">
              <SkillBox icon={"postman-icon.png"} text={"Postman"} />
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Skills;
// "https://miro.medium.com/max/1400/1*zlmwtg3fog11YXcU_rvfWA.gif"

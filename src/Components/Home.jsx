import React from "react";
import Bounce from "react-reveal/Bounce";
import { Box, Image, Text } from "@chakra-ui/react";
import Hello from "./Hello";
import LightSpeed from "react-reveal/LightSpeed";
import Slide from "react-reveal/Slide";

function Home() {
  return (
    <Box id="home"
      h={{ lg: "99vh" }}
      // w={"100%"}
      border={"1px solid white"}
      // display={"grid"}
      // justifyContent={"center"}
      // gridTemplateColumns={{
      //   base: "Repeat(1,1fr)",
      //   sm: "repeat(1,1fr)",
      //   md: "repeat(2,1fr)",
      //   xl: "repeat(2,1fr)",
      // }}
    >
      <Box
        border={"1px solid whit"}
        w={{ lg: "80%" }}
        m={{ lg: "auto" }}
        h={{ lg: "99%" }}
        display={"grid"}
        justifyContent={"center"}
        gridTemplateColumns={{
          base: "Repeat(1,1fr)",
          sm: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          xl: "repeat(2,1fr)",
        }}
      >
        <Box
          border={"1px solid re"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          // width={"80%"}
        >
          <Bounce bottom>
            <Image
              width={{ base: "20%", sm: "25%", md: "35%", lg: "70%" }}
              className="home-img"
              src="madhur.jpg"
              borderRadius={"50%"}
              border={"8px solid #d9f2ff"}
            />
          </Bounce>
        </Box>
        <Box
          // width={"80%"}
          border={"1px solid re"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {/* <Text
            fontSize={{ base: "20px", lg: "5xl" }}
            color="black"
            border={"1px solid re"}
          >
            Hello,
          </Text> */}
          <Hello />
          <Slide left>
            <Text color="black" fontSize={{ base: "20px", lg: "6xl" }}>
              I am
            </Text>
          </Slide>
          <Slide right>
            <Text
              border={"1px solid re"}
              fontSize={{ base: "20px", lg: "6xl" }}
              id="user-detail-name"
              color={"black"}
            >
              Madhur Nadamwar
            </Text>
          </Slide>
          <Slide left>
            <Text color="black" fontSize={{ base: "20px", lg: "6xl" }}>
              Full Stack Developer
            </Text>
          </Slide>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;

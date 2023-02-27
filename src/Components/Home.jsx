import React from "react";
import Bounce from "react-reveal/Bounce";
import { Box, Image, Text } from "@chakra-ui/react";
import Hello from "./Hello";
// import LightSpeed from "react-reveal/LightSpeed";
import Slide from "react-reveal/Slide";

function Home() {
  return (
    <Box
      id="home"
      h={{ base: "91vh", sm: "95vh", md: "50vh", lg: "99vh" }}
      border={"1px solid whit"}
      display={{ base: "flex", sm: "flex" }}
      justifyContent={{ base: "center", sm: "center" }}
    >
      <Box
        border={"1px solid whit"}
        w={{ lg: "80%" }}
        m={{ lg: "auto" }}
        h={{ base: "90%", lg: "99%" }}
        display={"grid"}
        justifyContent={"center"}
        gridTemplateColumns={{
          base: "Repeat(1,1fr)",
          sm: "repeat(1,1fr)",
          md: "repeat(1,1fr)",
          xl: "repeat(2,1fr)",
        }}
      >
        <Box
          border={"1px solid re"}
          display={{ base: "flex", sm: "flex", lg: "flex" }}
          justifyContent={{ base: "center", sm: "center", lg: "center" }}
          alignItems={{ base: "center", sm: "center", lg: "center" }}
        >
          <Bounce bottom>
            <Box
              border={"1px solid re"}
              display={{ base: "flex" }}
              justifyContent={{ base: "center" }}
            >
              <Image
                width={{ base: "40%", sm: "35%", md: "45%", lg: "80%" }}
                className="home-img"
                src="madhur.jpg"
                borderRadius={"50%"}
                border={"8px solid #d9f2ff"}
              />
            </Box>
          </Bounce>
        </Box>
        <Box
          // width={"80%"}
          border={"1px solid re"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={{ xl: "center" }}
        >
          <Hello />

          <Slide left>
            <Text
              color={{ base: "black", md: "black", lg: "black" }}
              fontWeight={{ base: 700 }}
              fontSize={{ base: "3xl", lg: "6xl" }}
              mt={{ base: "10px" }}
            >
              I am
            </Text>
          </Slide>
          <Slide right>
            <Text
              border={"1px solid re"}
              fontWeight={{ base: 700 }}
              fontSize={{ base: "48px", lg: "6xl" }}
              textAlign={{ base: "center" }}
              id="user-detail-name"
              color={"black"}
            >
              Madhur Nadamwar
            </Text>
          </Slide>
          <Slide left>
            <Text
              color="black"
              fontWeight={{ base: 700 }}
              fontSize={{ base: "3xl", lg: "6xl" }}
            >
              Full Stack Developer
            </Text>
          </Slide>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;

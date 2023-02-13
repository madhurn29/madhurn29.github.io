import React from "react";

import { Box, Image, Text } from "@chakra-ui/react";

function Home() {
  return (
    <Box
      bg="#FAF9F6"
      h={{ lg: "99vh" }}
      // w={"100%"}
      border={"1px solid whit"}
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
        m={{lg:"auto"}}
        h={{lg:"99%"}}
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
          <Image
            width={{ base: "20%", sm: "25%", md: "35%", lg: "50%" }}
            className="home-img"
            src="madhur.jpg"
            borderRadius={"50%"}
            border={"4px solid black"}
          />
        </Box>
        <Box
          // width={"80%"}
          border={"1px solid re"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text fontSize={{base:"20px",lg:"5xl"}} color="black" border={"1px solid re"}>
            Hello,
          </Text>
          <Text fontSize={{base:"20px",lg:"6xl"}} id="user-detail-name" color={"black"}>
          I am Madhur Nadamwar
          </Text>{" "}
          <Text color="black" fontSize={{base:"20px",lg:"6xl"}}>
            Full Stack Developer
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;

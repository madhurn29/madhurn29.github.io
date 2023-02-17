import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import IconBox from "./IconBox";

function About() {
  
  return (
    <Box
      id="about"
      className="about-section"
      h={{ base: "91vh", sm: "91vh", lg: "95vh" }}
      border={"1px solid red"}
      width={"100%"}
      display={{base: "flex"}}
      alignItems={{ base: "center" }}
      justifyContent={{ base: "center" }}
    >
      <Box
        className="inner-main-box"
        border={"1px solid blac"}
        m={{ lg: "auto" }}
        display={"flex"}
        flexDirection={{ base: "column", lg: "row" }}
        alignItems={{ base: "center" }}
        justifyContent={{ base: "center" }}
        // m={{ lg: "20px auto" }}
        w={{ lg: "80%" }}
        h={{ lg: "95%" }}
      >
        <Box
          className="heading"
          w={{ lg: "40%" }}
          border={"1px solid re"}
          textAlign={"center"}
          pt={{ lg: "100px" }}
        >
          <Text
            id="about"
            fontSize={{ base: "4xl", lg: "6xl" }}
            fontWeight={{ base: "500" }}
          >
            About
          </Text>
        </Box>
        <Box
          className="content-box"
          w={{ lg: "50%" }}
          border={"1px solid re"}
          px={"40px"}
          display={"flex"}
          flexDirection={{ base: "column", lg: "column" }}
        >
          <Box mt={{ lg: "200px" }}>
            <Text
              id="user-detail-intro"
              fontSize={{ base: "2xl", sm: "20px", md: "22px", lg: "2xl" }}
              lineHeight={{ lg: "40px" }}
            >
              Analytical and detail-oriented aspiring Full Stack Developer,
              currently working on MERN stack. Proficient in HTML, CSS, and
              Javascript with hands-on experience in cloning websites. Curious
              to explore and learn new things
            </Text>
          </Box>
          <Box
            border="1px solid re"
            display={"flex"}
            justifyContent={{base:"space-between", lg: "space-between" }}
            alignItems="center"
            mt={{base:"40px", lg: "100px" }}
          >
            <Button
              id="resume-button-2"
              bg="#ff0000"
              color={"White"}
              _hover={{ background: "black" }}
            >
              Resume
            </Button>
            <IconBox />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default About;

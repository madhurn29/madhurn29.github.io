import React from "react";
import {
  Box,
  Text,
  Icon,
  Link,
  Center,
  Circle,
  Button,
} from "@chakra-ui/react";
import IconBox from "./IconBox";

function About() {
  let text = "< About />";
  return (
    <Box
      id="about"
      className="about-section"
      // bg="#EAE7DC"
      
      
      h={{ lg: "95vh" }}
      border={"1px solid re"}
      width={"100%"}
    >
      <Box
        className="inner-main-box"
        border={"1px solid blac"}
        display={"flex"}
        flexDirection={{ base: "column", lg: "row" }}
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
          <Text id="about"  fontSize={{ lg: "6xl" }}>
            {" "}
            {text}{" "}
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
           
              fontSize={{ base: "18px", sm: "20px", md: "22px", lg: "2xl" }}
              lineHeight={{ lg: "40px" }}
            >
              Dedicated and efficient, aspiring full-stack developer currently
              learning MERN stack. Curious to explore and learn new things.
              Seeking to further improve his skills in a challenging
              professional setting.
            </Text>
          </Box>
          <Box
            border="1px solid re"
            display={"flex"}
            justifyContent={{ lg: "space-between" }}
            alignItems="center"
            mt={{ lg: "100px" }}
          >
            <Button
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

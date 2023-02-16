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
      h={{ lg: "95vh" }}
      border={"1px solid re"}
      width={"100%"}
    >
      <Box
        className="inner-main-box"
        border={"1px solid blac"}
        m={{ lg: "auto" }}
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
          <Text id="about" fontSize={{ lg: "6xl" }}>
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
              Analytical and detail-oriented aspiring Full Stack Developer,
              currently working on MERN stack. Proficient in HTML, CSS, and
              Javascript with hands-on experience in cloning websites. Curious
              to explore and learn new things
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

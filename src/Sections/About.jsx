import React from "react";
import { Box, Text, Button, Icon } from "@chakra-ui/react";
import IconBox from "../Components/About/IconBox";
import { AiOutlineArrowDown } from "react-icons/ai";
import styles from "../Components/About/about.module.css";
function About() {
  return (
    <Box
      id="about"
      className="about section"
      h={{ base: "91vh", sm: "91vh", md: "90vh", lg: "95vh" }}
      border={"1px solid re"}
      width={"100%"}
      display={{ base: "flex" }}
      alignItems={{ base: "center" }}
      justifyContent={{ base: "center" }}
    >
      <Box
        className="inner-main-box"
        border={"1px solid blac"}
        m={{ lg: "auto" }}
        bg={{ base: "gree", sm: "yello", md: "pin", lg: "whit", xl: "re" }}
        display={"flex"}
        flexDirection={{ base: "column", lg: "row" }}
        alignItems={{ base: "center" }}
        justifyContent={{ base: "center" }}
        // m={{ lg: "20px auto" }}
        w={{ base: "90%", sm: "80%", md: "70%", lg: "80%" }}
        h={{ lg: "95%" }}
      >
        <Box
          className="heading"
          w={{ lg: "40%" }}
          border={"1px solid re"}
          textAlign={"center"}
          mt={{ md: "-50px", lg: "-150px" }}
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
          w={{ lg: "65%", xl: "50%" }}
          border={"1px solid re"}
          px={"40px"}
          mt={{ md: "30px", lg: "0px" }}
          // bg={{
          //   base: "red",
          //   sm: "pink",
          //   md: "yellow",
          //   lg: "white",
          //   xl: "black",
          //   "2xl": "blue",
          // }}
          display={"flex"}
          flexDirection={{ base: "column", lg: "column" }}
        >
          <Box mt={{ lg: "20px" }}>
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
            justifyContent={{ base: "space-between", lg: "space-between" }}
            alignItems="center"
            mt={{ base: "40px", lg: "100px" }}
          >
            <a
              id="resume-link-2"
              href="https://drive.google.com/uc?export=download&id=11AwYT97eH7iNnqUxyKt9rIBGCzYu4RuK"
              download={
                "https://drive.google.com/uc?export=download&id=11AwYT97eH7iNnqUxyKt9rIBGCzYu4RuK"
              }
            >
              <Button
                className={styles.buttonbox}
                id="resume-button-2"
                bg="#ff0000"
                mr={{ base: "4px", sm: "0px" }}
                p={{ "2xl": "10px" }}
                color={"White"}
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/11AwYT97eH7iNnqUxyKt9rIBGCzYu4RuK/view"
                  )
                }
                _hover={{ background: "black" }}
              >
                <Box>Resume</Box>
                {""}
                <Box ml={"4px"}>
                  <Icon as={AiOutlineArrowDown} />
                </Box>
              </Button>
            </a>
            <IconBox />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default About;

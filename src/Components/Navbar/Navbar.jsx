import React from "react";

import { Show, Box, Hide, Flex, Spacer, Image, Button } from "@chakra-ui/react";
import logo from "./logo/logo-transparent-png.png";
import MobNavbar from "./MobNavbar";
import NavbarButton from "./NavbarButton";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <Flex
      id="nav-menu"
      bg="#005c9f"
      position={"sticky"}
      top={0}
      h={"60px"}
      alignItems={"center"}
      zIndex={9}
      boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
    >
      <Box
        border={"1px solid re"}
        ml={{ lg: "40px" }}
        width={{ base: "", sm: "", md: "20%", lg: "20%" }}
      >
        <Image src={logo} width={{ base: "40%",sm:"30%", md: "80%", lg: "50%" }} />
      </Box>
      <Spacer />
      <Hide below="md">
        <Box
          border={"1px solid re"}
          mr={{ md: "30px", lg: "20px", xl: "10px", "2xl": "20px" }}
          minWidth={"550px"}
          w={{ md: "80%", lg: "65%", xl: "45%", "2xl": "45%" }}
        >
          <Flex alignItems={"end"} justifyContent={"end"}>
            <Link
              className={"nav-link home"}
              to="home"
              spy={true}
              smooth={true}
              offset={20}
              duration={500}
            >
              <Button
                border={"1px solid re"}
                color={"white"}
                bg="transparent"
                _hover={{ color: "#005c9f", backgroundColor: "white" }}
              >
                Home
              </Button>
            </Link>
            {/* <Spacer /> */}
            <Link
              className={"nav-link about"}
              to="about"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <Button
                color={"white"}
                bg="transparent"
                _hover={{ color: "#005c9f", backgroundColor: "white" }}
              >
                About
              </Button>
            </Link>

            {/* <Spacer /> */}
            <Link
              className={"nav-link skills"}
              to="skills"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <Button
                color={"white"}
                bg="transparent"
                _hover={{ color: "#005c9f", backgroundColor: "white" }}
              >
                Skills{" "}
              </Button>
            </Link>

            {/* <Spacer /> */}
            <Link
              className={"nav-link projects"}
              to="projects"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <Button
                color={"white"}
                bg="transparent"
                _hover={{ color: "#005c9f", backgroundColor: "white" }}
              >
                Projects
              </Button>
            </Link>
            {/* <Spacer /> */}

            <Link
              to="stats"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <Button
                color={"white"}
                bg="transparent"
                _hover={{ color: "#005c9f", backgroundColor: "white" }}
              >
                Github Stats
              </Button>
            </Link>
            {/* <Spacer /> */}

            <Link
              className={"nav-link contact"}
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <Button
                color={"white"}
                bg="transparent"
                _hover={{ color: "#005c9f", backgroundColor: "white" }}
              >
                Contacts
              </Button>
            </Link>

            {/* <Spacer /> */}

            <NavbarButton
              text={"Resume"}
              color="#fff"
              bgcolor="#ff0000"
              className={"nav-link resume"}
              id="resume-button-1"
            />

            {/* <Spacer /> */}
          </Flex>
        </Box>
      </Hide>

      <Show below="md">
        <MobNavbar />
      </Show>
    </Flex>
  );
}

export default Navbar;

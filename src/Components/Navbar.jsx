import React from "react";

import Madhur_crop from "./Madhur_crop.png";
import {
  Show,
  Box,
  Hide,
  Flex,
  Spacer,
  Image,
  Button,
  Link as CLink,
} from "@chakra-ui/react";
import MobNavbar from "./MobNavbar";
import NavbarButton from "./NavbarButton";
import { Link } from "react-scroll";

import "./Navbar.css";

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
      {/* <Box ml="20px"><Image src={Madhur_crop.png} width={"60%"} /> </Box> */}
      <Spacer />
      <Hide below="md">
        <Box
          border={"1px solid re"}
          mr="80px"
          minWidth={"550px"}
          w={{ lg: "40%" }}
        >
          <Flex alignItems={"center"}>
            <Link
              className={"nav-link home"}
              to="home"
              spy={true}
              smooth={true}
              offset={20}
              duration={500}
            >
              <Button
                color={"white"}
                bg="transparent"
                _hover={{ color: "#005c9f", backgroundColor: "white" }}
              >
                Home
              </Button>
            </Link>
            <Spacer />
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

            <Spacer />
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

            <Spacer />
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
            <Spacer />

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
            <Spacer />

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

            <Spacer />

            <NavbarButton
              text={"Resume"}
              color="#fff"
              bgcolor="#ff0000"
              className={"nav-link resume"}
              id="resume-button-1"
            />

            <Spacer />
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
{
  /* <Box
              display={"flex"}
              alignItems={"center"}
              my="15px"
              justifyContent={"center"}
              border={"1px solid re"}
            >
              <Button
                className="nav-link about"
                colorScheme={"black"}
                variant={"link"}
                onClick={(e)=>onClick("about")}
              >
                About
              </Button>
            </Box> */
}
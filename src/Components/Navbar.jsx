import React from "react";
// import Madhur_crop from "./Madhur_crop.png";
// import {NavLink} from
import { Show, Box, Hide, Flex, Spacer, Image, Button } from "@chakra-ui/react";
import MobNavbar from "./MobNavbar";
import NavbarButton from "./NavbarButton";
function Navbar({ onClick }) {
  // box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  return (
    <Flex
      id="nav-menu"
      // border="1px solid red"
      // bg="#EAE7DC"
      bg="#005c9f"
      position={"sticky"}
      top={0}
      h={"60px"}
      alignItems={"center"}
      zIndex={9}
      boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
    >
      <Box ml="20px">{/* <Image src={Madhur_crop} width={"60%"} /> */}</Box>
      <Spacer />
      <Hide below="md">
        <Box border={"1px solid re"} mr="40px" minWidth={"550px"} >
          <Flex alignItems={"center"}>
            <NavbarButton text={"Home"} className={"nav-link home"} />
            <Spacer />
            <NavbarButton text={"About"} className={"nav-link about"} />

            <Spacer />
            <NavbarButton text={"Skills"} className={"nav-link skills"} />

            <Spacer />

            <NavbarButton text={"Projects"} className={"nav-link projects"} />

            <Spacer />
            <NavbarButton text={"Contacts"} className={"nav-link contact"} />

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

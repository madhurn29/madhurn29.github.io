import React from "react";
import { Link } from "react-scroll";
import {
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerHeader,
  Box,
  Flex,
  Spacer,
  Icon,
  DrawerCloseButton,
  VStack,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
function MobNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Box backgroundColor="#005c9f" padding="8px" height="50px">
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Spacer />
          <Button ref={btnRef} color="black" bgColor="#005c9f" onClick={onOpen}>
            <Icon as={GiHamburgerMenu} fontSize="32px" />
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>

              <DrawerBody>
                <VStack gap={4}>
                  <Box width="100%">
                    <Link
                      to="home"
                      spy={"true"}
                      smooth={"true"}
                      offset={-100}
                      duration={500}
                    >
                      <Button
                        width="100%"
                        // text="About"
                        onClick={onClose}
                        section="home"
                      >
                        Home
                      </Button>
                    </Link>
                  </Box>
                  <Box width="100%">
                    <Link
                      to="about"
                      spy={"true"}
                      smooth={"true"}
                      offset={20}
                      duration={500}
                    >
                      <Button
                        width="100%"
                        text="About"
                        onClick={onClose}
                        section="about"
                      >
                        About
                      </Button>
                    </Link>
                  </Box>
                  <Box width="100%">
                    <Link
                      to="skills"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                    >
                      <Button
                        width="100%"
                        text="Skills"
                        onClick={onClose}
                        section="skills"
                      >
                        Skills
                      </Button>
                    </Link>
                  </Box>
                  <Box width="100%">
                    <Link
                      to="projects"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                    >
                      <Button
                        width="100%"
                        text="Projects"
                        onClick={onClose}
                        section="projects"
                      >
                        Projects
                      </Button>
                    </Link>
                  </Box>
                  <Box width="100%">
                    <Link
                      to="stats"
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                    >
                      <Button
                        width="100%"
                        text="Contact"
                        onClick={onClose}
                        section="contact"
                      >
                        Github stats
                      </Button>
                    </Link>
                  </Box>
                  <Box width="100%">
                    <Link
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={20}
                      duration={500}
                    >
                      <Button
                        width="100%"
                        text="Contact"
                        onClick={onClose}
                        section="contact"
                      >
                        Contact
                      </Button>
                    </Link>
                  </Box>
                  <Box width="100%">
                    <Button
                      width="100%"
                      text="Contact"
                      onClick={onClose}
                      section="contact"
                    >
                      Resume
                    </Button>
                  </Box>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Box>
    </>
  );
}

export default MobNavbar;

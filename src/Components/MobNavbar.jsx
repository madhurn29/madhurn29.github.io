import React from "react";
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
      <Box backgroundColor="#d8c3a5" padding="8px" height="50px">
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Spacer />
          <Button ref={btnRef} color="black" bgColor="#d8c3a5" onClick={onOpen}>
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
                    <Button
                      width="100%"
                      text="About"
                      onClick={onClose}
                      section="about"
                    >
                      About
                    </Button>
                  </Box>
                  <Box width="100%">
                    <Button
                      width="100%"
                      text="Skills"
                      onClick={onClose}
                      section="skills"
                    >
                      SKills
                    </Button>
                  </Box>
                  <Box width="100%">
                    <Button
                      width="100%"
                      text="Projects"
                      onClick={onClose}
                      section="projects"
                    >
                      Projects
                    </Button>
                  </Box>
                  <Box width="100%">
                    <Button
                      width="100%"
                      text="Contact"
                      onClick={onClose}
                      section="contact"
                    >
                      Contacts
                    </Button>
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

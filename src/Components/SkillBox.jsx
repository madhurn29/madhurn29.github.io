import { Box, Center, Image, Text } from "@chakra-ui/react";
import React from "react";
import LightSpeed from "react-reveal/LightSpeed";
function SkillBox({ text, icon }) {
  return (
    <Box className="skills-card">
      <Center>
        <LightSpeed left>
        <Box
          border="1px solid #EAE7DC"
          cursor="pointer"
          bg={"#196DB9"}
          boxShadow="base"
          padding={{ base: "15px 10px 10px 5px", lg: "28px 25px 0 25px" }}
          borderRadius="10px"
          width={{ base: "80px", lg: "100px" }}
          height={{ base: "100px", lg: "120px" }}
          sx={{ transition: "background ,color .5s" }}
          transition="background .5s"
          color="white"
          _hover={{ backgroundColor: "#669DD0", color: "black" }}
        >
          <Center>
            <Box width="40px" height="40px">
              <Image className="skills-card-img" src={icon} />
            </Box>
          </Center>
          <Center marginTop="16px">
            <Text
              className="skills-card-name"
              fontSize={{ base: "15px" }}
              fontWeight={"500"}
            >
              {text}
            </Text>
          </Center>
        </Box>
        </LightSpeed>
      </Center>
    </Box>
  );
}

export default SkillBox;
// #196DB9

// #669DD0

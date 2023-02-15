import { Box, Center, Image, Text } from "@chakra-ui/react";
import React from "react";

function SkillBox({ text, icon }) {
  return (
    <Box className="skills-card">
      <Center>
        <Box
          border="1px solid #EAE7DC"
          cursor="pointer"
          bg={"#669DD0"}
          boxShadow="base"
          padding="28px 25px 0 25px"
          borderRadius="10px"
          width={{ base: "100px", lg: "100px" }}
          height={{ base: "120px", lg: "120px" }}
          sx={{ transition: "background ,color .5s" }}
          transition="background .5s"
          color="white"
          _hover={{ backgroundColor: "#196DB9", color: "black" }}
        >
          <Center>
            <Box width="40px" height="40px">
              <Image className="skills-card-img" src={icon} />
            </Box>
          </Center>
          <Center marginTop="16px">
            <Text className="skills-card-name" fontWeight={"800"}>
              {text}
            </Text>
          </Center>
        </Box>
      </Center>
    </Box>
  );
}

export default SkillBox;

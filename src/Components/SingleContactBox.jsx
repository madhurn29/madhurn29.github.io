import { Box, Link, Icon, Circle, Text } from "@chakra-ui/react";
import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";

function SingleContactBox({ id, link, bg, icon, text }) {
  return (
    <Box
      border={"1px solid blu"}
      display={{ base: "flex", lg: "flex" }}
      flexDirection={{ base: "row", sm: "column",md:"row", lg: "row" }}
      alignItems={{ base: "center", lg: "center" }}
      gap={{ base: "10px", lg: "30px" }}
    >
      <Box>
        <Link id={id} href={link} isExternal>
          <Circle
            size={{ base: "30px", lg: "50px" }}
            bg={bg}
            color="white"
            _hover={{
              backgroundColor: "white",
              color: "black",
              cursor: "pointer",
            }}
          >
            <Icon as={icon} w={{ base: 5, sm: 5 }} h={{ base: 6, lg: 6 }} />
          </Circle>
        </Link>
      </Box>

      <Box>
        <Box>
          <Link href={link} isExternal>
            <Text fontSize={{ lg: "2xl" }}>{text}</Text>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default SingleContactBox;

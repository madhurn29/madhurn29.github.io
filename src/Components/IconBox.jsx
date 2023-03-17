import { Box, Link, Icon, Circle } from "@chakra-ui/react";
import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";
function IconBox() {
  return (
    <Box
      className="Icon-bar"
      border="1px solid re"
      width={{lg:"50%",xl:"40%"}}
      display="flex"
      gap={{base:"4px"}}
      alignItems={""}
      justifyContent={"space-between"}
    >
      <Link
        id="contact-linkedin"
        href="https://www.linkedin.com/in/madhur-nadamwar"
        isExternal
      >
        <Circle
          size={{base:"40px", lg: "50px" }}
          bg="#0077b5"
          color="white"
          _hover={{
            backgroundColor: "white",
            color: "black",
            cursor: "pointer",
          }}
        >
          <Icon as={FaLinkedinIn} w={{base:6,lg:6}} h={{base:6,lg:6}} />
        </Circle>
      </Link>

      <Link id="contact-github" href="https://github.com/madhurn29" isExternal>
        <Circle
          size={{base:"40px", lg: "50px" }}
          bg="black"
          color="white"
          _hover={{
            backgroundColor: "white",
            color: "black",
            cursor: "pointer",
          }}
        >
          <Icon as={FaGithub} w={{base:5,lg:6}} h={{base:5,lg:6}} />
        </Circle>
      </Link>
      <Link
        id="contact-email"
        href="mailto:madhur.nadamwar29@gmail.com"
        isExternal
      >
        <Circle
          size={{base:"40px", lg: "50px" }}
          bg="#ff0000"
          color="white"
          _hover={{
            backgroundColor: "white",
            color: "black",
            cursor: "pointer",
          }}
        >
          <Icon as={AiOutlineMail} w={6} h={6} />
        </Circle>
      </Link>
      <Link id="contact-phone" href="tel:+917304127701">
        <Circle
          size={{base:"40px", lg: "50px" }}
          bg="#32d04d"
          color="white"
          _hover={{
            backgroundColor: "white",
            color: "black",
            cursor: "pointer",
          }}
        >
          <Icon as={IoIosCall} w={6} h={6} />
        </Circle>
      </Link>
    </Box>
  );
}

export default IconBox;

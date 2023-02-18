import { Button, Icon, Text, Box } from "@chakra-ui/react";
import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Link } from "react-router-dom";
function NavbarButton({ text, className, bgcolor, color, id }) {
  return (
    <Link
      to="https://drive.google.com/file/d/11AwYT97eH7iNnqUxyKt9rIBGCzYu4RuK/view" target="_blank" 
      download
    >
      <Button
        className={className}
        id={id}
        bg={bgcolor || "transparent"}
        color={color || "black"}
        ml={"5px"}
        _hover={{ bg: "black", color: "white" }}
      >
        <Box>{text}</Box>
        {""}
        <Box ml={"4px"}>
          <Icon as={AiOutlineArrowDown} />
        </Box>
      </Button>
    </Link>
  );
}

export default NavbarButton;

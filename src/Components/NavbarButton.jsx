import { Button, Icon, Box } from "@chakra-ui/react";
import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
function NavbarButton({ text, className, color, id }) {
  return (
    <a
      href="https://drive.google.com/uc?export=download&id=11AwYT97eH7iNnqUxyKt9rIBGCzYu4RuK"
      download={
        "https://drive.google.com/uc?export=download&id=11AwYT97eH7iNnqUxyKt9rIBGCzYu4RuK"
      }
    >
      <Button
        className={className}
        id={id}
        // bg={bgcolor}
        // bg={{base:"green",sm:"red",lg:"blue",xl:"green","2xl":"black"}}
        bg="red"
        color={color}
        ml={{ lg: "5px" }}
        mr={{ lg: "15px", xl: "2px", "2xl": "2px" }}
        _hover={{ bg: "black", color: "white" }}
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/11AwYT97eH7iNnqUxyKt9rIBGCzYu4RuK/view"
          )
        }
      >
        <Box>{text}</Box>
        {""}
        <Box ml={"4px"}>
          <Icon as={AiOutlineArrowDown} />
        </Box>
      </Button>
    </a>
  );
}

export default NavbarButton;
// https://drive.google.com/file/d/11AwYT97eH7iNnqUxyKt9rIBGCzYu4RuK/view
// 1920×1080

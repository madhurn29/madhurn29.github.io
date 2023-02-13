import { Button } from "@chakra-ui/react";
import React from "react";

function NavbarButton({ text, className, bgcolor, color, id }) {
  return (
    <Button
      className={className}
      id={id}
      bg={bgcolor || "transparent"}
      color={color || "black"}
      _hover={{ bg: "black", color: "white" }}
    >
      {text}
    </Button>
  );
}

export default NavbarButton;

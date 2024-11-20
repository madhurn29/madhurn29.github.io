import { Button, Icon } from "@chakra-ui/react";
import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
function NavbarButton({ text, className, color, id }) {
  return (
    <Button
      id="resume-button-1"
      className="nav-link resume"
      onClick={() =>
        window.open(
          "https://drive.google.com/file/d/11AwYT97eH7iNnqUxyKt9rIBGCzYu4RuK/view",
          "_blank"
        )
      }
      bg="#ff0000"
      ml="4px"
      mr={{ base: "4px", sm: "0px" }}
      p={{ "2xl": "10px" }}
      color={"White"}
      _hover={{ background: "black" }}
    >
      <a
        id="resume-link-1"
        href="https://drive.google.com/uc?export=download&id=11AwYT97eH7iNnqUxyKt9rIBGCzYu4RuK"
        download={
          "https://drive.google.com/uc?export=download&id=11AwYT97eH7iNnqUxyKt9rIBGCzYu4RuK"
        }
      >
        Resume <Icon as={AiOutlineArrowDown} />
      </a>
    </Button>
  );
}

export default NavbarButton;

{
  /*

<Button
      id="resume-button-1"
      className="nav-link resume"
      onClick={() =>
        window.open(
          "https://drive.google.com/file/d/11AwYT97eH7iNnqUxyKt9rIBGCzYu4RuK/view",
          "_blank"
        )
      }
      bg="#ff0000"
      ml="4px"
      mr={{ base: "4px", sm: "0px" }}
      p={{ "2xl": "10px" }}
      color={"White"}
      _hover={{ background: "black" }}
    >
      <a
        id="resume-link-1"
        href="Madhur_Nadamwar_Resume.pdf"
        download={"Madhur_Nadamwar_Resume.pdf"}
        rel="noreferrer"
        target="_blank"
      >
        Resume
      </a>
    </Button>
*/
}

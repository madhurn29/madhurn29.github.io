import { Box, Image } from "@chakra-ui/react";
import React, { useState } from "react";

function ProjectCard({ imglink }) {
  const [link, setLink] = useState(imglink);
  const handleEnter = () => {
    console.log("handleEnter");
  };
  return (
    <Box border={"1px solid red"}>
      <Image
        onPointerEnter={() => handleEnter()}
        w={{ lg: "80%" }}
        src={link}
      />
    </Box>
  );
}

export default ProjectCard;

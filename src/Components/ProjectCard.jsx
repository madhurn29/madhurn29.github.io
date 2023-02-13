import { Box, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

function ProjectCard({ imglink, title, description }) {
  return (
    <Box
      py="20px"
      border={"1px solid red"}
      display={"flex"}
      alignItems={{ lg: "center" }}
      justifyContent={{ lg: "center" }}
      flexDirection={{ base:"column", sm: "column", lg: "column" }}
    >
      <Box display={"flex"} justifyContent={"center"}>
        <Image w={{base:"60%", lg: "80%" }} src={imglink} />
      </Box>
      <Box border={"1px solid red"} m={{base:"auto"}} w={{base:"60%", lg: "80%" }} display={"flex"} flexDirection={"column"}>
        <Text fontSize={{ lg: "3xl" }}>{title}</Text>
        <Text fontSize={{ lg: "xl" }}>{description}</Text>
        <Text fontSize={{ lg: "xl" }}>
          Tech Stack : HTML | CSS | Javascript
        </Text>
      </Box>
    </Box>
  );
}

export default ProjectCard;

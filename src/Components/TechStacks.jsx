import { Image } from "@chakra-ui/react";
import React from "react";

function TechStacks({ url }) {
  return <Image width={{ lg: "5%" }} src={url} border="none" />;
}

export default TechStacks;
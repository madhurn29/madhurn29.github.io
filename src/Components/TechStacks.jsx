import { Image } from "@chakra-ui/react";
import React from "react";

function TechStacks({ url }) {
  return <Image width={{base:"15%",sm:"15%",md:"10%", lg: "5%" }} src={url} border="none" />;
}

export default TechStacks;

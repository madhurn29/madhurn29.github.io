import { Image } from "@chakra-ui/react";
import React from "react";

function TechStacks({ url }) {
  return <Image  width={{base:"15%",sm:"15%",md:"10%", lg: "10%",xl:"8%","2xl":"6%" }} src={url} border="none" />;
}

export default TechStacks;

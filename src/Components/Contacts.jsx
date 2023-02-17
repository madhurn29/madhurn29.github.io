import { Box, Text } from "@chakra-ui/react";
import React from "react";
import ContactBox from "./ContactBox";
import IconBox from "./IconBox";

function Contacts() {
  return (
    <Box id="contact" h={{ lg: "95vh" }} border={"1px solid re"}>
      <Box
        border={"1px solid blac"}
        display={{ lg: "flex" }}
        flexDirection={{sm:"row",md:"row", lg: "column" }}
        w={{ lg: "80%" }}
        pb={{base:"50px"}}
        m={{ base: "auto", lg: "auto" }}
        justifyContent={{ base: "center", lg: "center" }}
        alignItems={{ base: "center", lg: "center" }}
      >
        <Box border={"1px solid re"} mt={{base:"20px", lg: "50px" }}>
          <Text textAlign={{base:"center"}} fontSize={{ base: "4xl", lg: "6xl" }}>Connect With Me</Text>
        </Box>
        <Box border={"1px solid re"} w={{ lg: "50%" }}>
          <ContactBox />
        </Box>
      </Box>
    </Box>
  );
}

export default Contacts;

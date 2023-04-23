import { Box, Text } from "@chakra-ui/react";
import React from "react";
import ContactBox from "../Components/Contacts/ContactBox";
import ContactForm from "../Components/Contacts/ContactForm";

function Contacts() {
  return (
    <Box id="contact" h={{ lg: "90vh" }} border={"1px solid re"}>
      <Box
        border={"1px solid blac"}
        display={{ lg: "flex" }}
        flexDirection={{ sm: "row", md: "row", lg: "column" }}
        w={{ lg: "80%" }}
        pb={{ base: "50px" }}
        m={{ base: "auto", lg: "auto" }}
        justifyContent={{ base: "center", lg: "center" }}
        alignItems={{ base: "center", lg: "center" }}
      >
        <Box border={"1px solid re"} mt={{ base: "20px", lg: "50px" }}>
          <Text
            textAlign={{ base: "center" }}
            fontSize={{ base: "4xl", lg: "6xl" }}
          >
            Connect with Me
          </Text>
        </Box>
        <Box
          border={"1px solid re"}
          display={"flex"}
          flexDirection={{ base: "column-reverse",sm:"row", md: "row", lg: "row" }}
          m={"20px auto"}
          w={{sm:"80%", md: "80%", lg: "90%" }}
        >
          <ContactBox />
          <ContactForm />
        </Box>
      </Box>
    </Box>
  );
}

export default Contacts;

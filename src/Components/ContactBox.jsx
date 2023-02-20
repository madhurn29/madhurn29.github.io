import { Box, Link, Icon, Circle, Text } from "@chakra-ui/react";
import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";
import SingleContactBox from "./SingleContactBox";

function ContactBox() {
  return (
    <Box
      className="Icon-bar"
      border="1px solid re"
      width={{ base: "75%", sm: "", md: "30%", lg: "75%", xl: "60%" }}
      m={{ base: "20px auto", lg: "20px auto" }}
      display="flex"
      flexDirection={{ base: "column", lg: "column" }}
      gap={{ base: "10px", lg: "30px" }}
    >
      <SingleContactBox
        id="contact-linkedin"
        link={"https://www.linkedin.com/in/madhur-nadamwar"}
        bg={"#0077b5"}
        icon={FaLinkedinIn}
        text="Madhur Nadamwar"
      />
      <SingleContactBox
        id="contact-github"
        link={"https://github.com/madhurn29"}
        bg={"black"}
        icon={FaGithub}
        text="madhurn29"
      />
      <SingleContactBox
        id="contact-email"
        link={"mailto:madhur.nadamwar29@gmail.com"}
        bg={"#ff0000"}
        icon={AiOutlineMail}
        text="madhur.nadamwar29@gmail.com"
      />
      <SingleContactBox
        id="contact-phone"
        link={"tel:+917304127701"}
        bg={"#32d04d"}
        icon={IoIosCall}
        text="+91 7304127701"
      />
    </Box>
  );
}

export default ContactBox;

{
  /* <Link id="contact-github" href="https://github.com/madhurn29" isExternal>
        <Circle
          size={{ lg: "50px" }}
          bg="black"
          color="white"
          _hover={{
            backgroundColor: "white",
            color: "black",
            cursor: "pointer",
          }}
        >
          <Icon as={FaGithub} w={6} h={6} />
        </Circle>
      </Link> */
}

//   <Link
//     id="contact-email"
//     href="mailto:madhur.nadamwar29@gmail.com"
//     isExternal
//   >
//     <Circle
//       size={{ lg: "50px" }}
//       bg="#ff0000"
//       color="white"
//       _hover={{
//         backgroundColor: "white",
//         color: "black",
//         cursor: "pointer",
//       }}
//     >
//       <Icon as={AiOutlineMail} w={6} h={6} />
//     </Circle>
//   </Link>

//   <Link id="contact-phone" href="tel:+917304127701">
//     <Circle
//       size={{ lg: "50px" }}
//       bg="#32d04d"
//       color="white"
//       _hover={{
//         backgroundColor: "white",
//         color: "black",
//         cursor: "pointer",
//       }}
//     >
//       <Icon as={IoIosCall} w={6} h={6} />
//     </Circle>
//   </Link>

import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
} from "@chakra-ui/react";

import emailjs from "@emailjs/browser";
function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const toast = useToast();
  const ShowToast = (title, description, status) => {
    toast({
      title: title,
      description: description,
      position: "top",
      status: status,
      duration: 3000,
      isClosable: true,
    });
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // console.log(process.env.REACT_APP_PORT ," hello");
    // console.log(process.env.REACT_APP_SERVICE_ID);
    if (name === "" || email === "" || message === "") {
      ShowToast("Please fill all the details", "Try again later", "warning");
    } else {
      setLoading(true);
      emailjs
        .send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          {
            user_name: name,
            user_email: email,
            message: message,
          },
          process.env.REACT_APP_PUBLIC_ID
        )
        .then(
          () => {
            setLoading(false);
            ShowToast(
              "Message sent successfully",
              "Thank you for connecting",
              "success"
            );
            setName("");
            setEmail("");
            setMessage("");
          },
          (error) => {
            setLoading(false);
            console.error(error);
            ShowToast("Message sent failed", "Try again later", "error");
          }
        );
    }
  };

  return (
    <Box
      // maxW="lg"
      border={"1px solid blac"}
      w={{ base: "80%", md: "50%", lg: "43%", xl: "50%" }}
      mx="auto"
      // mt={10}
      bg="#005c9f"
      p={4}
      borderRadius="lg"
      boxShadow="lg"
    >
      <FormControl>
        <FormLabel color="white">Name</FormLabel>
        <Input
          type="text"
          bg="white"
          value={name}
          onChange={handleNameChange}
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel color="white">Email</FormLabel>
        <Input
          type="email"
          bg="white"
          value={email}
          onChange={handleEmailChange}
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel color="white">Message</FormLabel>
        <Textarea value={message} bg="white" onChange={handleMessageChange} />
      </FormControl>
      <Button mt={4} colorScheme="whiteAlpha" onClick={handleSubmit}>
        {loading ? "Sending" : "Send"}
      </Button>
    </Box>
  );
}

export default ContactForm;

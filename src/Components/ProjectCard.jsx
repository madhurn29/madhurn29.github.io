import {
  Box,
  Button,
  Image,
  ListItem,
  Text,
  Icon,
  UnorderedList,
  Link,
} from "@chakra-ui/react";
// import { Link } from "react-router-dom";
import TechStacks from "./TechStacks";

import { RiExternalLinkFill } from "react-icons/ri";

function ProjectCard({
  imglink,
  title,
  description,
  techStack_1,
  techStack_2,
  techStack_3,
  techStack_4,
  techStack_5,
  feature_1,
  feature_2,
  feature_3,
  feature_4,
  projectType,
  imageOrder,
  contentOrder,
  live_link,
  github_link,
}) {
  return (
    <Box
      color={"#fff"}
      bg="#4C8DC9"
      py="20px"
      border={"1px solid re"}
      display={"flex"}
      boxShadow={
        "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;"
      }
      // alignItems={{ lg: "center" }}
      justifyContent={{ lg: "center" }}
      flexDirection={{ base: "column", sm: "column", lg: "row" }}
    >
      <Box
        className="ImageBox"
        display={"flex"}
        justifyContent={"center"}
        border={"1px solid re"}
        w={{ lg: "50%" }}
        order={imageOrder}
      >
        <Image
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          w={{ base: "60%", lg: "80%" }}
          src={imglink}
        />
      </Box>
      <Box
        border={"1px solid re"}
        m={{ base: "auto" }}
        w={{ base: "60%", lg: "50%" }}
        display={"flex"}
        flexDirection={"column"}
        p="10px"
        order={contentOrder}
      >
        <Text fontSize={{ lg: "3xl" }}>{title}</Text>
        <Text fontSize={{ lg: "xl" }}>{description}</Text>

        <Box
          className="TechStack_box"
          border={"1px solid blu"}
          mt={{ lg: "10px" }}
          display={"flex"}
          alignItems={{ lg: "center" }}
          justifyContent={{ lg: "space-between" }}
        >
          <Box className="TechStack" w={{ lg: "20%" }}>
            <Text fontSize={{ lg: "xl" }}>Tech Stack -</Text>
          </Box>

          <Box
            className="TechStack_box"
            border={"1px solid re"}
            w={{ base: "80%", lg: "80%" }}
            display={{ base: "flex", sm: "flex", lg: "flex" }}
            gap={{ lg: "10px" }}
          >
            <TechStacks url={techStack_1 || ""} />
            <TechStacks url={techStack_2 || ""} />
            <TechStacks url={techStack_3 || ""} />
            <TechStacks url={techStack_4 || ""} />
            <TechStacks url={techStack_5 || ""} />
          </Box>
        </Box>

        <Box className="Features">
          <Text>Features : </Text>
          <UnorderedList>
            <ListItem>{feature_1}</ListItem>
            <ListItem>{feature_2}</ListItem>
            <ListItem>{feature_3}</ListItem>
            <ListItem>{feature_4}</ListItem>
          </UnorderedList>

          <Text>{projectType} project built and exceuted in 5 days</Text>

          <Box
            border={"1px solid whit"}
            width={{ lg: "30%" }}
            display={{ lg: "flex" }}
            justifyContent={{ lg: "space-between" }}
            mt={{ lg: "20px" }}
          >
            <Button colorScheme={"red"}>
              <Link href={live_link} isExternal>
                Live <Icon as={RiExternalLinkFill} />{" "}
              </Link>
            </Button>

            <Button colorScheme={"red"}>
              <Link href={github_link} isExternal>
                Github <Icon as={RiExternalLinkFill} />{" "}
              </Link>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProjectCard;

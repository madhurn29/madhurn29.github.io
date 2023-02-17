import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Link } from "react-router-dom";
import Tooltip from "react-tooltip";

function GithubStats() {
  return (
    <Box
      mt={{ lg: "100px" }}
      id="stats"
      h={{ lg: "95vh" }}
      border={"1px solid re"}
      py={{ base: "25px" }}
    >
      <Center>
        <Text fontSize={{ base: "4xl", sm: "4xl", lg: "6xl" }}>
          Github Stats
        </Text>
      </Center>
      <Stack mt={{ lg: "40px" }}>
        {/* Calender */}
        <Box w={{ base: "85%" }} m={{ base: "auto" }} border={"1px solid re"}>
          <GitHubCalendar
            class="react-activity-calendar"
            style={{ margin: "auto" }}
            username="madhurn29"
            blockSize={20}
            // hideTotalCount
            // fontSize={{base:15,lg:20}}
          >
            <Tooltip delayShow={20} html />
          </GitHubCalendar>
        </Box>
        {/* Stats */}
        <Spacer />

        <Spacer />
        <Flex
          border="1px solid re"
          mt={{ lg: "100px" }}
          m={{ base: "auto" }}
          w={{ base: "100%", lg: "100%" }}
          direction={{ base: "column" ,lg:"row"}}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Link
            m={"auto"}
            to={
              "https://github-readme-streak-stats.herokuapp.com/?user=madhurn29"
            }
          >
            <Image
            w={{base:"80%", lg:"90%"}}
            m={{ base:"10px auto"}}
              id="github-streak-stats"
              src="https://github-readme-streak-stats.herokuapp.com?user=madhurn29"
            />
          </Link>
          {/* Top language */}
          <Link
            m={"auto"}
            to={
              "https://github-readme-stats.vercel.app/api/top-langs/?username=madhurn29&layout=compact"
            }
          >
            <Image
             w={{base:"85%",lg:"100%"}}
             m={{ base:"10px auto"}}
              id="github-top-langs"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=madhurn29&layout=compact"
            />
          </Link>

          {/* Stats */}
          <Link
            m={"auto"}
            to={"https://github-readme-stats.vercel.app/api?username=madhurn29"}
          >
            <Image
             w={{base:"80%",lg:"90%"}}
             m={{ base:"10px auto"}}
              id="github-stats-card"
              src="https://github-readme-stats.vercel.app/api?username=madhurn29&count_private=true&show_icons=true"
            />
          </Link>
        </Flex>
      </Stack>
    </Box>
  );
}

export default GithubStats;

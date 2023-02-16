import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Link } from "react-router-dom";
import Tooltip from "react-tooltip";

function GithubStats() {
  return (
    <Box mt={{ lg: "100px" }} id="stats" h={{lg:"95vh"}}>
      <Center>
        <Heading>Github Stats</Heading>
      </Center>
      <Stack mt={{ lg: "40px" }}>
        {/* Calender */}
        <GitHubCalendar
          class="react-activity-calendar"
          style={{ margin: "auto" }}
          username="madhurn29"
          blockSize={20}
          fontSize={20}
        >
          <Tooltip delayShow={20} html />
        </GitHubCalendar>
        {/* Stats */}
        <Spacer />
        
        <Spacer />
        <Flex
        
          border="1px solid red"
          mt={{ lg: "100px" }}
          w={"100%"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          <Link
            m={"auto"}
            to={
              "https://github-readme-streak-stats.herokuapp.com/?user=madhurn29"
            }
          >
            <Image
            
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

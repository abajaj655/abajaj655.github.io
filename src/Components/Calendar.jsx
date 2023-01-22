import {
    Box,
    Container,
    Flex,
    Heading,
    Image,
    Link,
    SimpleGrid,
    Stack,
    useColorMode,
    useColorModeValue,
  } from "@chakra-ui/react";
  import React from "react";
  import GitHubCalendar from "react-github-calendar";
  import ReactTooltip from "react-tooltip";
  
  const Calendar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const selectLastHalfYear = (contributions) => {
      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth();
      const shownMonths = 24;
  
      return contributions.filter((day) => {
        const date = new Date(day.date);
        const monthOfDay = date.getMonth();
  
        return (
          date.getFullYear() === currentYear &&
          monthOfDay > currentMonth - shownMonths &&
          monthOfDay <= currentMonth
        );
      });
    };
    return (
      <div>
        <Container maxW={"7xl"}>
          <Heading
            textAlign={"center"}
            textDecor="underline"
            textTransform="uppercase"
            fontSize={{ base: "3xl", sm: "4xl ", lg: "5xl" }}
            fontWeight={600}
          >
            Github
          </Heading>
          <Stack align={"center"} mt={"2rem"}>
            <GitHubCalendar
              username="abajaj655"
              blockSize={15}
              blockMargin={5}
              color="orange"
              fontSize={15}
              // hideTotalCount
              // hideColorLegend
            >
              <ReactTooltip delayShow={20} html />
            </GitHubCalendar>
          </Stack>
          <SimpleGrid
            columns={{ base: 1, xl: 3 }}
            gap={"2rem"}
            mt={16}
            mx={"auto"}
            alignItems={"center"}
          >
            <Box p={"10px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} m="auto">
              <Link
                href="https://github.com/abajaj655"
                boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
              >
                <Image
                  src={`https://github-readme-stats.vercel.app/api?username=abajaj655&show_icons=true&theme=${useColorModeValue(
                    "defolt",
                    "tokyonight"
                  )}`}
                />
              </Link>
            </Box>
            <Box p={"10px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} m="auto">
              <Link href="https://github.com/abajaj655">
                <Image
                  src={`https://github-readme-streak-stats.herokuapp.com?user=abajaj655&theme=${useColorModeValue(
                    "defolt",
                    "tokyonight"
                  )}`}
                />
              </Link>
            </Box>
  
            <Box
              m="auto"
              boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
              width={{ base: "60%", lg: "70%", sm: "50%" }}
              p={"10px"}
            >
              <Link href="https://github.com/abajaj655">
                <Image
                  src={`https://github-readme-stats.vercel.app/api/top-langs/?username=abajaj655&theme=${useColorModeValue(
                    "defolt",
                    "tokyonight"
                  )}`}
                  width={"100%"}
                />
              </Link>
            </Box>
          </SimpleGrid>
        </Container>
      </div>
    );
  };
  
  export default Calendar;
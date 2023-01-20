import { Heading, SimpleGrid, useColorMode, Container } from "@chakra-ui/react";
import React from "react";
import ProjectCard from "./ProjectCard";
const data = [
  {
    id: 1,
    name: "Netmeds.com-Clone",
    image:
      "https://user-images.githubusercontent.com/108894016/196271764-5a1c11f8-c8c1-4a89-acae-8581d68f248d.png",
    description:
      "Netmeds.com is one of India's most trusted pharmacies, dispensing quality medicines at reasonable prices to over 7 million happy customers – PAN India. ",
    responsibility: ["Collaborative", "Pharmacy"],
    TechStack: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    github: "https://github.com/lokeshahire/NetMeds-Clone",
    deployment: "https://netmed-lokesh-alok-ashish-akash-pooja.netlify.app/",
  },
  {
    id: 2,
    name: "Kissflow.com-Clone",
    image:
      "https://bpmapp.com/images/blog/bpm-business-process-management.png?v=1666094118026700853",
    description:
      "Kissflow Digital Workplace is a new-breed cloud platform to manage all kinds of work in one place.",
    responsibility: ["Collaborative", "E-Commerce"],
    TechStack: ["HTML", "CSS", "Javascript", "Local Storage"],
    github: "https://github.com/Durgashankar001/Kissflow.com-Clone",
    deployment:
      "https://moonlit-jelly-60aaa4.netlify.app/",
  },
  {
    id: 3,
    name: "Asos.com clone",
    image:
      "https://iide.co/wp-content/uploads/2022/03/Screen-Shot-2021-02-07-at-04.21.49.png",
    description:
      "ASOS plc is a British online fashion and cosmetic retailer. It offers branded and own label products, including women's wear, men's wear, footwear, accessories and jewelry and beauty products.",
    responsibility: ["Collaborative", "E-Commerce"],
    TechStack: ["CSS", "JavaScript", "React", "Chakra UI", "Axios"],
    github: "https://github.com/mehfoozkhangithub/tangible-robin-3650/tree/main/team_robin",
    deployment: "https://strong-parfait-b1bad8.netlify.app/",
  },
  {
    id: 4,
    name: "Mytheresa clone",
    image:
      "https://www.afashionblog.com/wp-content/uploads/2021/11/Is_Mytheresa_A_Legitimate_Website_3.jpg",
    description:
      "Mytheresa is one of the leading global luxury fashion e-commerce platforms shipping to over 130 countries",
    responsibility: ["Collaborative", "E-Commerce"],
    TechStack: ["CSS", "JavaScript", "React", "Chakra UI", "Axios", "Redux"],
    github: "https://github.com/101beardo/goofy-shock-9631",
    deployment: "https://luminous-swan-cc6644.netlify.app/",
  },
];
const Project = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <Container maxW={"7xl"} id="Project">
        <Heading
          textAlign={"center"}
          textDecor="underline"
          textTransform="uppercase"
          fontSize={{ base: "3xl", sm: "4xl ", lg: "5xl" }}
          fontWeight={600}
        >
          Project
        </Heading>
        <SimpleGrid
          columns={{ base: 1, xl: 2 }}
          gap={"2rem 5rem"}
          mt={16}
          mx={"auto"}
        >
          {data.map((item, index) => (
            <ProjectCard
              key={item.id}
              image={item.image}
              name={item.name}
              index={index}
              description={item.description}
              responsibility={item.responsibility}
              TechStack={item.TechStack}
              github={item.github}
              deployment={item.deployment}
            />
          ))}
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default Project;
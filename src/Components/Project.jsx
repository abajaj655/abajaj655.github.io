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
    name: "Guess the number game",
    image:
      "data:image/png;base64,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",
    description:
      "Guess the Number is a fun educational game that challenges kids to find a number based on greater than or less than feedback.",
    responsibility: ["Individual", "Game"],
    TechStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/abajaj655/number-game",
    deployment: "https://admirable-melomakarona-a47df7.netlify.app/",
  },
  {
    id: 3,
    name: "Kissflow.com-Clone",
    image:
      "https://bpmapp.com/images/blog/bpm-business-process-management.png?v=1666094118026700853",
    description:
      "Kissflow Digital Workplace is a new-breed cloud platform to manage all kinds of work in one place.",
    responsibility: ["Collaborative", "E-Commerce"],
    TechStack: ["HTML", "CSS", "Javascript", "Local Storage"],
    github: "https://github.com/Durgashankar001/Kissflow.com-Clone",
    deployment: "https://moonlit-jelly-60aaa4.netlify.app/",
  },
  {
    id: 4,
    name: "Purplle Clone",
    image:
      "https://user-images.githubusercontent.com/102507444/213928090-cbaf214f-8d71-4e0a-b569-4fc2a0e71889.png",
    description:
      "Purplle is an online operator of an online beauty shopping store created to buy skincare products based on people's hair and skin type an other personal choices.",
    responsibility: ["Collaborative", "E-Commerce"],
    TechStack: ["CSS", "JavaScript", "React", "Redux", "Chakra UI", "Axios", "NodeJS", "ExpressJS", "MongoDB"],
    github:
      "https://github.com/abhiamber/resonant-dinosaurs-925",
    deployment: "https://frontend-eight-tawny-20.vercel.app/",
  },
  {
    id: 5,
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
  {
    id: 6,
    name: "Flipkart clone",
    image:
      "https://allusefulinfo.com/wp-content/uploads/2013/11/flipkart-website.jpg",
    description:
      "Flipkart is the biggest online Indian marketplace competing with the world leader Amazon. Flipkart has been selling a vast range of products online, similar to Amazon.",
    responsibility: ["Individual", "E-Commerce"],
    TechStack: ["CSS", "JavaScript", "React", "Chakra UI", "Axios", "Redux", "NodeJS", "ExpressJS", "MongoDB"],
    github: "https://github.com/abajaj655/flipkart-clone",
    deployment: "https://frontend-psi-sage.vercel.app/",
  }
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

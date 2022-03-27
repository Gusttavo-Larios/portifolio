import React, { useRef } from "react";
import { useTransform, useViewportScroll } from "framer-motion";

import {
  About,
  Avatar,
  Container,
  ContainerIconsTools,
  ContainerProjects,
  ContainerButtonsSocialMedia,
  Presentation,
  People,
  Occupation,
  Section,
  Title,
  IconTool,
} from "./styles/styles.js";

import { projects } from "./projects.js";

import IconGitHub from "./assets/images/github.svg";
import IconLinkedin from "./assets/images/linkedin.svg";
import IconJavaScript from "./assets/images/javascript.svg";
import IconTypeScript from "./assets/images/typescript.svg";
import IconNode from "./assets/images/node.svg";
import IconReact from "./assets/images/react.svg";
import IconMySql from "./assets/images/mysql.svg";
import IconFigma from "./assets/images/figma.svg";
import ButtonMedia from "./components/ButtonMedia/index.js";
import Project from "./components/Project/index.js";

function App() {
  const limitationRef = useRef(null);

  const { scrollYProgress } = useViewportScroll();
  const animationOpacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);

  return (
    <Container>
      <div>
        <People>
          <Avatar
            src="https://avatars.githubusercontent.com/u/72306241?v=4"
            alt="Avatar"
            loading="lazy"
            initial={{ transform: "translateY(-1000px)" }}
            animate={{ transform: "translateY(0px)" }}
            transition={{
              type: "spring",
              stiffness: 12,
              damping: 5,
              bounce: 10,
              duration: 0.5,
            }}
          />
          <Presentation
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "keyframes",
              delay: 0.5,
              duration: 0.5,
            }}
          >
            Olá, eu sou o Gustavo!
          </Presentation>
          <Occupation
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "keyframes",
              delay: 0.5,
              duration: 0.7,
            }}
          >
            Desenvolvedor Front-End
          </Occupation>
          <ContainerButtonsSocialMedia
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "keyframes",
              delay: 0.5,
              duration: 0.9,
            }}
          >
            <ButtonMedia
              icon={IconGitHub}
              label="GitHub"
              link="https://github.com/Gusttavo-Larios"
            />
            <ButtonMedia
              icon={IconLinkedin}
              label="Linkedin"
              link="https://www.linkedin.com/in/gustavo-larios-681258206/"
            />
          </ContainerButtonsSocialMedia>
        </People>

        <Title
          marginTop="12rem"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "keyframes",
            delay: 0.5,
            duration: 1.1,
          }}
        >
          Sobre Mim
        </Title>

        <About
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "keyframes",
            delay: 0.5,
            duration: 1.3,
          }}
        >
          Sou desenvolvedor Front-End. Possuo vivência no
          <br />
          ecossistema JavaScript, mais especificamente nas
          <br />
          ferramentas NodeJS, React e React Native, nesta
          <br />
          última já obtive experiência Profissional.
        </About>

        <ContainerIconsTools
          ref={limitationRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "keyframes",
            duration: 1,
            delay: 0.9,
          }}
        >
          <IconTool
            drag
            dragConstraints={limitationRef}
            src={IconJavaScript}
            alt="JavaScript"
          />
          <IconTool
            drag
            dragConstraints={limitationRef}
            src={IconTypeScript}
            alt="TypeScript"
          />
          <IconTool
            drag
            dragConstraints={limitationRef}
            src={IconNode}
            alt="NodeJS"
          />
          <IconTool
            drag
            dragConstraints={limitationRef}
            src={IconReact}
            alt="React"
          />
          <IconTool
            drag
            dragConstraints={limitationRef}
            src={IconMySql}
            alt="MySql"
          />
          <IconTool
            drag
            dragConstraints={limitationRef}
            src={IconFigma}
            alt="Figma"
          />
        </ContainerIconsTools>
      </div>

      <Section
        style={{
          opacity: animationOpacity,
        }}
      >
        <Title>Projetos</Title>

        <ContainerProjects>
          {projects.map((item, key) => (
            <Project
              key={key}
              image={item.image}
              name={item.name}
              description={item.description}
              language={item.language}
              link={item.link}
            />
          ))}
        </ContainerProjects>
      </Section>
    </Container>
  );
}

export default App;

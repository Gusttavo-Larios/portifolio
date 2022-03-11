import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import {
  Avatar,
  Container,
  FlatList,
  Name,
  Occupation,
  People,
  Project,
  Section,
  TitleSection,
} from "./styles/styles.js";


function App() {
  const [avatar, setAvatar] = useState(null);
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    getDataForGithub();
  }, []);

  async function getDataForGithub() {
    axios
      .get("https://api.github.com/users/Gusttavo-Larios")
      .then((response) => {
        setAvatar(response.data.avatar_url);
      });
    axios
      .get("https://api.github.com/users/Gusttavo-Larios/repos")
      .then((response) => {
        setRepositories(response.data);
      })
  }

  return (
    <Container>
      <People>
        <Avatar src={avatar} alt="Avatar" loading="lazy" />
        <div className="Box-Details-People">
          <Name>Gustavo</Name>
          <Occupation>Desenvolvedor Front-End</Occupation>
          <nav className="Box-Social-Media">
            <a href="https://www.linkedin.com/in/gustavo-larios-681258206/">
              <BsLinkedin
                style={{
                  fontSize: "2.7rem",
                  color: "#fff",
                }}
              />
            </a>
            <a href="https://github.com/Gusttavo-Larios">
              <BsGithub
                style={{
                  fontSize: "2.7rem",
                  color: "#fff",
                }}
              />
            </a>
          </nav>
        </div>
      </People>

      <Section>
        <TitleSection>Projetos</TitleSection>
        <FlatList>
          {repositories.map(
            (item, key) =>
              item.name !== "Gusttavo-Larios" && (
                <Project key={key} href={`${item.html_url}`}>
                  <span className="Name-Project">{item.name}</span>
                  <br />
                  <span className="Language-Project">{item.language}</span>
                </Project>
              )
          )}
        </FlatList>
      </Section>
    </Container>
  );
}

export default App;

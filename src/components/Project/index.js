import React from "react";
import ButtonMedia from "../ButtonMedia";
import {
  Container,
  DescriptionProject,
  ImageProject,
  LanguageProject,
  NameProject,
} from "./styles";

import IconEye from "../../assets/images/eye.svg";

function Project({ image, name, description, language, link }) {
  return (
    <Container>
      <ImageProject src={image} alt={name} />
      <NameProject>{name}</NameProject>
      <DescriptionProject>{description}</DescriptionProject>
      <LanguageProject>{language}</LanguageProject>
      <ButtonMedia icon={IconEye} label="Visualizar" link={link} />
    </Container>
  );
}

export default Project;

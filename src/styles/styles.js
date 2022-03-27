import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  width: 100%;
  padding-top: 10rem;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

export const People = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const Avatar = styled(motion.img)`
  width: 20rem;
  height: 20rem;
  border: 0.2rem solid #fff;
  border-radius: 50%;
  box-shadow: 0 0 10rem 4rem rgba(12, 172, 245, 0.5);
`;

export const Presentation = styled(motion.span)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 4.8rem;
  text-align: center;
  line-height: 5.8rem;
  color: #ffffff;
  margin-top: 4rem;
`;

export const Occupation = styled(motion.span)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-size: 2.3rem;
  line-height: 3.4rem;
  color: #dfdfdf;
`;

export const ContainerButtonsSocialMedia = styled(motion.div)`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  margin-top: 1.5rem;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const Title = styled(motion.h2)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 3.6rem;
  line-height: 4.4rem;
  color: #ffffff;
  margin-top: ${(props) => props.marginTop && props.marginTop};
  text-align: center;
`;

export const About = styled(motion.p)`
  color: #fff;
  font-size: 1.8rem;
  text-align: center;
  font-weight: 300;
  text-align: center;
  margin-top: 3rem;
`;

export const ContainerIconsTools = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 3rem;
  margin-top: 4.5rem;

  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 3rem;
  }
`;

export const IconTool = styled(motion.img)`
  @media (max-width: 900px) {
    margin: 0 auto;
  }
`;

export const Section = styled(motion.section)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #151515;
  margin-top: 8rem;
  padding-top: 5rem;
  padding-bottom: 8rem;
`;

export const ContainerProjects = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10rem;
  margin-top: 6rem;
`;

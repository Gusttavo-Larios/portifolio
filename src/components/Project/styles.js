import styled from 'styled-components'

export const Container = styled.div`
  width: 35rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 400px) {
    width: 20rem;
  }
`;

export const ImageProject = styled.img`
  border-left: 0.5rem solid #0cacf5;
  width: 100%;
`;

export const NameProject = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 2rem;
  line-height: 2.4rem;
  color: #ffffff;
  margin-top: 2rem;
`;

export const DescriptionProject = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-size: 1.8rem;
  line-height: 2.2rem;
  color: #ffffff;
  margin-top: 1.5rem;
`;

export const LanguageProject = styled.span`
  margin-top: 1rem;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.2rem;
  color: #0cacf5;
  margin-top: 3rem;
  margin-bottom: 2rem;
`;
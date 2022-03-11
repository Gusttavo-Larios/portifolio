import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-top: 10rem;
  padding-bottom: 8rem;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
`;

export const People = styled.div`
  display: flex;
  gap: 2.5rem;
  flex-direction: column;
  align-items: center;

  .Box-Details-People {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .Box-Details-People .Box-Social-Media {
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
  }
`;

export const Avatar = styled.img`
  width: 20rem;
  height: 20rem;
  border: 0.2rem solid #fff;
  border-radius: 50%;
`;

export const Name = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 4.8rem;
  line-height: 5.8rem;
  color: #ffffff;
`;

export const Occupation = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-size: 2.3rem;
  line-height: 3.4rem;
  color: #dfdfdf;
`;

export const TitleSection = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 3.6rem;
  line-height: 4.4rem;
  color: #ffffff;
`;

export const Section = styled.section`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  z-index: 2;

  p {
      color: #fff;
      font-size: 1.8rem;
      text-align: center;
      font-weight: 300;
  }
`;

export const FlatList = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const Project = styled.a`
  padding: 2rem 3rem;
  border-radius: 1.5rem;
  background-color: #292929;
  cursor: pointer;
  transition: all .2s ease-in-out;

  :hover {
        transform: scale(1.2);
  }

  .Name-Project {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.4rem;
    color: #ffffff;
  }

  .Language-Project {
    margin-top: 1rem;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.2rem;
    color: #9a9a9a;
  }
`;

export const ImageBackground = styled.img`
  position: absolute;
  top: -2rem;
  right: -5rem;
  width: 50vw;
`;

import styled from 'styled-components'

export const Button = styled.button`
  width: 16.5rem;
  height: 5rem;
  background-color: transparent;
  border-bottom: 0.2rem solid transparent;
  border-top-color: #00d2df;
  border-right-color: #00d2df;
  border-bottom-color: #b700e5;
  border-left-color: #b700e5;
  border-radius: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.2rem;
  color: #ffffff;

  transition: all 0.3s ease-in-out;

  cursor: pointer;

  :hover {
    border-top-color: #0cacf5;
    border-right-color: #0cacf5;
    border-bottom-color: #00d2df;
    border-left-color: #00d2df;
  }
`;
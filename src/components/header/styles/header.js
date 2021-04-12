import styled from "styled-components/macro";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  padding: 0 3rem;
  z-index: 5;

  @media (min-width: 1500px) {
    justify-content: space-between;
  }
`;

export const Title = styled.h3`
  font-size: 36px;
  font-weight: 700;
  font-family: Poppins;
  color: #9e9e9e;
  letter-spacing: 0.35em;
  cursor: pointer;
`;

export const Links = styled.div`
  width: 70%;
  padding-right: 1.5rem;
  display: none;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1500px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Link = styled.h2`
  font-weight: 600;
  font-size: 16px;
  color: #3e3b3b;
  cursor: pointer;
  transition: 0.5s ease all;
  justify-content: center;
  align-items: center;

  &:hover {
    color: #00cc92;
  }
`;

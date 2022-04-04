import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 1.5rem;
  z-index: 5;
  position: relative;
  overflow-x: clip;

  @media (min-width: 800px) {
    justify-content: space-between;
    min-width: 35rem;
    padding: 0 2rem;
  }
  @media (min-width: 1200px) {
    padding: 0 3rem;
  }
`;

export const Title = styled.div`
  cursor: pointer;
  display: flex;
  img {
    min-width: 50%;
    max-width: 250px;
    margin-top: 1em;
    width: 20%;
    height: auto;
    @media (max-width: 800px) {
      width: 80px;
    }
  }
  .mobile-logo {
    display: none;
  }
  @media (max-width: 800px) {
    width: 80px;
    .mobile-logo {
      display: block;
    }
    .desktop-logo {
      display: none;
    }
  }
`;

export const Links = styled.div`
  width: 500px;
  display: none;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 800px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
  }

  @media (min-width: 1000px) {
    width: 70%;
  }

  @media (min-width: 1300px) {
    width: 50%;
  }
`;

export const Link = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 21px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #3e3b3b;
  text-decoration: none;
  transition: 0.5s ease all;

  &:hover {
    color: #67923d;
    text-decoration: none;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  color: #ffffff;
  width: 175px;
  height: 40px;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.5s ease all;
  background: #67923d;

  &:hover {
    background: #67923d;
  }
`;

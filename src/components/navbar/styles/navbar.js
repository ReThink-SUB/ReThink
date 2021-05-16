import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  z-index: 5;
  position: relative;

  @media (min-width: 1300px) {
    justify-content: space-between;
    padding: 0 6rem;
  }
`;

export const Title = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2em;
  img {
    width: 80px;
    height: auto;
    @media (max-width: 1000px) {
      width: 70px;
    }
  }
`;

export const Links = styled.div`
  width: 50%;
  display: none;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1300px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    color: #00cc92;
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
    background: #00cc92;
  }
`;

import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 3rem;
  z-index: 5;
  background: #ffffff;
  box-shadow: 0px 8px 80px rgba(0, 0, 0, 0.05);
  border-radius: 30px;
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
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Link = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 21px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #3e3b3b;
  transition: 0.5s ease all;

  &:hover {
    color: #00cc92;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  color: #ffffff;
  width: 165px;
  height: 40px;
  text-transform: uppercase;
  cursor: pointer;
  background-color: #86b390;
  transition: 0.5s ease all;

  &:hover {
    background: #00cc92;
  }
`;

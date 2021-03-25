import styled from "styled-components/macro";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  padding: 0 5%;
  padding-top: 1.5rem;
  ${"" /* overflow-x: hidden; */}
  ${"" /* overflow-y: scroll; */}
  ${"" /* overflow: hidden; */}
`;

export const Plant = styled.div`
  position: absolute;
  top: -40%;
  left: 20%;

  img {
    height: 490px;
    width: auto;
    transform: rotate(-123.84deg);

    @media (max-width: 1350px) {
      display: none;
    }
  }

  @media (max-width: 1400px) {
    top: -38%;
    left: 35%;
  }
`;

export const Slogan = styled.h2`
  width: 70%;
  font-weight: 600;
  font-size: 30px;
  color: #3e3b3b;
  line-height: 43px;
  padding-left: 0.5rem;
  align-self: flex-start;
  margin-bottom: 4rem;

  span {
    color: #00cc92;
  }

  @media (min-width: 400px) {
    width: 90%;
    font-size: 35px;
  }

  @media (min-width: 100px) {
    width: 90%;
    font-size: 44px;
    line-height: 55px;
  }

  @media (min-width: 1550px) {
    margin-bottom: 3.5rem;
    font-size: 48px;
  }
`;

export const Inputs = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    position: absolute;
    right: -35%;
    top: 0;
    width: 243px;
    height: auto;

    @media (min-width: 1200px) {
      right: -25%;
    }

    @media (min-width: 1350px) {
      transform: rotate(56.16deg);
      top: 70%;
      right: -10%;
    }

    @media (min-width: 1550px) {
      top: 75%;
    }
  }

  @media (min-width: 700px) {
    width: 80%;
  }

  @media (min-width: 1200px) {
    width: 70%;
  }

  @media (min-width: 1550px) {
    width: 60%;
  }

  @media (min-width: 1600px) {
    width: 55%;
  }
`;

export const Input = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 2rem;

  input {
    width: 100%;
    height: 55px;
    background: #ffffff;
    border: 2px solid #00cc92;
    border-radius: 25px;
    outline: none;
    font-size: 16px;
    color: #00cc92;
    filter: drop-shadow(4px 7px 9px rgba(0, 0, 0, 0.25));
    padding: 0 1.3rem;
    z-index: 2;

    &::placeholder {
      color: #00cc92;
    }
  }

  img {
    position: absolute;
    top: 0;
    right: 0;
    width: 44px;
    z-index: 1;
    transform: rotate(0deg);

    @media (min-width: 1200px) {
      display: none;
    }
  }
`;

export const MessageInput = styled.div`
  position: relative;
  width: 100%;

  textarea {
    width: 100%;
    height: 229px;
    background: #ffffff;
    border: 2px solid #00cc92;
    border-radius: 25px;
    outline: none;
    font-size: 16px;
    color: #00cc92;
    filter: drop-shadow(4px 7px 9px rgba(0, 0, 0, 0.25));
    padding: 0 1.3rem;
    padding-top: 5%;
    display: flex;

    &::placeholder {
      color: #00cc92;
    }
  }

  img {
    position: absolute;
    top: 0;
    right: 0;
    width: 44px;
    height: auto;
    transform: rotate(0deg);

    @media (min-width: 1200px) {
      display: none;
    }
  }
`;

export const Label = styled.p`
  font-size: 16px;
  color: #1f2421;
  margin-bottom: 2%;
  padding-left: 0.3rem;
`;

export const Button = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 2;
  margin-top: 2.5rem;

  button {
    width: 128px;
    height: 41px;
    outline: none;
    border: none;
    background: #86b390;
    box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
    border-radius: 30px;
    cursor: pointer;
    color: #ffffff;
    margin-bottom: 10%;
    transition: 0.5s ease all;
    margin: 0 auto;

    &:hover {
      background: #00cc92;
    }
  }

  @media (min-width: 1300px) {
    width: 55%;
    justify-content: flex-end;
  }
`;

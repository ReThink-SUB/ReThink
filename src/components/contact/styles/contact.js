import styled from "styled-components/macro";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  padding: 0 5%;
  padding-top: 5%;
  ${"" /* overflow-x: hidden; */}
  ${"" /* overflow-y: scroll; */}
`;

export const Slogan = styled.h2`
  width: 70%;
  height: 20%;
  font-weight: 600;
  font-size: 30px;
  color: #3e3b3b;
  line-height: 43px;
  padding-left: 5%;

  span {
    color: #00cc92;
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
  }
`;

export const Input = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 10%;

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
  }
`;

export const Label = styled.p`
  font-size: 16px;
  color: #1f2421;
  margin-bottom: 2%;
  padding-left: 3%;
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

import styled from "styled-components/macro";

export const Button = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    font-size: 0.75rem;
    border-radius: 100px;
    border: none;
    opacity: 0.5;
  button {
    width: 3rem;
    height: 41px;
    outline: none;
    border: none;
    background: #86b390;
    box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
    border-radius: 30px;
    cursor: pointer;
    backgroun-color: #ffffff;
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
    border-radius: 100px;
  }
`;
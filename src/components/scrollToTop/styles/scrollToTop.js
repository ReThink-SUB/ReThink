import styled from "styled-components/macro";

export const Button = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    font-size: 0.75rem;
    border-radius: 100px;
    border: none;
    opacity: 0.5;
    z-index: 300;
  button {
    width: 3rem;
    height: 3rem;
    outline: none;
    border: none;
    background: #67923d;
    box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
    border-radius: 60px;
    cursor: pointer;
    backgroun-color: #ffffff;
    margin-bottom: 10%;
    transition: 0.5s ease all;
    margin: 0 auto;
  }

  img {
    height: auto;
    width: 1.5rem;  
  }

  @media (min-width: 1200px) {
    display: none;
    width: 55%;
    justify-content: flex-end;
  }
`;
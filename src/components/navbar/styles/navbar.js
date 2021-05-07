import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: 9vh;
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

export const Link = styled.a`
  font-size: .75em;
  font-weight: 600;
  color: #000000;
  letter-spacing: .8px;
  margin-bottom: 2.5px;

  &:hover {
    color: #67923D;
  }
`;

export const Signup = styled.div`
  display: flex;
  justify-content: flex-end;
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

  button {
    width: 16.5em;
    height: 2.8em;
    color: #ffffff;
    border-radius: 6px;
    font-size: .7em;
    font-weight: 700;
    letter-spacing: .5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: #67923D;

    i {
      font-size: 1.2em;
      color: #ffffff;
      margin-left: 1em;
    }
  }
`;

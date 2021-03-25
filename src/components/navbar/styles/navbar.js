import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: 9vh;
  display: flex;
  padding: 0 1rem;
`;

export const Logo = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 1rem;

  img {
    width: 51px;
    height: auto;
    margin-right: 1.5rem;
  }

  h3 {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    letter-spacing: 8px;
    color: #c0c0c0;
  }
`;

export const Links = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Link = styled.a`
  font-size: .8em;
  font-weight: 600;
  color: #666666;
  letter-spacing: 1px;
  margin-bottom: 2.5px;

  &:hover {
    border-bottom: 2px solid #00cc92;
  }
`;

export const Signup = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 2em;

  button {
    width: 8em;
    height: 38px;
    color: #000000;
    border: #C0C0C0 solid;
    border-radius: 5px;
    font-size: .85em;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    i {
      font-size: 1rem;
      color: #000000;
      margin-left: 1rem;
    }
  }
`;

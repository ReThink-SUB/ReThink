import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: 9vh;
  display: flex;
  padding: 3em .5em;
`;

export const Logo = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;

  img {
    width: 4.5em;
    height: auto;
  }
`;

export const Links = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  margin-left: 2em;
  margin-right: 1em;

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

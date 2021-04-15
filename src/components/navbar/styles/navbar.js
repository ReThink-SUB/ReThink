import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: 9vh;
  display: flex;
  padding: 3em 1rem;
`;

export const Logo = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 1em;

  img {
    width: 4.5em;
    height: auto;
    margin-right: 1.5rem;
  }
`;

export const Links = styled.div`
  width: 36%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  &.active& {
    border-bottom: 2px solid #00cc92;
  }
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
  width: 19%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 2em;

  button {
    width: 16em;
    height: 36px;
    color: #ffffff;
    padding: 0 2em;
    border-radius: 8px;
    font-size: .8em;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: #67923D;

    i {
      font-size: 1rem;
      color: #ffffff;
      margin-left: 1rem;
    }
  }
`;

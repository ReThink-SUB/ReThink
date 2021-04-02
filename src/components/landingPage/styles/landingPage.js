import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const LeftSect = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 8rem;
  padding-top: 3rem;
`;

export const RightSect = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: rgba(220, 255, 245, 0.85);
  position: relative;
`;

export const Navbar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
`;

export const Links = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 6rem;
`;

export const Link = styled.h2`
  font-weight: 600;
  font-size: 16px;
  color: #3e3b3b;
  cursor: pointer;
  transition: 0.5s ease all;
  justify-content: center;
  align-items: center;

  &:hover {
    color: #00cc92;
  }
`;

export const CardOne = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 230px;
  height: 295px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border-radius: 30px;
  box-shadow: 0px 10px 60px rgba(57, 57, 57, 0.1);

  img {
    width: 175px;
    height: auto;
    border-radius: 50%;
    box-shadow: 0px 10px 60px rgba(57, 57, 57, 0.1);
  }

  h2 {
    font-weight: 600;
    font-size: 13px;
    color: #1f2421;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      font-weight: normal;
      font-size: 10px;
      color: #00cc92;
    }

    i {
      font-size: 13px;
      color: #00cc92;
    }
  }
`;

export const CardTwo = styled.div`
  position: absolute;
  top: 20%;
  left: 0;
  width: 230px;
  height: 295px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border-radius: 30px;
  box-shadow: 0px 10px 60px rgba(57, 57, 57, 0.1);

  img {
    width: 175px;
    height: auto;
    border-radius: 50%;
    box-shadow: 0px 10px 60px rgba(57, 57, 57, 0.1);
  }

  h2 {
    font-weight: 600;
    font-size: 13px;
    color: #1f2421;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      font-weight: normal;
      font-size: 10px;
      color: #00cc92;
    }

    i {
      font-size: 13px;
      color: #00cc92;
    }
  }
`;

export const CardThree = styled.div`
  position: absolute;
  top: 45%;
  right: 0;
  width: 230px;
  height: 295px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border-radius: 30px;
  box-shadow: 0px 10px 60px rgba(57, 57, 57, 0.1);

  img {
    width: 175px;
    height: auto;
    border-radius: 50%;
    box-shadow: 0px 10px 60px rgba(57, 57, 57, 0.1);
  }

  h2 {
    font-weight: 600;
    font-size: 13px;
    color: #1f2421;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      font-weight: normal;
      font-size: 10px;
      color: #00cc92;
    }

    i {
      font-size: 13px;
      color: #00cc92;
    }
  }
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 42px;
  font-family: Poppins;
  color: #9e9e9e;
  letter-spacing: 0.35em;
  margin-bottom: 3.5rem;
`;

export const SubTitle = styled.h3`
  font-weight: 800;
  font-size: 56px;
  color: #00cc92;
  width: 50%;
  margin-bottom: 2.5rem;
`;

export const Description = styled.p`
  font-weight: 500;
  font-size: 19px;
  color: #828282;
  line-height: 30px;
  width: 50%;
  margin-bottom: 3rem;
`;

export const Button = styled.button`
  width: 207px;
  height: 48px;
  background: #3e3b3b;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fffffc;
  font-weight: bold;
  font-family: Roboto;
  cursor: pointer;
  transition: 0.5s ease all;
  box-shadow: 0px 10px 60px rgba(57, 57, 57, 0.1);

  &:hover {
    background: #00cc92;
  }
`;

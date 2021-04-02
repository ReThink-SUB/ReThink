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
  margin-bottom: 6rem;
`;

export const Links = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  top: 11%;
  right: 18%;
  width: 265px;
  height: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border-radius: 30px;
  box-shadow: 0px 10px 60px rgba(57, 57, 57, 0.1);
  padding: 0.8rem 0;
  z-index: 3;

  @media (max-width: 1650px) {
    width: 245px;
    height: 314px;
  }

  img {
    width: 195px;
    height: auto;
    border-radius: 50%;
    box-shadow: 0px 10px 60px rgba(57, 57, 57, 0.1);
    margin-bottom: 3rem;

    @media (max-width: 1650px) {
      margin-bottom: 2rem;
    }
  }

  h2 {
    font-weight: 600;
    font-size: 19px;
    color: #1f2421;
    margin-bottom: 0.5rem;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      font-weight: normal;
      font-size: 13px;
      color: #00cc92;
      margin-right: 0.6rem;
    }

    i {
      font-size: 15px;
      color: #00cc92;
      margin-right: 0.4rem;
    }
  }
`;

export const CardTwo = styled.div`
  position: absolute;
  top: 30%;
  left: -15%;
  width: 265px;
  height: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border-radius: 30px;
  box-shadow: 0px 10px 60px rgba(57, 57, 57, 0.1);
  padding: 0.8rem 0;

  @media (max-width: 1650px) {
    width: 245px;
    height: 314px;
  }

  img {
    width: 195px;
    height: auto;
    border-radius: 50%;
    box-shadow: 0px 10px 60px rgba(57, 57, 57, 0.1);
    margin-bottom: 3rem;

    @media (max-width: 1650px) {
      margin-bottom: 2rem;
    }
  }

  h2 {
    font-weight: 600;
    font-size: 19px;
    color: #1f2421;
    margin-bottom: 0.5rem;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      font-weight: normal;
      font-size: 13px;
      color: #00cc92;
      margin-right: 0.6rem;
    }

    i {
      font-size: 15px;
      color: #00cc92;
      margin-right: 0.4rem;
    }
  }
`;

export const CardThree = styled.div`
  position: absolute;
  top: 55%;
  right: 15%;
  width: 265px;
  height: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border-radius: 30px;
  box-shadow: 0px 10px 60px rgba(57, 57, 57, 0.1);
  padding: 0.8rem 0;

  @media (max-width: 1650px) {
    width: 245px;
    height: 314px;
  }

  img {
    width: 195px;
    height: auto;
    border-radius: 50%;
    box-shadow: 0px 10px 60px rgba(57, 57, 57, 0.1);
    margin-bottom: 3rem;

    @media (max-width: 1650px) {
      margin-bottom: 2rem;
    }
  }

  h2 {
    font-weight: 600;
    font-size: 19px;
    color: #1f2421;
    margin-bottom: 0.5rem;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      font-weight: normal;
      font-size: 13px;
      color: #00cc92;
      margin-right: 0.6rem;
    }

    i {
      font-size: 15px;
      color: #00cc92;
      margin-right: 0.4rem;
    }
  }
`;

export const Ellipse = styled.div`
  position: absolute;
  top: 42%;
  right: -4%;
  z-index: 5;

  img {
    width: 537px;
    height: auto;
  }
`;

export const SmallEllipse = styled.div`
  position: absolute;
  top: 35%;
  right: 5%;
  z-index: 1;

  img {
    width: 177px;
    height: auto;
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

  @media (max-width: 1650px) {
    font-size: 52px;
  }
`;

export const Description = styled.p`
  font-weight: 500;
  font-size: 19px;
  color: #828282;
  line-height: 30px;
  width: 50%;
  margin-bottom: 3rem;

  @media (max-width: 1650px) {
    font-size: 18px;
  }
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

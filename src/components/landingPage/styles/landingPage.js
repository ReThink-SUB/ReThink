import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow-x: clip;
`;

export const LeftSect = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 2%;

  @media (max-width: 1200px) {
    width: 100%;
    margin: 0
    height: 100%;
    margin-top: auto;
    margin-bottom: auto;
    padding: 2em;
  }
`;

export const RightSect = styled.div`
  width: 45%;
  height: auto;
  display: flex;
  flex-direction: row;
  // background: rgba(220, 255, 245, 0.85);
  margin-top: 2em;
  @media (max-width: 1200px) {
    display: none;
  }
  postion: relative;
  justify-content: space-around;
`;

export const InnerSect = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  postion: relative;
  justify-content: space-between;
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
  width: 265px;
  height: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border-radius: 30px;
  box-shadow: 0px 10px 60px rgba(57, 57, 57, 0.1);
  padding: 0.8rem 0;
  margin-top: 40%;

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

export const CardSmall = styled.div`
  display: none;
  
  @media (max-width: 1200px) {
    width: 180px;
    height: 240px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #ffffff;
    border-radius: 30px;
    box-shadow: 0px 10px 60px rgba(57, 57, 57, 0.1);
    padding: 1.2rem 0;
    z-index: 3;
  }

  img {
    width: 140px;
    height: auto;
    border-radius: 50%;
    box-shadow: 0px 10px 60px rgba(57, 57, 57, 0.1);
    margin-bottom: 1rem;
  }

  h2 {
    font-weight: 600;
    font-size: 16px;
    color: #1f2421;
    margin-bottom: 0.5rem;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      font-weight: normal;
      font-size: 10px;
      color: #00cc92;
      margin-right: 0.6rem;
    }

    i {
      font-size: 11px;
      color: #00cc92;
      margin-right: 0.2rem;
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
  font-weight: 1000;
  font-size: 40px;
  color: #67923D;
  margin: 2em 0rem 2.5rem 5rem;

  @media (max-width: 1200px) {
    font-size: 24px;
    margin: 1.2em 0em 0.5em 0em;
  }

`;

export const Description = styled.p`
  font-weight: 600;
  font-size: 19px;
  color: #828282;
  line-height: 30px;
  width: 40%;
  margin: 0em 0rem 0rem 5rem;

  @media (max-width: 1200px) {
    font-size: 18px;
    margin: 0em;
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

export const CirclePattern1 = styled.div`
  position: absolute;
  top: 0;
  margin-left: 80%;
`;

export const CirclePattern2 = styled.div`
  position: absolute;
  top: 0;
  margin-left: 80%;
`;

export const RightCard = styled.div`
  position: relative;
  img:nth-child(2) {
    position: absolute;
    top: 0;
    margin-left: 80%;
  }
`;

export const LeftCard = styled.div`
  position: relative;
  img:nth-child(2) {
    position: absolute;
    margin-top: 25%;
  }
`;

export const MobileCard = styled.div`
  position: relative;
`;

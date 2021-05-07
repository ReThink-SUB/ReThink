import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  background: #ffffff;
  padding: 0 1.5rem;
`;

export const Side = styled.div`
  width: 14%;
  height: 100%;
  background: rgba(0, 0, 0, 0.02);
  ${"" /* background: red; */}
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 16%;
  padding: 10rem 0;

  @media (max-width: 1050px) {
    display: none;
    width: 0%;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  ${"" /* @media (max-width: 1050px) {
    display: none;
  } */}
`;

export const Link = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #c4c4c4;
  cursor: pointer;
  transition: 0.5s ease all;
  margin: 2.2rem 0;
  display: list-item; /* This has to be "list-item"                                               */
  list-style-type: disc; /* See https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type     */
  list-style-position: inside;

  &:hover {
    font-size: 17px;
    color: #67923d;
  }

  @media (max-width: 1200px) {
    font-size: 14px;

    &:hover {
      font-size: 15px;
      color: #67923d;
    }
  }
`;

export const Main = styled.div`
  width: 86%;
  display: flex;
  flex-direction: column;
  padding: 0 2rem;

  @media (max-width: 1550px) {
    padding: 0 1rem;
  }

  @media (max-width: 1050px) {
    width: 100%;
  }
`;

export const AboutSec = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 5rem;
  padding-bottom: 10rem;
`;

export const Images = styled.div`
  width: 50%;
  height: 100%;
  position: relative;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Image = styled.div`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};

  img {
    height: auto;
    width: ${({ width }) => width};
  }
`;

export const IceCream = styled.div`
  position: absolute;
  top: 2%;
  left: 10%;

  @media (max-width: 1200px) {
    top: 8%;
  }

  img {
    height: auto;
    width: 200px;

    @media (max-width: 1400px) {
      width: 180px;
    }

    @media (max-width: 1200px) {
      width: 160px;
    }

    @media (max-width: 930px) {
      width: 140px;
    }
  }
`;

export const Water = styled.div`
  position: absolute;
  top: 23%;
  left: 51%;

  @media (max-width: 1670px) {
    left: 50%;
  }

  @media (max-width: 1200px) {
    top: 32%;
  }

  img {
    height: auto;
    width: 120px;

    @media (max-width: 1400px) {
      width: 100px;
    }

    @media (max-width: 1200px) {
      width: 80px;
    }
  }
`;

export const ToothBrush = styled.div`
  position: absolute;
  top: 70%;
  left: 18%;

  @media (max-width: 1670px) {
    left: 23%;
  }

  @media (max-width: 1200px) {
    top: 58%;
  }

  img {
    height: auto;
    width: 200px;

    @media (max-width: 1400px) {
      width: 180px;
    }

    @media (max-width: 1200px) {
      width: 160px;
    }

    @media (max-width: 930px) {
      width: 140px;
    }
  }
`;

export const Circles = styled.div`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};

  img {
    width: 51px;
    height: auto;
  }

  @media (max-width: 1670px) {
    ${({ left }) => `left: calc(${left} + 70px)`};
  }

  @media (max-width: 1150px) {
    ${({ left }) => `left: calc(${left} + 90px)`};
  }
`;

export const SecCircles = styled.div`
  position: absolute;
  top: 40%;
  left: 26.1%;

  img {
    width: 51px;
    height: auto;

    @media (max-width: 1400px) {
      width: 45px;
    }
  }

  @media (max-width: 1700px) {
    left: 29%;
  }

  @media (max-width: 1650px) {
    left: 33%;
  }

  @media (max-width: 1450px) {
    left: 37%;
  }

  @media (max-width: 1300px) {
    left: 65%;
  }

  @media (max-width: 800px) {
    left: 75%;
  }
`;

export const Text = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 10rem;

  @media (max-width: 1550px) {
    padding-right: 8rem;
  }

  @media (max-width: 1150px) {
    padding-right: 5rem;
  }

  @media (max-width: 800px) {
    width: 100%;
    padding: 0 5rem;
    text-align: center;
  }

  @media (max-width: 550px) {
    padding: 0 2.5rem;
  }
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 52px;
  letter-spacing: 0.035em;
  color: #67923d;
  margin-bottom: 2.5rem;

  @media (max-width: 1299px) {
    font-size: 44px;
  }

  @media (max-width: 930px) {
    font-size: 36px;
  }
`;

export const Heading = styled.h2`
  font-style: italic;
  font-weight: 800;
  font-size: 30px;
  letter-spacing: 0.035em;
  color: #585858;
  margin-bottom: 2rem;
  line-height: 40px;

  @media (max-width: 1299px) {
    font-size: 29px;
  }

  @media (max-width: 930px) {
    font-size: 26px;
  }
`;

export const Description = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  color: #828282;
  line-height: 25px;
  margin-bottom: 2rem;
  width: 70%;

  @media (max-width: 1550px) {
    width: 80%;
  }

  @media (max-width: 1299px) {
    font-size: 16px;
    width: 90%;
  }

  @media (max-width: 1150px) {
    width: 100%;
  }
`;

export const SecDescription = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.025em;
  color: #6a6565;
  margin-bottom: 2.5rem;
  width: 40%;

  @media (max-width: 800px) {
    width: 70%;
  }
`;

export const SubSec = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    text-align: center;
    align-items: center;
  }
`;

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;

export const Card = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  margin: 2rem 1rem;
  position: relative;
  padding: 1.5rem 0;

  @media (max-width: 1300px) {
    justify-content: center;
  }

  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background: ${({ background }) => background};
  width: 207px;
  padding: 1.9rem 0;
  box-shadow: 0px 4px 45px rgba(57, 57, 57, 0.06);
  border-radius: 30px;
  margin-right: 2.5rem;

  @media (max-width: 1400px) {
    width: 197px;
  }

  @media (max-width: 1300px) {
    width: 230px;
    padding: 2.3rem;
  }

  @media (max-width: 750px) {
    width: 207px;
    padding: 1.9rem 0;
  }

  img {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    object-fit: cover;
    filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.15));
    margin-bottom: 1rem;

    @media (max-width: 1400px) {
      width: 120px;
      height: 120px;
    }

    @media (max-width: 1300px) {
      width: 130px;
      height: 130px;
    }
  }

  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #6a6565;
    margin-bottom: 0.5rem;
  }

  p {
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    color: ${({ color }) => color};
  }
`;

export const TextArea = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;

  @media (max-width: 1300px) {
    display: none;
  }

  p {
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 17px;
    letter-spacing: 0.025em;
    color: #6a6565;

    @media (max-width: 1400px) {
      font-size: 12px;
    }
  }

  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 1rem 0;

    img {
      width: 15px;
      height: auto;
      margin: 0 1rem;
      cursor: pointer;
    }
  }
`;

export const InvolvedSec = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 8rem 0;
`;

export const SecTitle = styled.h3`
  font-style: normal;
  font-weight: 900;
  font-size: 25px;
  letter-spacing: 0.035em;
  color: #67923d;
  margin-bottom: 2rem;
`;

export const Btn = styled.button`
  background: #67923d;
  width: 128px;
  height: 41px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 45px rgba(57, 57, 57, 0.06);
  border-radius: 10px;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
  color: #ffffff;
  cursor: pointer;
  transition: 0.5s ease all;

  &:hover {
    background: #8cce4b;
  }
`;

export const OtherClubsSec = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5rem 0 7rem 0;
`;

export const ClubCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`;

export const ClubCard = styled.div`
  width: 236px;
  height: 305px;
  background: #ffffff;
  box-shadow: 0px 4px 45px rgba(57, 57, 57, 0.06);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 3rem;
`;

export const ClubImage = styled.div`
  width: 100%;
  height: 55%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ClubDescription = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
  opacity: 0.75;
  text-align: center;
  width: 85%;
  margin-bottom: 0.5rem;
`;

export const ClubName = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  /* identical to box height */
  color: #1f2421;
  opacity: 0.75;
  margin: 0.5rem 0;
  margin-top: 1rem;
`;

export const LearnMore = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 11px;
  /* identical to box height */
  color: #67923d;
  opacity: 0.75;
  cursor: pointer;
  margin-top: 0.8rem;
`;

export const LocalOrgsSec = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 7rem 0;
`;

export const Organizations = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
`;

export const Organization = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 210px;
    height: 210px;
    border-radius: 50%;
  }

  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    color: #1f2421;
  }
`;

export const WeeklySec = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 5rem 0;
`;

export const FeatureArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Feature = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 45px rgba(57, 57, 57, 0.06);
  border-radius: 30px;
  width: 750px;
  height: 390.48px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageSec = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextSec = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-style: italic;
    font-weight: bold;
    font-size: 17px;
    line-height: 20px;
    color: #585858;

    span {
      text-decoration-line: underline;
      color: #a9d0a9;
    }
  }

  h2 {
    font-weight: bold;
    font-size: 17px;
    color: #585858;
  }

  p {
    font-weight: 500;
    font-size: 17px;
    line-height: 20px;
  }
`;

export const Arrow = styled.div`
  img {
    width: 24px;
    height: auto;
    transform: ${({ rotate }) => rotate};
  }
`;

export const Donate = styled.p`
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;

  color: #67923d;
`;

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  background: #ffffff;
  padding: 0 0.3rem;
  margin: 0;
  overflow-x: hidden;
  margin-bottom: 3rem;

  @media (min-width: 800px) {
    padding: 0 1.5rem;
    margin-bottom: 5rem;

    padding: 0;
    overflow-x: unset;
  }
`;

export const Side = styled.div`
  width: 14%;
  height: 100%;
  background: rgba(0, 00, 00, 0.04);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  border-radius: 30px;
  top: 35%;
  left: 1em;
  @media (max-width: 1050px) {
    display: none;
    width: 0%;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  a {
    justify-content: left;
  }
  ${
    "" /* @media (max-width: 1050px) {
    display: none;
  } */
  }
`;

export const LinkS = styled.p`
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
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 3rem;

  margin: 0;
  overflow-x: hidden;

  @media (min-width: 800px) {
    padding: 0 3rem;
  }

  @media (min-width: 1050px) {
    width: 86%;
    padding: 0 2rem;
  }
`;

export const AboutSec = styled.div`
  display: flex;
  align-items: left;
  width: 100%;
  // margin: 0 auto;
  position: relative;
  padding-left: 1.6rem;

  @media (max-width: 799px) {
    max-width: 400px;
  }

  @media (min-width: 800px) {
    justify-content: center;
    align-items: center;
    justify-content: center;
    align-items: center;
    padding-top: 5rem;
    padding-bottom: 2.5rem;

    flex-direction: unset;
  }

  @media (min-width: 1300px) {
    // height: 100%;
    margin-bottom: 3rem;
  }

  flex-direction: column;
  // padding-bottom: 3.5rem;
  // align-content: left;

  // @media (min-width: 800px) {
  //   text-align: center;
  //   align-items: center;
  //   padding-left: unset;
  //   padding-bottom: 3rem;

  //   margin: 0 2rem;
  // }

  // @media (min-width: 1050px) {
  //   left: 2rem;
  //   margin: 0 2rem;
  // }
`;

export const Images = styled.div`
  height: 387px;
  left: 50%;
  position: absolute;
  width: 50%;

  @media (max-width: 338px) {
    display: none;
  }

  @media (min-width: 450px) {
    left: 60%;
  }

  @media (min-width: 550px) {
    left: 80%;
  }

  @media (min-width: 800px) {
    width: 50%;
    height: 100%;
    position: relative;

    top: unset;
    left: unset;
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
  height: 220px;
  width: 113px;
  z-index: 1;
  padding-left: 1rem;

  @media (min-width: 800px) {
    z-index: unset;
  }

  img {
    height: 220px;
    width: 113px;
    position: absolute;
    top: 1rem;
    border-radius: 30px;

    @media (min-width: 800px) {
      height: auto;
      width: 140px;
      top: 2%;
      left: 10%;
    }

    @media (min-width: 930px) {
      width: 160px;
    }

    @media (min-width: 1200px) {
      width: 180px;
    }

    @media (min-width: 1440px) {
      width: 201px;
      height: 391px;
      top: unset;
    }
  }
`;

export const Water = styled.div`
  position: absolute;
  top: 88%;
  left: 48%;
  z-index: 0;

  @media (min-width: 800px) {
    top: 30%;
    left: 61%;
    z-index: unset;
  }

  @media (min-width: 1200px) {
    top: 35%;
  }

  @media (min-width: 1440px) {
    top: 30%;
    left: 52%;
  }

  img {
    position: absolute;
    height: 167px;
    width: 88px;
    bottom: 90%;
    border-radius: 30px;

    @media (min-width: 800px) {
      height: auto;
      width: 80px;

      bottom: unset;
      border-radius: unset;
    }

    @media (min-width: 930px) {
      width: 100px;
    }

    @media (min-width: 1400px) {
      width: 120px;
    }
  }
`;

export const ToothBrush = styled.div`
  position: absolute;
  display: none;

  @media (min-width: 800px) {
    top: 63%;
    left: 1%;

    display: unset;
  }

  @media (min-width: 1150px) {
    top: 67%;
    left: 15%;
  }

  @media (min-width: 1440px) {
    top: 65%;
  }

  img {
    position: absolute;
    height: auto;
    width: 140px;

    @media (min-width: 800px) {
      width: 160px;
    }

    @media (min-width: 1200px) {
      width: 180px;
    }

    @media (min-width: 1440px) {
      width: 200px;
    }
  }
`;

export const Circles = styled.div`
  position: absolute;
  z-index: 3;
  top: 39%;
  left: 49%;
  padding-left: 1.5rem;

  @media (min-width: 800px) {
    padding-left: unset;
    ${({ top }) => `top: calc(${top} - 60px)`};
    ${({ left }) => `left: calc(${left} + 50px)`};
  }

  @media (min-width: 900px) {
    padding-left: unset;
    ${({ top }) => `top: calc(${top} - 70px)`};
    ${({ left }) => `left: calc(${left} + 50px)`};
  }

  @media (min-width: 1150px) {
    ${({ top }) => `top: calc(${top} - 30px)`};
    ${({ left }) => `left: calc(${left} + 20px)`};
  }

  @media (min-width: 1440px) {
    top: ${({ top }) => top};
    left: ${({ left }) => left};
  }

  img {
    width: 40px;
    height: auto;

    @media (min-width: 800px) {
      width: 51px;
    }
  }
`;

export const SecCircles = styled.div`
  position: absolute;
  top: 40%;
  left: 2%;
  display: none;

  img {
    width: 54px;
    height: 39px;

    @media (min-width: 1400px) {
      width: 45px;
    }
  }

  @media (min-width: 1300px) {
    left: 43%;
    display: block;
  }

  @media (min-width: 1400px) {
    left: 40%;
  }
`;

export const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  align-content: left;
  position: relative;

  // padding-left: 2.5rem;
  @media (min-width: 800px) {
    padding-bottom: unset;
    padding-left: unset;
    align-content: unset;
    position: unset;
    left: unset;

    width: 90%;
    text-align: unset;
    // justify-content: center;
  }

  @media (min-width: 950px) {
    width: 85%;
  }

  @media (min-width: 1550px) {
    // padding-right: 10rem;
  }
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  letter-spacing: 0.035em;
  color: #67923d;
  margin-bottom: 1.5rem;

  text-align: left;
  width: 80vw;

  @media (min-width: 800px) {
    front-size: 36px;
    margin-bottom: 1.75rem;
    width: unset;
  }

  @media (min-width: 930px) {
    font-size: 48px;
    line-height: 54px;
    align-content: left;
  }

  @media (min-width: 1299px) {
    font-size: 52px;
  }
`;

export const Heading = styled.h2`
  font-style: italic;
  font-weight: 900;
  font-size: 24px;
  letter-spacing: 0.035em;
  color: #585858;
  margin-bottom: 1rem;
  line-height: 1.5rem;

  text-align: left;
  width: 80vw;
  // padding: 0.25rem 0.5rem;

  @media (min-width: 800px) {
    font-size: 24px;
    margin-bottom: 1rem;
    line-height: 40px;
    padding: 0;
    width: unset;
  }
`;

export const Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  color: #828282;
  line-height: 25px;
  margin-right: 1rem;
  margin-bottom: 2rem;
  z-index: 3;
  width: 100%;
  // padding-left: 0.5rem;

  text-align: left;

  @media (min-width: 600px) {
    width: 85vw;
  }

  @media (min-width: 800px) {
    width: 100%;
    padding: 0;

    margin-right: unset;
    z-index: unset;
    padding-left: unset;
  }

  @media (min-width: 1150px) {
    width: 90%;
  }

  @media (min-width: 1299px) {
    font-size: 16px;
    width: 80%;
  }

  @media (min-width: 1550px) {
    width: 70%;
  }
`;

export const SecDescription = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  color: #6a6565;
  line-height: 26px;
  margin-bottom: 2.5rem;
  letter-spacing: 0.025em;
  width: 70%;
  text-align: left;
  @media (max-width: 800px) {
    width: 80%;
  }
  // @media (max-width: 1550px) {
  //   width: 80%;
  // }
  // @media (max-width: 1299px) {
  //   font-size: 16px;
  //   width: 90%;
  // }
  // @media (max-width: 1150px) {
  //   width: 100%;
  // }
`;

export const SubSec = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  left: calc(-50vw + 50%);
  padding-left: 1.6rem;
  padding-bottom: 3.5rem;
  align-content: left;

  @media (min-width: 800px) {
    text-align: center;
    align-items: center;
    padding-left: unset;
    padding-bottom: 3rem;

    margin: 0 2rem;
  }

  @media (min-width: 1050px) {
    left: 2rem;
    margin: 0 2rem;
  }
`;

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: left;
  flex-wrap: wrap;
  width: 100%;

  align-content: left;
  position: relative;
  left: calc(-50vw + 50%);

  @media (min-width: 800px) {
    left: unset;
    align-content: unset;

    padding: 0 1rem;
    padding-left: 2rem;
    align-items: center;
    flex-direction: row;
  }

  @media (min-width: 1050px) {
    padding-left: unset;
  }
`;

export const Card = styled.div`
  width: 138px;
  height: 145px;
  margin-right: 0.5rem;
  box-sizing: border-box;
  flex-basis: 150px;
  margin-bottom: 5%;

  display: flex;
  align-items: center;
  position: relative;
  border-radius: 30px;

  @media (min-width: 800px) {
    width: 45%;
    height: unset;
    margin-right: 0;
    box-sizing: unset;
    flex-basis: unset;
    margin-bottom: unset;
    display: unset;
    align-items: left;
    border-radius: unset;

    padding-left: 5%;
    padding-bottom: 3rem;
    margin-right: 0;
    align-content: left;
    text-align: left;
    flex-wrap: wrap;
  }

  @media (max-width: 376px) {
    margin-right: 2%;
  }

  @media (max-width: 347px) {
    margin-right: 0.4%;
    flex-basis: 140px;
  }

  @media (min-width: 1150px) {
    justify-content: center;
    width: 45%;
  }
  @media (min-width: 1250px) {
    justify-content: center;
    width: 45%;
  }
  @media (min-width: 1440px) {
    max-width: 600px;
  }
`;

export const Frame = styled.div`
  box-sizing: border-box;
  height: 145px;
  width: 138px;
  padding: 0.6rem;
  position: absolute;
  background: #d4e9d6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 45px rgba(57, 57, 57, 0.06);
  border-radius: 30px;

  @media (min-width: 800px) {
    box-sizing: unset;
    height: 172px;
    width: 160px;
    padding: unset;
    position: unset;
    background: ${({ background }) => background};
    border-radius: 30px;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1rem;
    margin: 0 0;
  }

  @media (min-width: 1000px) {
    width: 200px;
    height: 212px;
  }
  @media (min-width: 1290px) {
    width: 201px;
  }

  img {
    align-items: center;
    display: flex;
    width: 89px;
    height: 89px;
    border-radius: 50%;
    object-fit: cover;
    filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.15));
    margin: 0.3rem 1rem;

    @media (min-width: 800px) {
      align-items: unset;
      display: unset;
      margin: unset;

      margin-bottom: 0.5rem;
    }

    @media (min-width: 1000px) {
      width: 130px;
      height: 130px;
    }

    @media (min-width: 1290px) {
      top: 50%;
    }
  }

  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 9px;
    line-height: 17px;
    text-align: center;
    color: #6a6565;
    bottom: 10%;
    margin-bottom: 0.5rem;
    padding: 0;

    @media (min-width: 800px) {
      font-size: 14px;
      line-height: 16px;
      bottom: unset;
      margin-bottom: unset;
      padding-bottom: 0.5rem;
    }
  }
  p {
    color: #ffffff;
    font-size: 8px;
    line-height: 10px;
    text-align: center;
    padding: 0;
    position: relative;
    bottom: 6%;

    @media (min-width: 800px) {
      color: ${({ color }) => color};
      font-size: 13px;
      line-height: 15px;
      padding: unset;
      position: unset;
      bottom: unset;

      font-style: normal;
      font-weight: bold;
    }
  }
`;

export const TextArea = styled.div`
  @media (max-width: 799px) {
    display: none;
  }

  flex-direction: column;
  justify-content: center;
  // height: 212px;
  top: 0;
  left: 60%;
  position: absolute;
  width: 50%;
  text-align: left;
  padding: 1rem 0;

  @media (min-width: 1290px) {
    left: 53%;
  }

  @media (min-width: 1400px) {
    left: 50%;
    width: 229px;
  }

  p {
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 17px;
    letter-spacing: 0.025em;
    color: #6a6565;

    @media (min-width: 800px) {
      width: 90%;
      height: 80%;
      padding: 1rem 0;
      text-align: left;
      vertical-align: center;
      overflow-y: auto;
      resize: none;
    }
  }
  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 1rem 0;

    @media (min-width: 800px) {
      margin: unset;

      margin-top: 1rem;
      margin-right: 1rem;
    }

    img {
      width: 15px;
      height: auto;
      margin: 0 1rem;
      cursor: pointer;

      @media (min-width: 800px) {
        height: 10%;
        margin: unset;

        margin-right: 0.5rem;
      }
    }
  }
`;

export const InvolvedSec = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  top-margin: 1rem;
  margin-bottom: 2.5rem;
  align-content: left;
  position: relative;
  left: calc(-50vw + 50%);
  text-align: center;
  align-items: center;

  padding-left: 1.6rem;
  padding-bottom: 3.5rem;

  @media (min-width: 800px) {
    text-align: center;
    align-items: center;
    padding-left: unset;
    padding-bottom: 3rem;

    margin: 0 2rem;
  }

  @media (min-width: 1050px) {
    left: 2rem;
    margin: 0 2rem;
  }
`;

export const SecTitle = styled.h3`
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  letter-spacing: 0.035em;
  color: #67923d;
  margin-bottom: 2rem;

  text-align: left;
  width: 80vw;
  @media (max-width: 1299px) {
    font-size: 44px;
  }
  @media (max-width: 930px) {
    font-size: 36px;
  }
`;

export const Btn = styled.button`
  background: #67923d;
  padding: 0.8rem 8rem;
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
  height: 41px;
  &:hover {
    background: #8cce4b;
  }

  @media (min-width: 800px) {
    margin-right: 65%;
    padding: 0.8rem 42.5px;
  }
`;

export const DownloadBtn = styled.button`
  background: #67923d;
  padding: 0.8rem 2.2rem;
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
  margin: 0.7rem 0;
  &:hover {
    background: #8cce4b;
  }
`;

export const OtherClubsSec = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: left;
  position: relative;
  left: calc(-50vw + 50%);
  text-align: center;
  align-items: center;

  margin: 0;
  top-margin: 1rem;
  margin-bottom: 2.5rem;

  padding-left: 1.6rem;
  padding-bottom: 3.5rem;

  @media (min-width: 800px) {
    text-align: center;
    align-items: center;
    padding-left: unset;
    padding-bottom: 3rem;

    margin: 0 2rem;
  }

  @media (min-width: 1050px) {
    left: 2rem;
    margin: 0 2rem;
  }
`;

export const ClubCards = styled.div`
  display: flex;
  flex-wrap: wrap;
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
  margin: 3rem;
  @media (max-width: 400px) {
    width: 226px;
    height: 293px;
  }
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
  align-content: left;
  position: relative;
  left: calc(-50vw + 50%);
  text-align: center;
  align-items: center;

  margin: 0;
  top-margin: 1rem;
  margin-bottom: 2.5rem;

  padding-left: 1.6rem;
  padding-bottom: 3.5rem;

  @media (min-width: 800px) {
    text-align: center;
    align-items: center;
    padding-left: unset;
    padding-bottom: 3rem;

    margin: 0 2rem;
  }

  @media (min-width: 1050px) {
    left: 2rem;
    margin: 0 2rem;
  }
`;

export const Organizations = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
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
    width: 250px;
    height: 250px;
    border-radius: 50%;
  }
  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
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

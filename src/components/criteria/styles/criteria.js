import styled from "styled-components";

export const CritContainer = styled.div`
  width: 100%;
  display: flex;
  background: #ffffff;
  padding: 0 auto;
  margin-bottom: 3rem;

  @media (min-width: 800px) {
    padding: 0 1.5rem;
    margin-bottom: 5rem;
    margin-right: auto;
    margin-left: auto;
    
    padding: 0;
    overflow-x: unset;
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
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 1050px) {
    width: 86%;
    padding: 0 2rem;
  }
`;

export const CriteriaSec = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  padding-left: 1.6rem;
  flex-direction: column;

  @media(max-width: 799px) {
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

    max-width: 1400px;
  }

  @media (min-width: 1300px) {
    // height: 100%;
    // margin-bottom: 3rem;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 1400px) {
    // padding: unset;
    
  }
`;

export const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  align-content: left;
  position: relative;

  padding: 0 1rem;
  @media (min-width: 800px) {
    padding-bottom: unset;
    padding-left: unset;
    align-content: unset;
    position: unset;
    left: unset;
    
    // width: 90%;
    text-align: unset;
    // justify-content: center;
  }

  @media (min-width: 1400px) {
    // width: 85%;
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
  color: #535461;
  margin-bottom: 1rem;
  line-height: 2rem;
  
  text-align: left;
  width: 80vw;
  max-width: 400px;

  @media(min-width: 800px) {
    font-size: 48px;
    margin-bottom: 1rem;
    line-height: 40px;
    padding: 0;
    width: unset;
    max-width: 800px;
    line-height: 136.84%;
  }
  
`;

export const Description = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 17px;
  color: #535461;
  line-height: 25px;
  margin-right: 1rem;
  margin-bottom: 2rem;
  z-index: 3;
  width: 80%;
  // padding-left: 0.5rem;
  
  text-align: left;

  @media (min-width: 600px) {
    width: 85vw;
  }

  @media (min-width: 800px) {    
    margin-right: unset;
    z-index: unset;
    padding-left: unset;

    width: 100%;
    padding: 0;
    font-size: 24px;
    line-height: 43px;
  }
  
  @media (min-width: 1150px) {
    width: 90%;
    font-size: 36px;
  }
  
  @media (min-width: 1299px) {
    font-size: 16px;
    width: 80%;
  }
  
  @media (min-width: 1550px) {
    width: 70%;
  }
`;

export const SubDescription = styled.p`
  font-style: normal;
  font-weight: 100;
  font-size: 12.8px;
  color: #000000;
  line-height: 18.1px;
  margin-right: 1rem;
  margin-bottom: 2rem;
  z-index: 3;
  width: 70%;
  
  text-align: left;
  max-width: 260px;

  @media (min-width: 600px) {
    width: 85vw;
  }

  @media (min-width: 800px) {
    margin-right: unset;
    z-index: unset;
    padding-left: unset;
    width: 100%;
    max-width: 486px;
    padding: 0;
    font-size: 18px;
    line-height: 35.36px;
    font-weight: 200;
  }
  
  @media (min-width: 1150px) {
    width: 90%;
    font-size: 24px;
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
  position: relative;
  // display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;

  flex-direction: row;
  padding: 0 2rem;

  @media (min-width: 1050px) {
    padding-left: unset;
  }
`;

export const Card = styled.div`
  width: 90%;
  align-items: center;
  position: relative;
  padding: 2rem 0;
  margin: 0 1rem;
  align-content: center;
  // text-align: left;
  // flex-wrap: wrap;

  @media (min-width: 1150px) {
    justify-content: center;
    width: 45%
  }

  @media (min-width: 1250px) {
    justify-content: center;
    width: 45%;
  }

  @media (min-width: 1440px) {
    width: 50%;
    max-width: 600px;
  }
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ background }) => background};
  width: 160px;
  height: 172px;
  padding-top: 1rem;
  box-shadow: 0px 4px 45px rgba(57, 57, 57, 0.06);
  border-radius: 30px;
  margin: 0 0;

  @media (min-width: 800px) {
    width: 160px;
    height: 172px;
  }

  @media (min-width: 1000px) {
    width: 200px;
    height: 212px
  }

  @media (min-width: 1290px) {
    width: 201px;
    // padding: 2.3rem;
  }

  img {
    width: 89px;
    height: 89px;
    border-radius: 50%;
    object-fit: cover;
    filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.15));
    margin-bottom: 0.5rem;

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
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #6a6565;
    padding-bottom: 0.5rem;
  }

  p {
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 15px;
    text-align: center;
    color: ${({ color }) => color};
  }
`;

export const TextArea = styled.div`
  flex-direction: column;
  justify-content: center;

  height: 212px;
  top: 0;
  left: 50%;
  position: absolute;
  width: 50%;

  text-align: left;
  padding: 0.25rem 0.5rem;
  padding-left: 0;


  @media (min-width: 1290px) {
    left: 46%;
  }

  @media(min-width: 1400px) {
    left: 46%;
    width: 229px;
  }

  p {
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 17px;
    letter-spacing: 0.025em;
    color: #6a6565;
    width: 90%;
    height: 80%;
    padding: 1rem 0;
    text-align: left;
    vertical-align: center;

    overflow-y: auto;
    resize: none;

    @media (min-width: 1400px) {
      font-size: 12px;
    }
  }

  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 1rem;
    margin-right: 1rem;

    img {
      width: 15px;
      height: 10%;
      margin-right: 0.5rem;
      cursor: pointer;
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
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  background: #ffffff;
  padding: 0 1.5rem;
`;

export const Side = styled.div`
  width: 90%;
  height: 100%;
  background: rgba(0, 0, 0, 0.02);
  display: flex;
  flex-direction: column;
`;

export const Link = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  display: flex;
  align-items: center;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #c4c4c4;
`;

export const Main = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const AboutSec = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 95vh;
`;

export const Images = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
`;

export const Image = styled.div`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};

  img {
    height: ${({ height }) => height};
    width: auto;
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
`;

export const Text = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  letter-spacing: 0.035em;
`;

export const Heading = styled.h2`
  font-style: italic;
  font-weight: 800;
  font-size: 24px;
  letter-spacing: 0.035em;
  color: #585858;
`;

export const Description = styled.p`
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  color: #828282;
`;

export const SecDescription = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.025em;
  color: #6a6565;
`;

export const SubSec = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;

export const Card = styled.div`
  width: 47%;
  display: flex;
  align-items: center;
`;

export const Frame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: ${({ background }) => background};
  width: 201px;

  img {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    object-fit: cover;
  }

  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #6a6565;
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

  p {
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 17px;
    letter-spacing: 0.025em;
    color: #6a6565;
  }

  img {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

export const InvolvedSec = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SecTitle = styled.h3`
  font-style: normal;
  font-weight: 900;
  font-size: 25px;
  letter-spacing: 0.035em;
  color: #67923d;
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
`;

export const OtherClubsSec = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ClubCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ClubCard = styled.div`
  width: 226px;
  height: 295px;
  background: #ffffff;
  box-shadow: 0px 4px 45px rgba(57, 57, 57, 0.06);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ClubImage = styled.div`
  width: 100%;
  height: 60%;
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
  font-size: 9px;
  line-height: 11px;
  color: #000000;
  opacity: 0.75;
`;

export const ClubName = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  /* identical to box height */
  color: #1f2421;
  opacity: 0.75;
`;

export const LearnMore = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 9px;
  line-height: 11px;
  /* identical to box height */
  color: #67923d;
  opacity: 0.75;
`;

export const LocalOrgsSec = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Organizations = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Organization = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    margin-bottom: 0.8rem;
  }

  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    color: #1f2421;
  }
`;

export const WeeklySec = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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

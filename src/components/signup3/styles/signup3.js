import styled from "styled-components/macro";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  padding: 0 10%;
  padding-top: 1%;
  ${"" /* overflow-x: hidden; */}
  ${"" /* overflow-y: scroll; */}
  z-index: 1;

  @media (min-width: 1500px) {
    padding-top: 1%;
  }
`;

export const Slogan = styled.div`
  width: 100%;
  margin-bottom: 5%;
  display: flex;
  justify-content: center;

  h2 {
    width: 80%;
    font-weight: 600;
    font-size: 37px;
    color: #3e3b3b;
    line-height: 43px;
    text-align: center;
  }

  span {
    color: #67923d;
  }

  @media (min-width: 1300px) {
    justify-content: start;
    margin-bottom: 3rem;

    h2 {
      width: 35%;
      font-size: 45px;
      line-height: 50px;
      text-align: left;
    }
  }

  @media (min-width: 1500px) {
    margin-bottom: 1rem;
  }

  @media (max-width: 750px) {
    margin-bottom: 10%;
  }
`;

export const Label = styled.h3`
  font-weight: 700;
  font-size: 30px;
  color: #67923d;
  margin-bottom: 1%;
  line-height: 28px;
  text-align: center;
  z-index: 2;
`;

export const Description = styled.p`
  font-weight: 600;
  font-size: 18px;
  color: #3e3b3b;
  margin-bottom: 2.5%;
  line-height: 28px;
  text-align: center;
  z-index: 2;
`;

export const InfoSec = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 4%;

  @media (max-width: 450px) {
    margin-bottom: 6%;
  }
`;

export const InfoTitle = styled.h3`
  font-weight: 700;
  font-size: 25px;
  color: #3f3d56;
  margin-bottom: 2%;

  @media (max-width: 750px) {
    font-size: 23px;
  }

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

export const InfoDescr = styled.h3`
  font-weight: 500;
  font-size: 20px;
  color: #3f3d56;
  margin-bottom: 2%;

  @media (max-width: 750px) {
    font-size: 18px;
  }

  @media (max-width: 500px) {
    font-size: 15px;
  }
`;

export const InfoSecDescr = styled.h3`
  font-weight: 500;
  font-size: 20px;
  color: #67923d;
  margin-bottom: 2%;

  @media (max-width: 750px) {
    font-size: 18px;
  }

  @media (max-width: 500px) {
    font-size: 15px;
  }
`;

export const Button = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 4%;
  z-index: 2;

  button {
    width: 128px;
    height: 41px;
    outline: none;
    border: none;
    background: #86b390;
    box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
    border-radius: 30px;
    cursor: pointer;
    color: #ffffff;
    margin-bottom: 10%;
    transition: 0.5s ease all;
    margin: 0 auto;

    &:hover {
      background: #67923d;
    }
  }

  @media (min-width: 1300px) {
    width: 55%;
    justify-content: flex-end;
  }

  @media (min-width: 1600px) {
    width: 910px;
  }
`;

export const Rectangle = styled.div`
  width: 910px;
  height: 441px;
  background: rgba(220, 255, 245, 0.7);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2.5rem;
  z-index: 2;

  @media (max-width: 900px) {
    width: 600px;
    height: 275px;
  }

  @media (max-width: 700px) {
    width: 500px;
    height: 255px;
  }

  @media (max-width: 550px) {
    width: 440px;
    height: 255px;
  }

  @media (max-width: 500px) {
    width: 390px;
    height: 245px;
  }

  @media (max-width: 450px) {
    width: 350px;
    height: 235px;
    padding: 0 1.2rem;
  }
`;

export const DarkTallPlant = styled.div`
  position: absolute;
  bottom: 0;
  right: -17%;

  img {
    width: auto;
    height: auto;

    @media (max-width: 1400px) {
      height: 450px;
      width: auto;
    }

    @media (max-width: 1000px) {
      height: 350px;
      width: auto;
    }

    @media (max-width: 750px) {
      height: 250px;
      width: auto;
    }
  }

  @media (min-width: 1400px) {
    right: -10%;
  }
`;

export const TallPlant = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  img {
    width: auto;
    height: auto;
    transform: matrix(0.51, -0.86, -0.86, -0.51, 0, 0);

    @media (max-width: 1400px) {
      height: 500px;
      width: auto;
    }

    @media (max-width: 1000px) {
      height: 400px;
      width: auto;
    }

    @media (max-width: 750px) {
      height: 300px;
      width: auto;
    }
  }

  @media (max-width: 1400px) {
    top: 10%;
  }

  @media (max-width: 550px) {
    display: none;
  }
`;

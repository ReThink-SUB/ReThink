import styled from "styled-components/macro";

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  padding: 0 10%;
  ${"" /* overflow-x: hidden; */}
  ${"" /* overflow-y: scroll; */}
  z-index: 1;

  @media (min-width: 600px) {
    padding-top: 5%;
  }

  @media (min-width: 1500px) {
    padding-top: 1%;
  }
`;

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  margin: 0;

  @media (min-width: 800px) {
    padding: 0 3rem;
    padding-top: 2rem;
  }

  @media (min-width: 1050px) {
    width: 86%;
    padding: 0 2rem;
  }
`;

export const Slogan = styled.div`
  width: 100%;
  margin-bottom: 2%;
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;

  h2 {
    width: 100%;
    font-weight: 600;
    font-size: 32px;
    color: #3e3b3b;
    line-height: 43px;
    text-align: left;
  }

  span {
    color: #67923d;
  }

  @media (min-width: 1300px) {
    max-width: 700px;
    justify-content: start;
    margin-bottom: 3rem;

    h2 {
      font-size: 45px;
      line-height: 50px;
      text-align: left;
    }
  }

  @media (min-width: 1500px) {
    margin-bottom: 2rem;
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
  position: relative;
  flex-direction: column;
`;

export const InfoTitle = styled.h3`
  font-weight: 700;
  font-size: 20px;
  color: #3f3d56;
  margin-bottom: 1rem;

  @media (min-width: 750px) {
    font-size: 23px;
  }

  @media (min-width: 1000px) {
    font-size: 25px;
  }
`;

export const InfoDescr = styled.h3`
  font-weight: 600;
  font-size: 17px;
  color: #3f3d56;
  margin-bottom: 0.6rem;
  word-wrap: break-word;

  @media (min-width: 800px) {
    font-size: 20px;
    width: 80%;
  }
`;

export const InfoSecDescr = styled.h3`
  font-weight: 500;
  font-size: 20px;
  color: #67923d;
  margin-bottom: 7%;
  display: flex;
`;

export const Button = styled.div`
  width: 61px;
  position: relative;
  justify-content: right;
  margin: 0 auto;
  z-index: 2;

  @media (min-width: 600px) {
    position: absolute;
    bottom: 5px;
    right: -23px;
  }

  button {
    width: 61px;
    height: 33px;
    outline: none;
    border: 1px solid #585858;
    background: none;
    border-radius: 50px;
    cursor: pointer;
    color: #585858;
    margin-bottom: 10%;
    transition: 0.5s ease all;
    margin: 0 auto;

    &:hover {
      background: #67923D;
      color: #FFFFFF;
    }
  }
`;

export const InputsAndButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  z-index: 1;
  margin: 0 auto;
  margin-bottom: 0.3rem;

  @media (min-width: 1300px) {
    max-width: 710px;
  }
`;

export const BackButton = styled.div`
  width: 45%;
  button {

    width: 128px;
    height: 41px;
    outline: none;
    border: none;
    background: #EFEFEF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 45px rgba(57, 57, 57, 0.06);
    border-radius: 10px;
    cursor: pointer;
    color: #1F2421;
    transition: 0.5s ease all;
    margin: 0 auto;

    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 22px;
    
    &:hover {
      background: #C4C4C4;
      color: #FFFFFF;
    }

    @media (min-width: 800px) {
      margin-right: auto;
      border-radius: 30px;
    }
  }
`;

export const NextButton = styled.div`
  width: 45%;
  button {

    width: 128px;
    height: 41px;
    outline: none;
    border: none;
    background: #67923D;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 45px rgba(57, 57, 57, 0.06);
    border-radius: 10px;
    cursor: pointer;
    color: #ffffff;
    margin-bottom: 10%;
    transition: 0.5s ease all;
    margin: 0 auto;

    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 22px;
    
    &:hover {
      background: #000000;
      border: 1px solid #EFEFEF;
    }

    @media (min-width: 800px) {
      margin-right: auto;
      border-radius: 30px;
    }
  }
`;

export const NavigationSec = styled.div`
  width: 100%;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  padding: 0 1rem;
  margin: 0 auto;
  margin-top: 2rem;

  @media (min-width: 500px) {
    display: flex;
  }

  @media (min-width: 675px) {
    margin-bottom: 2%;
  }

  @media (min-width: 1300px) {
    max-width: 710px;
  }
`;

export const Progress = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  z-index: 1;

  @media (min-width: 500px) {
    margin-bottom: 5%;
  }
`;

export const Completed = styled.div`
  width: 32%;
  max-height: 44px;

  input[type="radio"] {
    appearance: none;
    width: 12.39px;
    height: 12.39px;
    border: 4px solid #8792A2;
    border-radius: 50%;
    background-clip: content-box;
    padding: 3px;
    margin-bottom: 0.5rem;
    border-color: #67923D;

    @media (min-width: 900px) {
      margin-right: 0.5rem;
      margin-bottom: unset;
    }
  }

  @media (max-width: 360px) {
    width: 25%;
  }

  label {
    max-height: 20px;
    left: calc(50% - 224.67px/2 + 10px);
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;

    color: #3C4257;


    flex: none;
    order: 1;
    flex-grow: 1;

    font-weight: 500;
    font-size: 14px;
    line-height: 113.84%;

    letter-spacing: 0.035em;

    color: #585858;
  }
`;

export const Rectangle = styled.div`
  width: 100%;
  max-width: 626px;
  background: #D4E9D6;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10% 10%;
  
  flex-wrap: wrap;
  z-index: 2;
  margin-bottom: 1rem;

  @media (min-width: 1000px) {
    padding: 5% 5%;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
`;

export const DarkTallPlant = styled.div`
  position: absolute;
  display: none;
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
  
  @media (min-width: 800px) {
    display: unset;
    right: -30%;
  }

  @media (min-width: 800px) {
    display: unset;
    right: -20%;
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

import styled from "styled-components/macro";

export const Container = styled.div`
  position: relative;
  width: 100%;
  // height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  padding: 0 10%;
  padding-top: 5%;
  ${"" /* overflow-x: hidden; */}
  ${"" /* overflow-y: scroll; */}
  z-index: 1;

  @media (min-width: 1500px) {
    padding-top: 1%;
  }
`;

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;

  margin: 0;
  // overflow-x: hidden;

  @media (min-width: 800px) {
    padding: 0 3rem;
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

export const Inputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  padding: 0 1rem;
  margin: 0 auto;

  @media (min-width: 675px) {
    margin-bottom: 2%;
  }

  @media (min-width: 1300px) {
    // width: 90%;
    // margin-left: 25%;
  }
`;

export const Description = styled.p`
  width: 100%;
  font-weight: 400;
  font-size: 18px;
  color: #1f2421;
  margin-bottom: 8%;
  line-height: 20.49px;
  text-align: center;

  @media (min-width: 500px) {
    margin-bottom: 1.5%;
  }
  
  @media (min-width: 800px) {
    margin-bottom: 1.5%;
    text-align: left;
    line-height: 28px;
  }

  @media (min-width: 1200px) {
    width: 90%;
    font-size: 20px;
  }

  @media (min-width: 1300px) {
    width: 65%;
  }
`;

export const Input = styled.div`
  width: 100%;
  margin-bottom: 7%;

  textarea {
    width: 100%;
    height: 150px;
    background: #ffffff;
    border: 2px solid #67923d;
    border-radius: 25px;
    outline: none;
    font-size: 16px;
    color: #67923d;
    filter: drop-shadow(4px 7px 9px rgba(0, 0, 0, 0.25));
    padding: 1rem 1.3rem;

    &::placeholder {
      color: #67923d;
    }

    @media (min-width: 1300px) {
      height: 100px;
    }
  }

  @media (min-width: 550px) {
    margin-bottom: 4%;
  }

  @media (min-width: 1500px) {
    margin-bottom: 2.5%;
  }

  @media (min-width: 500px) {
    width: 75%;
  }

  @media (min-width: 1400px) {
    width: 65%;
  }
`;

export const Select = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10%;

  select {
    width: 100%;
    max-width: 702px;
    height: 43px;
    background: #FFFFFF;
    border: 2px solid #DADADA;
    box-sizing: border-box;
    border-radius: 25px;
    outline: none;
    font-size: 16px;
    color: #828282;
    padding: 0 15px;

    @media (min-width: 1500px) {
      height: 43px;
    }

    @media (min-width: 500px) {
      // width: 75%;
    }
  }

  @media (min-width: 1300px) {
    justify-content: start;
    width: 75%;
    margin-bottom: 5%;
  }

  @media (min-width: 1500px) {
    margin-bottom: 2%;
  }

  @media (min-width: 1400px) {
    width: 65%;
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
  margin-top: 2rem;

  @media (min-width: 500px) {
    display: flex;
  }

  @media (min-width: 675px) {
    margin-bottom: 2%;
  }

  @media (min-width: 1300px) {
    max-width: 80%;
    margin-left: 10%;
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
  // margin-bottom: 7%;
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

  @media (min-width: 550px) {
    // margin-bottom: 4%;
  }

  @media (min-width: 1300px) {
    // margin-bottom: 2.5%;
  }

  label {
    max-height: 20px;
    left: calc(50% - 224.67px/2 + 10px);
    // top: 0px;

    // font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;

    color: #3C4257;


    flex: none;
    order: 1;
    flex-grow: 1;
    // margin: 0.5rem 4px;

    font-weight: 500;
    font-size: 14px;
    line-height: 113.84%;

    letter-spacing: 0.035em;

    color: #585858;
  }
`;

export const Incompleted = styled.div`
  width: 32%;
  // margin-bottom: 7%;
  max-height: 44px;

  @media (min-width: 550px) {
    // margin-bottom: 4%;
  }

  @media (min-width: 1300px) {
    // margin-bottom: 2.5%;
  }

  input[type="radio"] {
    appearance: none;
    width: 12.39px;
    height: 12.39px;
    border: 1px solid #8792A2;
    border-radius: 50%;
    background-clip: content-box;
    padding: 3px;
    margin-bottom: 0.5rem;
    // border-color: #67923D;

    @media (min-width: 900px) {
      margin-right: 0.5rem;
      margin-bottom: unset;
    }
  }

  label {
    max-height: 20px;
    left: calc(50% - 224.67px/2 + 10px);
    // top: 0px;

    // font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;

    color: #3C4257;


    flex: none;
    order: 1;
    flex-grow: 1;
    // margin: 0.5rem 4px;

    font-weight: 500;
    font-size: 14px;
    line-height: 113.84%;

    letter-spacing: 0.035em;

    color: #585858;
  }
`;

export const InputsAndButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  z-index: 1;
  margin-bottom: 3rem;

  // @media (min-width: 675px) {
  //   margin-bottom: 0%;
  // }

  // @media (min-width: 800px) {
  //   flex-direction: row;
  //   margin-left: 80%;
  // }

  // @media (min-width: 1299px) {
  //   align-items: center;
  // }
`;

export const BackButton = styled.div`
  width: 45%;
  button {
    // padding: 10% 10%;
    // background: #EFEFEF;

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
      background: #67923d;
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
    // padding: 10% 10%;
    // background: #EFEFEF;

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
      background: #67923d;
    }

    @media (min-width: 800px) {
      margin-right: auto;
      border-radius: 30px;
    }
  }
`;

export const TallPlant = styled.div`
  position: absolute;
  display: none;

  @media (min-width: 800px) {
    display: unset;
    top: 1%;
    right: -27%;
  }

  @media (min-width: 1000px) {
    right: -19%;
  }

  @media (min-width: 1300px) {
    top: 12%;
    right: -16%;
  }

  img {
    width: auto;
    height: auto;
    ${"" /* transform: rotate(-123.84deg); */}

    @media (max-width: 1499px) {
      height: 250px;
      width: auto;
    }

    @media (max-width: 1200px) {
      height: 225px;
      width: auto;
    }

    @media (max-width: 500px) {
      height: 150px;
      width: auto;
    }
  }
`;

export const WebLady = styled.div`
  position: absolute;
  bottom: 15%;
  left: 0;
  display: none;

  img {
    height: 432px;
    width: auto;

    @media (max-width: 1499px) {
      height: 350px;
      width: auto;
    }

    @media (max-width: 1200px) {
      height: 300px;
      width: auto;
    }
  }

  @media (max-width: 1000px) {
    left: -5%;
  }

  @media (max-width: 750px) {
    left: -8%;
  }

  @media (min-width: 800px) {
    display: unset;
  }
`;

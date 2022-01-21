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
  padding-top: 5%;
  ${"" /* overflow-x: hidden; */}
  ${"" /* overflow-y: scroll; */}
  z-index: 1;

  @media (min-width: 1500px) {
    padding-top: 1%;
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
    margin-bottom: 2rem;
  }
`;

export const Description = styled.p`
  width: 80%;
  font-weight: 400;
  font-size: 18px;
  color: #1f2421;
  margin-bottom: 8%;
  line-height: 28px;
  text-align: center;

  @media (min-width: 500px) {
    margin-bottom: 1.5%;
  }

  @media (min-width: 1300px) {
    width: 75%;
    text-align: left;
    font-size: 20px;
  }

  @media (min-width: 1400px) {
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
    width: 40%;
    height: 50px;
    background: #ffffff;
    border: 2px solid #67923d;
    border-radius: 25px;
    outline: none;
    font-size: 16px;
    color: #67923d;
    filter: drop-shadow(4px 7px 9px rgba(0, 0, 0, 0.25));
    padding: 0 15px;

    @media (min-width: 1500px) {
      height: 43px;
    }

    @media (max-width: 500px) {
      width: 75%;
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

export const Button = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

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
    width: 75%;
    justify-content: flex-end;
  }

  @media (min-width: 1400px) {
    width: 65%;
  }
`;

export const TallPlant = styled.div`
  position: absolute;
  top: -12%;
  right: -7%;

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

  @media (max-width: 1200px) {
    top: -20%;
    right: -17%;
  }

  @media (max-width: 500px) {
    top: -15%;
    right: -20%;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

export const WebLady = styled.div`
  position: absolute;
  bottom: 15%;
  left: 0;

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

  @media (max-width: 700px) {
    display: none;
  }
`;

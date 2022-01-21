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

  @media (min-width: 1300px) {
    padding-top: 1%;
  }
`;

export const Slogan = styled.div`
  width: 100%;
  margin-bottom: 2%;
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;

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

  @media (min-width: 1300px) {
    margin-bottom: 2.5rem;
  }
`;

export const Description = styled.p`
  width: 80%;
  font-weight: 400;
  font-size: 20px;
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
  }
`;

export const SecondaryDescription = styled.p`
  width: 80%;
  font-weight: 400;
  font-size: 18px;
  color: #1f2421;
  margin-bottom: 5%;
  line-height: 28px;
  text-align: center;
  z-index: 1;

  @media (min-width: 500px) {
    margin-bottom: 1.5%;
  }

  @media (min-width: 1300px) {
    width: 75%;
    text-align: left;
  }
`;

export const Inputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  margin-bottom: 5%;

  @media (min-width: 675px) {
    margin-bottom: 2%;
  }

  @media (min-width: 1300px) {
    width: 75%;
  }

  @media (min-width: 1300px) {
    margin-bottom: 1.5%;
  }
`;

export const InputsAndButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 1300px) {
    flex-direction: row;
  }

  @media (max-width: 1299px) {
    align-items: center;
  }
`;

export const SecondaryInputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 1;
  margin-bottom: 5%;

  @media (min-width: 675px) {
    margin-bottom: 2%;
  }

  @media (min-width: 1300px) {
    margin-right: auto;
    margin-left: 12%;
    width: 45%;
  }

  @media (min-width: 1300px) {
    margin-bottom: 1.5%;
  }
`;

export const HalfInputs = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  z-index: 1;

  @media (min-width: 675px) {
    margin-bottom: 0%;
  }
`;

export const Input = styled.div`
  width: 100%;
  margin-bottom: 7%;

  input {
    width: 100%;
    height: 43px;
    background: #ffffff;
    border: 2px solid #67923d;
    border-radius: 25px;
    outline: none;
    font-size: 16px;
    color: #67923d;
    filter: drop-shadow(4px 7px 9px rgba(0, 0, 0, 0.25));
    padding: 0 1.3rem;

    &::placeholder {
      color: #67923d;
    }

    @media (min-width: 1500px) {
      height: 43px;
    }
  }

  @media (min-width: 550px) {
    margin-bottom: 4%;
  }

  @media (min-width: 1300px) {
    margin-bottom: 2.5%;
  }
`;

export const SecondaryInput = styled.div`
  width: 100%;
  margin-bottom: 7%;

  input {
    width: 100%;
    height: 43px;
    background: #ffffff;
    border: 2px solid #67923d;
    border-radius: 25px;
    outline: none;
    font-size: 16px;
    color: #67923d;
    filter: drop-shadow(4px 7px 9px rgba(0, 0, 0, 0.25));
    padding: 0 1.3rem;

    &::placeholder {
      color: #67923d;
    }

    @media (min-width: 1500px) {
      height: 43px;
    }
  }

  @media (min-width: 550px) {
    margin-bottom: 4%;
  }

  @media (min-width: 1300px) {
    margin-bottom: 2.5%;
  }
`;

export const HalfInput = styled.div`
  width: 48.5%;
  margin-bottom: 7%;

  input {
    width: 100%;
    height: 43px;
    background: #ffffff;
    border: 2px solid #67923d;
    border-radius: 25px;
    outline: none;
    font-size: 16px;
    color: #67923d;
    filter: drop-shadow(4px 7px 9px rgba(0, 0, 0, 0.25));
    padding: 0 1.3rem;

    &::placeholder {
      color: #67923d;
    }

    @media (min-width: 1500px) {
      height: 43px;
    }
  }

  @media (min-width: 550px) {
    margin-bottom: 4%;
  }

  @media (min-width: 1300px) {
    margin-bottom: 2.5%;
  }
`;

export const LeafDots = styled.div`
  position: absolute;
  bottom: 0;
  left: -30%;
  z-index: 0;

  img {
    width: 200px;
    height: auto;
  }
`;

export const Select = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10%;

  select {
    width: 40%;
    height: 43px;
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
  }

  @media (min-width: 1300px) {
    justify-content: start;
    width: 75%;
    margin-bottom: 2%;
  }

  ${
    "" /* @media (min-width: 1500px) {
    margin-bottom: 2%;
  } */
  }
`;

export const Button = styled.button`
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

  @media (min-width: 1300px) {
    margin-right: auto;
  }
`;

export const TallPlant = styled.div`
  position: absolute;
  display: none;

  img {
    width: auto;
    height: 473px;
  }

  @media (min-width: 1300px) {
    display: flex;
    bottom: 0;
    left: 0;
  }

  @media (min-width: 1500px) {
    bottom: 0;
    left: 0;
    display: flex;
  }
`;

export const WebLady = styled.div`
  position: absolute;
  display: none;

  img {
    height: 560px;
    width: auto;
  }

  @media (min-width: 1500px) {
    bottom: 0;
    right: -19%;
    display: flex;
  }

  @media (min-width: 1300px) {
    bottom: 0;
    right: -15%;
    display: flex;
  }

  @media (min-width: 1450px) {
    bottom: 0;
    right: -13%;
    display: flex;
  }

  @media (min-width: 1650px) {
    bottom: 0;
    right: -11%;
    display: flex;
  }
`;

export const UploadContainer = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 1300px) {
    justify-content: center;
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const ImageInput = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1.5rem;

  @media (max-width: 800px) {
    margin: 0;
    margin-bottom: 1rem;
  }

  input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

  input + label {
    width: 150px;
    height: 2.5rem;
    font-size: 0.9rem;
    /* 20px */
    font-weight: 700;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    outline: none;
    padding: 0.625rem 1.25rem;
    /* 10px 20px */
    color: #ffffff;
    background: #86b390;
    border-radius: 200px;
    transition: 0.5s all ease;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .no-js input + label {
    display: none;
  }

  input:focus + label,
  input.has-focus + label {
    outline: 1px dotted #000;
    outline: -webkit-focus-ring-color auto 5px;
  }

  input:focus + label,
  input.has-focus + label,
  input + label:hover {
    background-color: #67923d;
  }

  input + label svg {
    width: 1.25vw;
    height: auto;
    vertical-align: middle;
    fill: currentColor;
    margin-top: -0.25em;
    /* 4px */
    margin-right: 0.25em;
    /* 4px */
  }
`;

export const Progress = styled.progress`
  &[value] {
    appearance: none;

    width: 20%;
    height: 35%;
    margin-right: 1.5rem;

    @media (max-width: 800px) {
      margin: 0;
      margin-bottom: 1rem;
      width: 35%;
    }
  }

  &[value]::-webkit-progress-bar {
    background-color: #eee;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
  }

  &[value]::-webkit-progress-value {
    background-image: -webkit-linear-gradient(
        -45deg,
        transparent 33%,
        rgba(0, 0, 0, 0.1) 33%,
        rgba(0, 0, 0, 0.1) 66%,
        transparent 66%
      ),
      -webkit-linear-gradient(top, rgba(255, 255, 255, 0.25), rgba(0, 0, 0, 0.25)),
      -webkit-linear-gradient(left, #67923d, #67923d);

    border-radius: 10px;
    background-size: 35px 20px, 100% 100%, 100% 100%;
    animation: animate-stripes 5s linear infinite;
  }

  @-webkit-keyframes animate-stripes {
    100% {
      background-position: -100px 0px;
    }
  }

  @keyframes animate-stripes {
    100% {
      background-position: -100px 0px;
    }
  }
`;

export const UploadButton = styled.button`
  width: 140px;
  height: 2.5rem;
  font-size: 1rem;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  outline: none;
  padding: 0.625rem 1.25rem;
  /* 10px 20px */
  color: #f1e5e6;
  background-color: #86b390;
  border-radius: 500px;
  transition: 0.5s all ease;
  border: none;
  outline: none;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  @media (max-width: 800px) {
    font-size: 0.9rem;
    width: 120px;
    height: 2.7rem;
  }

  &:hover {
    background-color: #67923d;
  }

  &:disabled {
    background-color: #a5a5a5;
    cursor: default;
  }
`;

export const BusinessImg = styled.div`
  width: 75%;
  margin-bottom: 1.5rem;

  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0px 7px 30px rgba(57, 57, 57, 0.06);

    @media (min-width: 1300px) {
      align-self: start;
    }
  }

  @media (max-width: 1300px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

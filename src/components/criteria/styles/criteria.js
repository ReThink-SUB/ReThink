import styled from "styled-components";

export const CritContainer = styled.div`
  width: 100%;
  display: flex;
  background: #ffffff;
  padding: 0 auto;
  margin-bottom: 3rem;

  @media (min-width: 800px) {
    overflow-x: unset;
    
    margin-bottom: 5rem;
    margin-right: auto;
    margin-left: auto;
    padding: 0;
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
    flex-direction: unset;

    justify-content: center;
    align-items: center;
    justify-content: center;
    align-items: center;
    padding-top: 5rem;
    padding-bottom: 2.5rem;
    max-width: 1400px;
  }

  @media (min-width: 1300px) {
    margin-left: auto;
    margin-right: auto;
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
    text-align: unset;
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
    width: unset;

    front-size: 36px;
    margin-bottom: 1.75rem;
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
    width: unset;
    
    font-size: 48px;
    margin-bottom: 1rem;
    line-height: 40px;
    padding: 0;
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
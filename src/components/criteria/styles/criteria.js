import styled from "styled-components";
import './criteria.css';
// merge pls
export const CritContainer = styled.div`
  width: 100%;
  display: flex;
  background: #ffffff;
  padding: 0 auto;
  margin-bottom: 3rem;

  @media (min-width: 800px) {
    overflow-x: unset;
    
    position: relative;
    top: 0rem;

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
  max-width: 1160px;
  position: relative;
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
  font-weight: 800;
  font-size: 30px;
  font-family: 'Averia Sans Libre', sans-serif;
  margin-bottom: 0.5rem;
  line-height: 2rem;
  text-align: left;
  width: 80vw;
  max-width: 400px;

  @media(min-width: 800px) {
    width: unset;
    
    font-size: 48px;
    margin-bottom: 1.6rem;
    line-height: 40px;
    padding: 0;
    max-width: 800px;
  }
`;

export const HeadingQuestion = styled(Heading)`
  color: #3B2B23;
`;

export const HeadingReply = styled(Heading)`
  color: #324F52;
`;

export const Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  font-family: 'Karma', sans-serif;
  font-weight: bold;
  color: #3B2B23;
  letter-spacing: 0.75px;
  line-height: 1.5em;
  margin-right: 1rem;
  margin-bottom: 1rem;
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
    font-family: 'Karma', sans-serif;
    font-weight: bold;
    letter-spacing: 0.75px;
    color: #3B2B23;
    line-height: 43px;
  }
  
  @media (min-width: 1150px) {
    width: 90%;
    font-family: 'Karma', sans-serif;
    font-style: normal;
    font-size: 36px;
    letter-spacing: 0.75px;
    line-height: 59px;
    color: #3B2B23;
  }
`;

export const SubDescription = styled.p`
  font-style: normal;
  font-weight: 300;
  font-family: 'Karma', sans-serif;
  font-size: 1em;
  color: #000000;
  line-height: 1.5em;
  margin-right: 1rem;
  margin-bottom: 2rem;
  width: 70%;
  text-align: left;
  max-width: 300px;
  position: relative;
  bottom: 0.5rem;

  @media (min-width: 600px) {
    width: 85vw;
    font-style: normal;
    font-weight: 300;
    font-family: 'Karma', sans-serif;
    color: #000000;
  }

  @media (min-width: 800px) {
    margin-right: unset;
    z-index: unset;
    padding-left: unset;
    
    width: 100%;
    /* This changes the width of the subdescription */
    max-width: 750px;
    font-size: 20px;
    line-height: 35px;

    font-style: normal;
    font-weight: 300;
    font-family: 'Karma', sans-serif;
    color: #000000;
  }
  
  @media (min-width: 1150px) {
    width: 90%;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    font-family: 'Karma', sans-serif;
    color: #000000;
  }
  
  @media (min-width: 1299px) {
    /* This changes the font size */
    font-size: 20px;
    width: 80%;
    font-style: normal;
    font-weight: 300;
    font-family: 'Karma', sans-serif;
    color: #000000;
  }
  
  @media (min-width: 1550px) {
    width: 90%;
    font-style: normal;
    font-weight: 300;
    font-family: 'Karma', sans-serif;
    font-size: 20px;
    color: #000000;
    line-height: 35px;
  }
`;
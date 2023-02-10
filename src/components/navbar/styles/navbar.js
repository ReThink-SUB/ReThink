import { PlayArrow as PlayArrowIcon } from '@material-ui/icons'
import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 1.5rem;
  z-index: 5;
  position: relative;
  overflow-x: clip;


  @media (min-width: 800px) {
    justify-content: space-between;
    min-width: 35rem;
    padding: 0 2rem;
  }
  @media (min-width: 1200px) {
    padding: 0 3rem;
  }
`;

export const Title = styled.div`
  cursor: pointer;
  display: flex;
  img {
    min-width: 40%;
    max-width: 250px;
    margin-top: 1em;
    width: 20%;
    height: auto;
    position: relative;
    left: 2rem;
    top: 1.5rem;
    @media (max-width: 800px) {
      width: 80px;
    }
  }
  .mobile-logo {
    display: none;
  }
  @media (max-width: 800px) {
    width: 80px;
    .mobile-logo {
      display: block;
    }
    .desktop-logo {
      display: none;
    }
  }
`;

export const Links = styled.div`
  display: none;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: 2.5rem;
  margin: 1rem;

  @media (min-width: 800px) {
    min-width: 550px;
    max-width: 700px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: relative;
    left: 0.5rem;
  }

  @media (min-width: 1300px) {
    min-width: 700px;
  }

  @media (min-width: 1500px) {
    min-width: 800px;
  }

  @media (min-width: 1700px) {
    position: relative;
    top: 3rem; 
    max-width: 900px;
  }

  @media (min-width: 2000px) {
    max-width: 1100px;
  }
  
`;

export const Link = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  font-family: 'Averia Sans Libre', sans-serif;
  line-height: 21px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #3B2B23;
  text-decoration: none;
  transition: 0.5s ease all;

  @media (min-width: 800px) {
    margin: 0px;
    font-size: 11px;
  }

  @media (min-width: 1100px) {
    font-size: 12px;
  }

  @media (min-width: 1300px) {
    font-size: 13.5px;
  }

  @media (min-width: 1700px) { 
    font-size: 15px;
  }

  @media (min-width: 2000px) {
    font-size: 17px;
  }

  &:hover {
    color: #67923d;
    text-decoration: none;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  font-family: 'Averia Sans Libre', sans-serif;
  color: #324F52;
  width: 12.063rem;
  height: 2.375rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.5s ease all;
  background: #C2D8B9;
  position: relative;
  left: 2.5rem;  

  @media (min-width: 800px) {
    position: relative;
    left: -1rem;
    width: 10rem;
    height: 2rem;
    font-size: 10px;
  }

  @media (min-width: 1100px) {
    width: 12.063rem;
    height: 2.375rem;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
  }

  @media (min-width: 1700px) {
    font-size: 15px;
    width: 13rem;
    height: 3rem;
  }

  @media (min-width: 2000px) {
    font-size: 17px;
    width: 15rem;
    height: 3.5rem;
  }
`;

export const StyledPlayArrowIcon = styled(PlayArrowIcon)`
  position: relative;
  left: 0.5rem;
  color: #324F52;
  height: 1.2rem;
  width: 1.5rem;

  @media (min-width: 800px) {
    height: 1rem;
    width: 1.25rem;
  }

  @media (min-width: 1100px) {
    position: relative;
    left: 0.5rem;
    color: #324F52;
    height: 1.2rem;
    width: 1.5rem;
  }

  @media (min-width: 1700px) {
    height: 1.5rem;
    width: 2rem;
  }

  @media (min-width: 2000px) {
    height: 1.75rem;
    width: 2.25rem;
  }
`;

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
    min-width: 50%;
    max-width: 250px;
    margin-top: 1em;
    width: 20%;
    height: auto;
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
  width: 500px;
  display: none;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: 3.7rem;
  right: 7rem;
  padding: 1rem;

  @media (min-width: 800px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
  }

  @media (min-width: 1000px) {
    width: 70%;
  }

  @media (min-width: 1300px) {
    width: 50%;
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
  left: 3.2rem;  
`;

export const StyledPlayArrowIcon = styled(PlayArrowIcon)`
  position: relative;
  left: 0.5rem;
  color: #324F52;
  height: 1.2rem;
  width: 1.5rem;
`;

import React from 'react';
import styled from 'styled-components';

const Boutton = ({title, icon, handleClick}) => {
  return (
    <StyledWrapper>
      <button className="button" onClick={handleClick}>{icon} {" "} {title}</button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    padding: 1em 2em;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    letter-spacing: 5px;
    text-transform: uppercase;
    background: transparent;
    backdrop-filter: blur(15px)
    cursor: pointer;
    color: #d4af37;;
    transition: all 1000ms;
    font-size: 15px;
    position: relative;
    overflow: hidden;
    outline: 2px solid #d4af37;;
  }

  button:hover {
    color: #ffffff;
    transform: scale(1.1);
    outline: 2px solid #70bdca;
    box-shadow: 4px 5px 17px -4px #d4af37;;
  }

  button::before {
    content: "";
    position: absolute;
    left: -50px;
    top: 0;
    width: 0;
    height: 100%;
    background-color: #d4af37;;
    transform: skewX(45deg);
    z-index: -1;
    transition: width 1000ms;
  }

  button:hover::before {
    width: 250%;
  }`;

export default Boutton;

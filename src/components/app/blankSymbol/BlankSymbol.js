import React from 'react';
import styled from 'styled-components';

export const Symbol = styled.div`
  background-color: white;
  border: 1px solid black;
  height: 60px:
  margin: 1px;
  transition: background-solor .5s ease;
  width: 60px;
  `;

const BlankSymbol = (props) => {
  return <Symbol onClick={() => props.addSymbol(props.turn)}></Symbol>;
};


export default BlankSymbol;
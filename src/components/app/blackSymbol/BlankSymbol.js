import React from 'react';

const BlankSymbol = (props) => {
  return <Symbol onClick={() => props.addSymbol(props.turn)}></Symbol>;
}

export default BlankSymbol;
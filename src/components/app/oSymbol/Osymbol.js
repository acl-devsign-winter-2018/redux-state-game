import React from 'react';
import { Symbol } from '../blankSymbol/BlankSymbol';

const OSymbol = (props) => {
  return (
    <Symbol className={`symbol column${props.postiiton}`}>
      <svg viewBox=" 0 0 56 56">
        <circle cx={28} cy={28} r={25} stroke="black" strokeWidth="2" fill="none" />
      </svg>  
    </Symbol>
  );
};

export default OSymbol;
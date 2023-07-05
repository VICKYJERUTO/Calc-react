import React, { useState } from 'react';
import './Calculator.css';
const Calculator = () => {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult('');
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const renderButton = (name, handleClick) => {
    return (
      <button name={name} onClick={handleClick}>
        {name}
      </button>
    );
  };

  return (
    <div className="calculator">
      <input type="text" value={result} />
      <div className="keypad">
        <div className="row">
          {renderButton('1', handleClick)}
          {renderButton('2', handleClick)}
          {renderButton('3', handleClick)}
          {renderButton('+', handleClick)}
        </div>
        <div className="row">
          {renderButton('4', handleClick)}
          {renderButton('5', handleClick)}
          {renderButton('6', handleClick)}
          {renderButton('-', handleClick)}
        </div>
        <div className="row">
          {renderButton('7', handleClick)}
          {renderButton('8', handleClick)}
          {renderButton('9', handleClick)}
          {renderButton('*', handleClick)}
        </div>
        <div className="row">
          {renderButton('0', handleClick)}
          {renderButton('/', handleClick)}
          {renderButton('=', calculate)}
          {renderButton('C', clear)}
        </div>
      </div>
    </div>
  );
};

export default Calculator;

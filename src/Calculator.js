import React, { useState } from 'react';
import TextArea from './TextArea';
import CalcualtorButtons from './CalcualtorButtons';

const Calculator = () => {
  const [result, setResult] = useState('');
  const [equalsPressed, setEqualsPressed] = useState(false);

  const calculate = () => {
    setResult(eval(result));
  };
  const buttonClicked = buttonValue => {
    switch (buttonValue) {
      case '=':
        calculate();
        setEqualsPressed(true);
        break;
      case 'DEL':
        setResult('');
        break;
      case '/':
      case '+':
      case '-':
      case '*':
        setResult(result + buttonValue);
        setEqualsPressed(false);
        break;
      default:
        if (equalsPressed) {
          setResult('' + buttonValue);
          setEqualsPressed(false);
          return;
        }
        setResult(result + buttonValue);
    }
  };
  return (
    <div className="calculator">
      <TextArea result={result} />
      <CalcualtorButtons buttonClicked={buttonClicked} />
    </div>
  );
};

export default Calculator;

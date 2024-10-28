import React, { useState } from 'react';
import './style.css'

const Calc = () => {
    const [input, setInput] = useState('');

    const handleButtonClick = (buttonPressed) => {
        if (buttonPressed === 'C') {
            clearInput();
        } else if (buttonPressed === '=') {
            calculateResult();
        } else {
            addToInput(buttonPressed);
        }
    };

    const clearInput = () => {
        setInput('');
    };

    const calculateResult = () => {
        try {
            setInput(eval(input));
        } catch {
            setInput('Xato!');
        }
    };

    const addToInput = (buttonPressed) => {
        setInput(input + buttonPressed);
    };

    return (
        <div className="calculator">
            <input id="natija" type="text" value={input} readOnly />
            <div className="buttons">
                <button onClick={() => handleButtonClick('C')}>C</button>
                <button onClick={() => handleButtonClick('/')}>/</button>
                <button onClick={() => handleButtonClick('*')}>*</button>
                <button onClick={() => handleButtonClick('+')}>+</button>
                <button onClick={() => handleButtonClick('7')}>7</button>
                <button onClick={() => handleButtonClick('8')}>8</button>
                <button onClick={() => handleButtonClick('9')}>9</button>
                <button onClick={() => handleButtonClick('-')}>-</button>
                <button onClick={() => handleButtonClick('4')}>4</button>
                <button onClick={() => handleButtonClick('5')}>5</button>
                <button onClick={() => handleButtonClick('6')}>6</button>
                <button onClick={() => handleButtonClick('=')}>=</button>
                <button onClick={() => handleButtonClick('1')}>1</button>
                <button onClick={() => handleButtonClick('2')}>2</button>
                <button onClick={() => handleButtonClick('3')}>3</button>
                <button onClick={() => handleButtonClick('0')}>0</button>
                <button onClick={() => handleButtonClick('.')}>.</button>
            </div>
        </div>
    );
};

export default Calc;

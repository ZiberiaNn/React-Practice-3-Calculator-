import Button from './Components/Button'
import ClearBtn from './Components/ClearBtn'
import Screen from './Components/Screen'
import { evaluate } from 'mathjs';
import './App.css';
import { useState } from 'react';

function App() {

  const [input, setInput] = useState('');

  const updateInput = value => {
    setInput(input + value);
  };

  const calculateResult = () => {
    if(!isNaN(input)) return;
    
    try {
      setInput(evaluate(input));
    }
    catch {
      setInput('Error');
    }
  };

  return (
    <div className="App">
      <div className='calculator-container'>
        <Screen input={input}></Screen>
        <div className='row'>
          <Button handleClick={updateInput}>1</Button>
          <Button handleClick={updateInput}>2</Button>
          <Button handleClick={updateInput}>3</Button>
          <Button handleClick={updateInput}>+</Button>
        </div>
        <div className='row'>
          <Button handleClick={updateInput}>4</Button>
          <Button handleClick={updateInput}>5</Button>
          <Button handleClick={updateInput}>6</Button>
          <Button handleClick={updateInput}>-</Button>
        </div>
        <div className='row'>
          <Button handleClick={updateInput}>7</Button>
          <Button handleClick={updateInput}>8</Button>
          <Button handleClick={updateInput}>9</Button>
          <Button handleClick={updateInput}>*</Button>
        </div>
        <div className='row'>
          <Button handleClick={calculateResult}>=</Button>
          <Button handleClick={updateInput}>0</Button>
          <Button handleClick={updateInput}>.</Button>
          <Button handleClick={updateInput}>/</Button>
        </div>
        <div className='row'>
        <ClearBtn handleClear={()=> setInput('')}>Clear</ClearBtn>
        </div>
      </div>
    </div>
  );
}

export default App;

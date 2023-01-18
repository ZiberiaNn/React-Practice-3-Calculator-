import Button from './Components/Button'
import ClearBtn from './Components/ClearBtn'
import Screen from './Components/Screen'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='calculator-container'>
        <Screen></Screen>
        <div className='row'>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
        </div>
        <div className='row'>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>-</Button>
        </div>
        <div className='row'>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>*</Button>
        </div>
        <div className='row'>
          <Button>=</Button>
          <Button>0</Button>
          <Button>.</Button>
          <Button>/</Button>
        </div>
        <div className='row'>
        <ClearBtn>Clear</ClearBtn>
        </div>
      </div>
    </div>
  );
}

export default App;

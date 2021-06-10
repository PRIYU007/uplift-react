import './App.css';
import { useState } from 'react';
function App() {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState('');
  const counterHandler = () => {
    return setCounter(counter);
  };
  return (
    <div className="App">
      <div>
        <h1>{counter}</h1>
        <button onClick={counterHandler() + 1}>Increment</button>
        <button onClick={counterHandler() - 1}>Decrement</button>
      </div>
    </div>
  );
}

export default App;

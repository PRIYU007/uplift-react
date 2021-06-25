import { useState } from 'react';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
function App() {
  const [input, setInput] = useState('');
  const calcBtns = [];

  const calcInput = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error: Invalid Input');
    }
  };
  const clearInput = () => {
    setInput('');
  };

  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, '*', '/', '+', '-'].forEach(item => {
    calcBtns.push(
      <Button
        onClick={e => {
          setInput(input + e.target.value);
        }}
        value={item}
        key={item}
      >
        {item}
      </Button>
    );
  });
  return (
    <StyledApp>
      <GlobalStyles />
      <Input type="text" disabled value={input} />
      <Buttons>
        {calcBtns}
        <ClearButton onClick={clearInput}>Clear</ClearButton>
      </Buttons>
      <EqualToBtn
        onClick={() => calcInput('add', 'minus', 'multi', 'divi') || 0}
      >
        =
      </EqualToBtn>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  width: 25rem;
  border: 8px solid #222;
  text-align: center;
`;

const Buttons = styled.div`
  text-align: center;
  min-height: 60vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;

  text-align: center;
  grid-gap: 0.3rem;
`;
const Button = styled.button`
  padding: 0.2rem;
  font-size: 2rem;
  background-color: #333;
  color: #fff;
`;

const Input = styled.input`
  padding: 2rem 0;
  text-align: center;

  width: 100%;
  appearance: none;
  font-size: 2rem;
  color: #333;
  &:disabled {
    background-color: #ccc;
  }
`;

const EqualToBtn = styled.button`
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  height: 10vh;
  padding: 2rem 0;
  margin-top: 1rem;
`;
const ClearButton = styled.button`
  padding: 0.2rem;

  background-color: #333;
  color: #fff;
`;
export default App;

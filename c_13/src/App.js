import { useEffect, useState } from 'react';
import './App.scss';

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  }

  const decrease = () => {
    setCount(count - 1);
  }

  const reset = () => {
    setCount(0);
  }

  useEffect(() => {
    document.title = `c_13 (${count})`;
  }, [count]);

  return (
    <div className="App">
      <div className="counter">
        <div className="number">{count}</div>
        <div className="actions">
          <button onClick={increase}>increase</button>
          <button onClick={decrease}>decrease</button>
          <button onClick={reset}>reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;

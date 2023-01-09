import { useState } from 'react';

function Wrapper({ children }) {
  const [count, setCount] = useState(0);

  const increase = () => setCount((prev) => prev + 1);

  return (
    <div>
      {count}
      <button onClick={increase}>Increase</button>
      {children}
    </div>
  );
}

export default Wrapper;

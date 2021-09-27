import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <p>
      <button type="button" onClick={() => setCount((counter) => counter + 1)}>
        count is: {count}
      </button>
    </p>
  );
};

export default Counter;

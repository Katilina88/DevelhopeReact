import React, { useState, useCallback } from 'react';

export function Counter() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = useCallback(() => {
    setCounter((c) =>  c + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCounter((c) =>  c - 1);
  }, []);

  function handleCounterReset() {
    setCounter(0);
  }

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleCounterReset}>Reset</button>
    </div>
  );
}

import React, { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Cuenta: {count}</p>
      <button onClick={() => setCount(count + 1)}>Sumar</button>
      <button onClick={() => setCount(count - 1)}>Restar</button>
    </div>
  );
}

import React, { useState } from 'react';

export function InputControlado() {
  const [texto, setTexto] = useState('');
  return (
    <input
      type="text"
      value={texto}
      onChange={e => setTexto(e.target.value)}
      placeholder="Escribe algo..."
    />
  );
}

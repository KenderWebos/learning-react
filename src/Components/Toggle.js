import React, { useState } from 'react';

export default function Toggle() {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Ocultar' : 'Mostrar'}
      </button>
      {visible && <p>Ahora me ves 👀</p>}
    </div>
  );
}

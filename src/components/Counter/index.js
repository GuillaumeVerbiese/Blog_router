import { useState } from 'react';

function Counter() {
  const [value, setValue] = useState(0);

  return (
    <div>
      <h1>La valeur du compteur : {value}</h1>
      <button
        type="button"
        onClick={
          () => {
            console.log('Incrémentation du compteur !');
            setValue(value + 1);
          }
        }
      >
        Incrémentation
      </button>
    </div>
  );
}

export default Counter;

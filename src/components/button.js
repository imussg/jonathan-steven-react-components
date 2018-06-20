import React from 'react';

export default function CalcButton(props) {

  return (
      <button type='button' onClick={e =>props.addButton(e)}>Add</button>
  );
} 
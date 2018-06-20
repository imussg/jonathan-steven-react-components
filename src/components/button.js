import React from 'react';

export default function CalcButton(props) {

  return (
      <button type='button' onClick={e =>props.onClick(e)}>Add</button>
  );
} 
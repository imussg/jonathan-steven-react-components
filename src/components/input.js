import React from 'react';

export default function CalcInput(props) {

  return (
    <section>
      <label>Input</label>
      <input type='text' id={props.iden}></input>
    </section>
  );
} 
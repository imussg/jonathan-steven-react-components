import React from 'react';

export default function CalcInput(props) {

  return (
    <section>
      <label>{props.id}</label>
      <input type='text' id={props.iden} onChange={e => props.getVal(e)}></input>
    </section>
  );
} 
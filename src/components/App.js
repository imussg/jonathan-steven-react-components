import React from 'react';

import CalcButton from './button';
import CalcOutput from './output';
import CalcInput from './input';

export default function App(props) {

  return (
    <section>
      <h1 class='title'>J.S. Calculator</h1>
      <CalcInput />
      <CalcButton />
      <CalcButton />
      <CalcButton />
      <CalcButton />
      <CalcInput />
      <CalcOutput />
    </section>
  );
} 
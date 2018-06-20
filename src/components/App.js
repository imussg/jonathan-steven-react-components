import React from 'react';

import CalcButton from './button';
import CalcOutput from './output';
import CalcInput from './input';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      inputOne:'',
      inputTwo:''
    }
  }

  addButton(e){
    console.log('got here');
  }

  render() {
    return (
      <form onSubmit={(e)=> e.preventDefault()}>
        <h1 className='title'>J.S. Calculator</h1>
        <CalcInput />
        <CalcButton addButton={e =>this.addButton(e)}/>
        <CalcButton />
        <CalcButton />
        <CalcButton />
        <CalcInput />
        <CalcOutput />
      </form>
    );
  } 
} 
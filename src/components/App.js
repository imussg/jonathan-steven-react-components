import React from 'react';

import CalcButton from './button';
import CalcOutput from './output';
import CalcInput from './input';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      inputOne: 0,
      inputTwo: 0,
      answer: 0
    }
  }

  addButton(e){

    const inputOne = Number(document.getElementById("inputOne").value);
    const inputTwo = Number(document.getElementById("inputTwo").value);

    if( inputOne !== '' && inputTwo !== '') {
      this.setState({
        inputOne,
        inputTwo,
        answer: inputOne + inputTwo
      });
    } else {
      return;
    }
  }

  render() {
    return (
      <form onSubmit={(e)=> e.preventDefault()}>
        <h1 className='title'>J.S. Calculator</h1>
        <CalcInput iden="inputOne"/>
        <CalcButton onClick={e =>this.addButton(e)}/>
        <CalcButton />
        <CalcButton />
        <CalcButton />
        <CalcInput iden="inputTwo"/>
        <CalcOutput answer={this.state.answer}/>
      </form>
    );
  } 
} 
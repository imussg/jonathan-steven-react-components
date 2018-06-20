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

  calcButton(e){

    const inputOne = Number(document.getElementById("inputOne").value);
    const inputTwo = Number(document.getElementById("inputTwo").value);

    let answer = 0;
    if( inputOne !== '' && inputTwo !== '') {
      // console.log(e.target.innerHTML);
      switch(e.target.innerHTML) {
        case "add":
          answer = inputOne + inputTwo;
          break;
        case "subtract":
          answer = inputOne - inputTwo;
          break;
        case "multiply":
          answer = inputOne * inputTwo;
          break;
        case "divide":
          answer = inputOne / inputTwo;
          break;
        default:
          console.log("something went wrong");
      }
      this.setState({
        inputOne,
        inputTwo,
        answer
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
        <CalcButton iden="add" onClick={e =>this.calcButton(e)}/>
        <CalcButton iden="subtract" onClick={e =>this.calcButton(e)}/>
        <CalcButton iden="multiply" onClick={e =>this.calcButton(e)}/>
        <CalcButton iden="divide" onClick={e =>this.calcButton(e)}/>
        <CalcInput iden="inputTwo"/>
        <CalcOutput answer={this.state.answer}/>
      </form>
    );
  } 
} 
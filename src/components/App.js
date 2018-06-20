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

  getFirstVal(e){
    this.setState({
      inputOne: Number(e.currentTarget.value)
    })
  }

  getSecondVal(e){
    this.setState({
      inputTwo: Number(e.currentTarget.value)
    })
  }

  addButton(e){
    this.setState({
      answer: this.state.inputOne + this.state.inputTwo
    }) 
  }

  subButton(e){
    this.setState({
      answer: this.state.inputOne - this.state.inputTwo
    }) 
  }

  mulButton(e){
    this.setState({
      answer: this.state.inputOne * this.state.inputTwo
    }) 
  }

  divButton(e){
    this.setState({
      answer: this.state.inputOne / this.state.inputTwo
    }) 
  }

  render() {
    return (
      <form onSubmit={(e)=> e.preventDefault()}>
        <h1 className='title'>J.S. Calculator</h1>
        <CalcInput id={'Input One'} getVal={e => this.getFirstVal(e)} />
        <CalcInput id={'Input Two'} getVal={e => this.getSecondVal(e)} />
        <CalcButton id={'+'} operation={e =>this.addButton(e)}/>
        <CalcButton id={'-'} operation={e =>this.subButton(e)}/>
        <CalcButton id={'*'} operation={e =>this.mulButton(e)}/>
        <CalcButton id={'/'} operation={e =>this.divButton(e)}/>
        <CalcOutput answer={this.state.answer}/>
      </form>
    );
  } 
} 
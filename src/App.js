import React, { Component } from "react";
import './App.css';

// Calculator plan

// State:
// total
// Components:
// 10 number buttons
// 5 operator buttons
// clear button
// screen show the total

// Methods:
// Clear total state
// run eval
// adding to the total

function App() {
  return (
    <div className="Container">
      <Keypad />
    </div>
  );
}

class Keypad extends Component {
  state = {
    total: [],
    keys : [
      {symbol: "clear", meaning: "clearButton"},
      {symbol: "/", meaning: "operatorButton"},
      {symbol: "7", meaning: "numberButton"},
      {symbol: "8", meaning: "numberButton"},
      {symbol: "9", meaning: "numberButton"},
      {symbol: "*", meaning: "operatorButton"},
      {symbol: "4", meaning: "numberButton"},
      {symbol: "5", meaning: "numberButton"},
      {symbol: "6", meaning: "numberButton"},
      {symbol: "-", meaning: "operatorButton"},
      {symbol: "1", meaning: "numberButton"},
      {symbol: "2", meaning: "numberButton"},
      {symbol: "3", meaning: "numberButton"},
      {symbol: "+", meaning: "operatorButton"},
      {symbol: "0", meaning: "numberButton"},
      {symbol: "=", meaning: "operatorButton"},
    ]
  }
}

number = name => {
  if (name === "clear") {
    this.setState({ count: [] })
  } else if (name === "=") {
    this.setState(prevState => ({
      count: [eval(prevState.total.join(""))]
    }))
  } else {
    this.setState(prevState => ({
      count: [...prevState.total, name]
    }))
  }
}

render() 
{
  return (

<div className="calc">
<div className="row">
  <p>{this.state.total}</p>
</div>
<div className="buttonsWrapper">
<div className="buttons">
  {this.state.keys.map(key => {
   return (
   <button
   className={keys.meaning + " button"}
   onClick={() => this.number(keys.button)} >
   {keys.symbol}
   </button> )
   })}
</div>
</div>
</div>
)
}


export default App;

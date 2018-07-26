import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      count: 0,
    }
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);

  }

  handleIncrease() {
    const adding = this.state.count;
    this.setState({
      count: adding + 1,
    });
  }

  handleDecrease() {
    const minus = this.state.count;
    this.setState({
      count: minus - 1,
    })
  }

  render() {
    return (
      <div className="App">
        <h1>React Counter</h1>
        <div>{this.state.count}</div>
        <div>
          <button onClick={() => this.handleIncrease()}>+</button>
          <button onClick={() => this.handleDecrease()}>-</button>
        </div>
      </div>
    );
  }
}

export default App;

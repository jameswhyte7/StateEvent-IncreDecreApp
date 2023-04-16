import React, { Component } from 'react';
import './App.css'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }

  }
  handleIncreaseCount = (e) => {
    e.preventDefault();
    this.setState({count: this.state.count + 1})
  }

  handleDecreaseCount = (e) => {
    e.preventDefault();
    this.setState({count: this.state.count - 1})
  }

  render() {
    return (
      <div className='App'>
        <div className='container'>
          <h1>Counter: {this.state.count}</h1>
          <hr/>
          <div className='btn'>
            <button className='btn2' onClick={this.handleDecreaseCount}>Decrease - </button>
            <button className='btn1' onClick={this.handleIncreaseCount}>Increase + </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

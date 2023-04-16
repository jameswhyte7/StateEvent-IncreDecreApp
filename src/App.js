import React, { Component } from 'react';

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
      <div>
        <h1>Counter: {this.state.count}</h1>
        <hr/>
        <button onClick={this.handleIncreaseCount}>Increase</button>
        <button onClick={this.handleDecreaseCount}>Decrease</button>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Intro from '../Intro';
import './App.css';

class App extends Component {

  state = {
    series: []
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Intro message="You can find all your most loved series..."/>
        Length of series array: { this.state.series.length }
      </div>
    );
  }
}

export default App;

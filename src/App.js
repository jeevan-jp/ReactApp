import React, { Component } from 'react';
import Intro from './components/Intro';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Intro message="You can find all your most loved series..."/>
      </div>
    );
  }
}

export default App;

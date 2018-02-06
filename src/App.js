import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MeteorContainer from './components/MeteorContainer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
      <MeteorContainer />
        </p>
      </div>
    );
  }
}

export default App;

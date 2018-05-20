import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './App.css';

import Sum, {multiply, sub } from '../Service/Helper';
// import * as Helper from './Helper';

import TodoInput from '../TodoInput/TodoInput';

class App extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="App" style="">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello World</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div>
          <TodoInput />
        </div>
      </div>
    );
  }
}

export default App;

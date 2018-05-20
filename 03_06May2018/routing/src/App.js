import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Helper from './service/helper';
import HttpService from './service/http';

class App extends Component {

  state = { todo: [] };

  // constructor(props) {
  //   super(props)
  // }

  componentDidMount() {
    this.setState({todo: Helper.todo});

    HttpService.get('https://api.github.com/users/uqutub')
                    .subscribe(({ response }) => {
                        console.log('response ', response);
                    });

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Length: {this.state.todo.length}
        </p>
      </div>
    );
  }
}

export default App;

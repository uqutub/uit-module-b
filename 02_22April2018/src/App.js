import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import UserView from './UserView';
import TodoInput from './TodoInput';

import Sample from './Sample';

class App extends Component {

  state = {
    users: [{id: 1, name: 'user1'}, {id: 2, name: 'user2'}, {id: 3, name: 'user3'}],
    updateUser: null,
    childText: 'Sample 1'
  }


  deleteItem = (user) => {
    console.log('App.js delete item...', user.id);
    const abc = [...this.state.users];
    abc[1] = {id: 44, name: 'user44'};

    this.setState({users: abc});
  }

  updateItem = () => {
    console.log('App.js update item...');
  }

  addUser = (obj) => {
    let _user = [...this.state.users];
    _user.push(obj);
    this.setState({users: _user});

  }

  changeParentText = () => {
    this.setState({childText: 'Parent Text Changes' + Date.now()});
  }

  updateParent = (obj) => {
    console.log('Child text Changed', obj);
    this.setState({childText: obj.text})
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
        <div>
        <TodoInput submit={this.addUser} user={this.state.updateUser}/>
        </div>
        <div>
          {
            this.state.users.map(val => {
              return(
                <UserView user={val} delete={this.deleteItem} update={this.updateItem} />
              );
            })
          }
        </div>
        
        <p>
          <button onClick={this.changeParentText}> chnage the text</button>
        </p>

        <Sample text={this.state.childText} output={this.updateParent} />


      </div>
    );
  }
}

export default App;

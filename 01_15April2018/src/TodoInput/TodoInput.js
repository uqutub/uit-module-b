import React, { Component } from 'react';
import logo from '../assets/logo.svg';

import NestedComp from '../NestedComp/NestedComp';

class TodoInput extends Component {

  todo = [];

  state = {
      appName: 'My App Name',
      task: ''
  }

  constructor(props) {
    super(props);
    // alert('rendring todoInput')
    // setTimeout(() => {
    //     console.log('changing app name')
    //     this.setState({appName: 'Changed......via state'})
    // }, 2000)
    // this.onChangeHandler = this.onChangeHandler.bind(this);
  }

//   inputbox;
  onChangeHandler = (ev) => {
        console.log(ev.target.name);
        console.log(ev.target.value);
        // this.inputbox = ev.target.value;
        // this.setState({'task': ev.target.value});
        this.setState({[ev.target.name]: ev.target.value});
        
  }

  submitHandler = (ev) => {
      console.log(ev)
      this.todo.push(this.state.task)
      console.log('todo length', this.todo)
      this.setState({task: ''});
      ev.preventDefault();

  }


  render() {
    return (
      <div>
        <h1>Todo Input Component - {this.state.appName}</h1>

        <form onSubmit={this.submitHandler}>
            <div>
                <input type="text" name="task" value={this.state.task} onChange={this.onChangeHandler}/>
            </div>
           
            <div>
                <input type="submit" name="add" value="Add"/>
            </div>

        </form>

        <NestedComp />
      </div>
    );

  }
}

export default TodoInput;

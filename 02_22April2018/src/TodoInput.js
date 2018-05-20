import React, { Component } from 'react';

class TodoInput extends Component {

  state = {
      appName: 'My App Name',
      task: '',
      mode: 'Add'
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


  componentWillReceiveProps(nextProps) {
    if(nextProps.updateUser){
        this.setState({mode: 'Update'})
    } else {
        this.setState({mode: 'Add'})
    }
  }

  submitHandler = (ev) => {
      if(this.state.mode == 'Add') {
        // addd
      } else {
        // update
      }
      console.log(ev)
      this.props.submit({
          id: Date.now(),
          name: this.state.task
      })
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
                <input type="submit" name="add" value={this.state.mode}/>
            </div>

        </form>
      </div>
    );

  }
}

export default TodoInput;

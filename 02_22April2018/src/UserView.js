import React, { Component } from 'react';
import './App.css';

class UserView extends Component {

    componentWillReceiveProps(nextProps) {
        if(nextProps.user.id == 44) {
            console.log('this ', this.props.user.name)
            console.log('next ', nextProps.user.name)
        }
        // console.log('componentWillReceiveProps ', nextProps)
    }

    componentDidMount() {
        console.log('this.props, ', this.props);
    }

    deleteFromChild = () => {
        this.props.delete(this.props.user);

    }

  render() {
    return (
        <div>   
          {this.props.user.name} 
          <button onClick={this.deleteFromChild}>Delete </button>
          <button>Edit </button>
        </div>
    );
  }
}

export default UserView;

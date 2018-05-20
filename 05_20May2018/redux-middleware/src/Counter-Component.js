import React, { Component } from 'react';

import { connect } from 'react-redux';

import { CounterAction } from './store/action/counter';

class CounterComponent extends Component {

  componentWillReceiveProps(props) {
    console.log('props ', props)
  }
  
  render() {
    return (
      <div>
          Counter: {this.props.count}
          <p>
              <button onClick={this.props.increment}>Increment ++</button> <strong>|</strong> <button onClick={this.props.decrement}>Decrement --</button>
          </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        count: state.CounterReducer['count']
    }
}
  
  const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch(CounterAction.increment()),
        decrement: () => dispatch(CounterAction.decrement())
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);

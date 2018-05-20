import React, { Component } from 'react';

class Sample extends Component {


  constructor(props) {
    super(props);
  }

  callParent = () => {
      console.log('clicked form child Sample');
      this.props.output({id: Date.now(), text: 'Changed from Child ' + Date.now()});
  }



  render() {
    return (
      <div>
        <h1>Sample - {this.props.text} </h1>

        <button onClick={this.callParent}> Update Parent </button>

       
      </div>
    );

  }
}

export default Sample;

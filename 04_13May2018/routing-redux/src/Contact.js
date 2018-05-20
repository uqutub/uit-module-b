import React from 'react';

const Contact = (props) => (
    <div>
      <h2>Contact Us</h2>
      <button onClick={() => {
          console.log('props ', props);
          // props.history.push('/about');

          props.history.push({
            pathname: '/about', 
            state: {'name': 'bar', 'age': 'foo'}
        });
      }}>Go to About</button>
    </div>
  )

  export default Contact;
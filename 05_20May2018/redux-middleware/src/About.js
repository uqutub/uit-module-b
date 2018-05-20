import React from 'react';
import { Link } from 'react-router-dom';
  

const About = (props) => (
    <div>
      <h2>About</h2>
      <div>
        <Link to="/contact">Contact</Link>
      </div>

      {
        props.location.state && <p>Data From Route: {JSON.stringify(props.location.state)}</p>
      }
    
    {/* <Link to={{
      pathname: '/template',
      search: '?query=abc',
      state: { detail: response.data }
    }}> My Link </Link> */}


    </div>
  )


export default About;
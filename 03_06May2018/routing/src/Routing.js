import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import App from './App';
import About from './About';
import Contact from './Contact';

const Routing = () => (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
  
        <hr/>
  
        <Route exact path="/" component={App}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        {/* <Route path="/git" component={Git}/> */}
      </div>
    </Router>
  )
  export default Routing
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


import { Provider } from 'react-redux';
import { store } from './store/index';

import App from './App';
import About from './About';
import Contact from './Contact';
import CounterComponnent from './Counter-Component';

const Routing = () => (
    <Provider store={store}>
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/counter">Redux Counter</Link></li>
          </ul>
    
          <hr/>
    
          <Route exact path="/" component={App}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/counter" component={CounterComponnent}/>
          {/* <Route path="/git" component={Git}/> */}
        </div>
      </Router>
    </Provider>
  )

  export default Routing
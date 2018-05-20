import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Routing from './Routing';

// import { Provider } from 'react-redux';
// import { store } from './store/index';
// const MyStore = () => (
//     <Provider store={store}>
//       <Routing />
//     </Provider>
// )


ReactDOM.render(<Routing />, document.getElementById('root'));
registerServiceWorker();

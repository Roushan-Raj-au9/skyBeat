import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux' ;
import Store from './store/StoreFile' ;
import Routing from './route/Routing' ;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store} >
      <Routing />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


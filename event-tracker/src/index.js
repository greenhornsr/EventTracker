import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import configureStore from './configureStore';

const store = configureStore();

// const rootElement = document.getElementById
render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
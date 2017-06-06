import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/AppStatic';
import './index.css';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import combinedReducers from './reducers/index';
import initialState from './data/state/initialState'

const store = createStore(combinedReducers, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

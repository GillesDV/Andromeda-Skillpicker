import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/AppStatic';
import './index.css';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers/index';
import initialState from './data/state/initialState'

const store = createStore(allReducers, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from './reducers/reducers'

let store = createStore(todoApp)
let rootElement = document.getElementById('app')


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
  <App />
</Provider>,
);
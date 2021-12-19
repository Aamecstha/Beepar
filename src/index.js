import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import UrlPatterns from './Routes';
import {createStore} from "redux"
import {Provider} from "react-redux"
import cartReducer from './reducer/cartReducer';

const store=createStore(cartReducer)

ReactDOM.render(
    <Provider store={store}>
      <UrlPatterns />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';

import { applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducer from "./reducers/store";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Todo from './Pages/Todo';
import combineReducers from './reducers';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({ reducer: combineReducers }, applyMiddleware(thunk))
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

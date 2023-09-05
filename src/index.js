import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { rootReducer } from './components/reducers/rootReducer';
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage'
import "bootstrap/dist/css/bootstrap.min.css";
// import { initialState } from './components/reducers/photoFormReducer';

const composeEnhancers = compose(applyMiddleware(thunk),persistState(null,"data"),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());

const store = createStore(rootReducer,composeEnhancers);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store';
import { populateProduce } from './store/produceReducer';
import './index.css';

import App from './App';

const store = configureStore();

function Root() {

  if(process.env.NODE_ENV !== 'production'){
    window.store = store;
    window.populateProduce = populateProduce;
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
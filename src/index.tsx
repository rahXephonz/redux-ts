import React from 'react';
import ReactDOM from 'react-dom';
import App from './router/App';
import { Provider } from 'react-redux';
import store from 'app/store';

// tailwind
import './styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('__root')
);

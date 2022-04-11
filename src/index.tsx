import React from 'react';
import ReactDOM from 'react-dom';
import App from './router/App';
import { Provider } from 'react-redux';

// tailwind
import './styles/index.css';
import { store } from 'app/store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('__root')
);

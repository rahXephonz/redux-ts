import React from 'react';
import ReactDOM from 'react-dom';
import App from './router/App';
import { Provider } from 'react-redux';
import store from 'app/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
// tailwind
import './styles/index.css';

let persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading="null" persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('__root')
);

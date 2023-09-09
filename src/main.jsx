import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { GreenLoading } from './Components/GreenLoading/GreenLoading.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './Redux/store.js';

// el AuthPrvider es para la configuracion de AUTH0
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </Provider>
);

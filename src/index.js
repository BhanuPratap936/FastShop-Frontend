import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import store from './store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Suspense>
    <App />
    <Toaster
      toastOptions={{
        position: 'top-right',
        style: {
          background: '#283046',
          color: 'white'
        }
      }}
    />
    </Suspense>
  </Provider>
);



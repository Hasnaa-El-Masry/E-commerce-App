import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/navbar.scss';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
// Awesome CSS
import "font-awesome/css/font-awesome.min.css";
// Skeleton CSS
import 'react-loading-skeleton/dist/skeleton.css'

import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import store from './redux';
import {Provider} from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);


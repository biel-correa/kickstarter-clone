import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CartPage from './pages/CartPage/CartPage';
import IdPage from './pages/ProjectsPage/IdPage';



const router = createBrowserRouter([
  {
    path: '/cart', 
    element: <CartPage />
  },
  {
    path: '/projects/10',
    element: <IdPage />
  }
    ]
  )


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} >
      <App />
    </RouterProvider>
  </React.StrictMode>
  
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

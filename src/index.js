import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import CartPage from './pages/CartPage/CartPage';
import ProjectPage from './pages/ProjectsPage/ProjectsPage';
import ViewProjectPage from './pages/ProjectsPage/ViewProjectPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/projects" replace />
  }, {
    path: '/cart',
    element: <CartPage />
  }, {
    path: '/projects',
    element: <ProjectPage />
  }, {
    path: '/projects/:id',
    element: <ViewProjectPage />
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import CartPage from './pages/CartPage/CartPage';
<<<<<<< HEAD
import ViewProjectPage from './pages/ProjectsPage/ViewProjectPage';

=======
import ProjectPage from './pages/ProjectsPage/ProjectsPage';
>>>>>>> b96939c067a510da64484ccc44c4405f12454db5


const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/projects" replace />
  }, {
    path: '/cart',
    element: <CartPage />
<<<<<<< HEAD
  },
  {
    path: '/projects/10',
    element: <IdPage />
=======
  }, {
    path: '/projects',
    element: <ProjectPage />
>>>>>>> b96939c067a510da64484ccc44c4405f12454db5
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

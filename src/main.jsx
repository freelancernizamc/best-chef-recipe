import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ChefDetails from './components/chefDetails/chefDetails'
import Main from './layouts/Main'
import Blog from './components/Blog/Blog'
import Login from './components/Login/Login/Login'
import Register from './components/Login/Register/Register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />
  },
  {
    path: `/chefs/:id`,
    element: <ChefDetails />
  },
  {
    path: '/blog',
    element: <Blog />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Main />
    </RouterProvider>
  </React.StrictMode>
);


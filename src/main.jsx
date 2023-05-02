import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ChefDetails from './components/chefDetails/chefDetails'
import Main from './layouts/Main'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />
  },
  {
    path: `/chefs/:id`,
    element: <ChefDetails />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

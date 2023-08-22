import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router';
import {router} from './routers/router'
import AuthProvider from './context/auth/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)


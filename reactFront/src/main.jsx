import * as React from "react";
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router';
import {router} from './routers/router'
import AuthProvider from './context/auth/AuthProvider'
import {NextUIProvider} from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <NextUIProvider>
        <RouterProvider router={router} />
      </NextUIProvider>
    </AuthProvider>
  </React.StrictMode>,
)


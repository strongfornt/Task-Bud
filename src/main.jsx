import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom/dist/index.js'
import './index.css'
import { router } from './Router/Router'
import ContextProvider from './ContextProvider/ContextProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
    <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>,
)

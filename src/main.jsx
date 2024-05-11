import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom/dist/index.js'
import './index.css'
import { router } from './Router/Router'
import ContextProvider from './ContextProvider/ContextProvider'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
    <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
    <Toaster/>
    </ContextProvider>
  </React.StrictMode>,
)

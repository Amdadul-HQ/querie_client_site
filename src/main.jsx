import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes'
import ContextComponent from './Context/ContextComponent'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async'

// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <ContextComponent>
        <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
        </QueryClientProvider>
      </ContextComponent>
    </HelmetProvider>
  </React.StrictMode>,
)

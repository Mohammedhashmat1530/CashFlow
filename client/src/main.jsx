import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import {HeaderInfo,InfoCards,History,Account,Calendar,Analysis,Settings, Services,Contact,General } from './components/index'




const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        path:'/services',
        element:<Services />
      },
      {
        path:'/contact',
        element:<Contact />
      },
      {
        path:'/',
        element:<General />,
        children: [
      {
        path: '/',
        element: (
          <>
          <HeaderInfo />
          <InfoCards />
          </>
        )
      },
      {
        path: '/history',
        element: <History />
      },
      {
        path: '/account',
        element: <Account />
      },
      {
        path: '/calendar',
        element: <Calendar />
      },
      {
        path: '/analysis',
        element: <Analysis />
      },
      {
        path: '/settings',
        element: <Settings />
      },
      {
        path: '/services',
        element: <Services />
      },
      
      
    ]
      }
    ]
  }
])


if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>,
)

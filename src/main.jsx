import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './modules/dashboard/dashboard.jsx'
import Admin from './modules/admin/admin.jsx'
import AuthPage from './modules/auth/authPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthPage />
  },
  {
    path: '/auth',
    element: <AuthPage />
  },
  {
    path: '/app',
    element: <App />,
    children: [
      {
        path:"",
        element: <Dashboard/>
      },
      {
        path:"dashboard",
        element: <Dashboard/>
      },
      {
        path:"admin",
        element: <Admin/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

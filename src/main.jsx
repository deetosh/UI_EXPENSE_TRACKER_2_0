import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './modules/dashboard/dashboard.jsx'
import Admin from './modules/admin/admin.jsx'
import AuthPage from './modules/auth/authPage.jsx'
import Expenses from './modules/expenses/expenses.jsx'
import Errpage from './modules/Error_page/Errpage.jsx'
import Server_error from './modules/Server_er/Server_error.jsx'


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
        path:"expenses",
        element:<Expenses/>
      },
      {
        path:"admin",
        element: <Admin/>
      }
      
    ]
  },
  {
    path:'/server_error',
    element:<Server_error/>
  },
  {
    path: '*',
    element: <Errpage />
  }
  
])

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <RouterProvider router={router} />
  // </StrictMode>,
)

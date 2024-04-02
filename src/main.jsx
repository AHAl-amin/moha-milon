import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './componants/Roots';
import Home from './componants/Home';
import Login from './componants/Login';
import Register from './componants/Register';
import AuthProvider from './providers/AuthProvider';
import Orders from './componants/Orders';
import PrivetRouts from './Routs/PrivetRouts';
import Profils from './componants/Profils';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path:"/orders",
        element:<PrivetRouts><Orders></Orders></PrivetRouts>
      },
      {
        path:"/profile",
        element:<PrivetRouts><Profils></Profils></PrivetRouts>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

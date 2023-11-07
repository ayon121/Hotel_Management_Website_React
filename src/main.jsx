import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Pages/Root';
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login';
import Authproviders from './Providers/Authproviders';
import Register from './Components/Pages/Register';
import Error from './Components/Pages/Error';
import Rooms from './Components/Pages/Rooms';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <Error></Error>,
    children : [
      {
        path : "/",
        element : <Home></Home>
      },
      {
        path : "/login",
        element : <Login></Login>
      },
      {
        path : "/register" ,
        element : <Register></Register>     
      },
      {
        path : "/Rooms",
        element : <Rooms></Rooms>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authproviders>
    <RouterProvider router={router} />
    </Authproviders>
    
  </React.StrictMode>,
)

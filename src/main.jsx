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
import RoomDetails from './Components/Pages/RoomDetails';
import Mybookings from './Components/Pages/Mybookings';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Review from './Components/Review/Review';

import {
  QueryClient,
  QueryClientProvider,
  
} from '@tanstack/react-query'
import Payment from './Components/Payment/Payment';

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
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
        path: "/Rooms",
        element: <Rooms></Rooms>
      },
      {
        path: "/roomdetails/:id",
        element: <PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>

      },
      {
        path: "/mybookings/:id",
        element: <PrivateRoute><Mybookings></Mybookings></PrivateRoute>

      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/givereviews/:id",
        element: <PrivateRoute><Review></Review></PrivateRoute>

      },
      {
        path : "/payment",
        element : <Payment></Payment>

      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authproviders>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>

    </Authproviders>

  </React.StrictMode>,
)

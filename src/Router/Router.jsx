import {
    createBrowserRouter,
   
  } from "react-router-dom";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Error from "../Pages/Error/Error";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";
import PrivateRoute from "../Private/PrivateRoute";
import Assignments from "../Pages/Assignments/Assignments";

  export const router = createBrowserRouter ([
    {
        path:'/',
        element:<RootLayout/>,
        errorElement:<Error/>,
        children:[
            {
              path:'/',
              element:<Home/>  
            },
            {
              path:'/login',
              element:<Login/>
            },
            {
              path:'/register',
              element:<Register/>
            },
            {
              path:'/createAssignment',
              element:<PrivateRoute><CreateAssignment/></PrivateRoute>
            },
            {
              path:'/assignments',
              element:<Assignments/>
            }
        ]
    }
  ])
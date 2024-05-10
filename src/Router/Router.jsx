import {
    createBrowserRouter,
   
  } from "react-router-dom";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home/Home";

  export const router = createBrowserRouter ([
    {
        path:'/',
        element:<RootLayout/>,
        children:[
            {
              path:'/',
              element:<Home/>  
            }
        ]
    }
  ])
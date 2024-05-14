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
import AssignmentUpdate from "../Pages/Assignments/AssignmentsUpdate/AssignmentUpdate";
import AssignmentDetails from "../Components/AssignmentDetails/AssignmentDetails";
import SubmittedAssignment from "../Pages/MySubmittedAssignment/SubmittedAssignment";
import PendingAssignment from "../Pages/PendingAssignment/PendingAssignment";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";

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
              
            },
            {
              path:'/updateAssignment/:id',
              element:<PrivateRoute><AssignmentUpdate/></PrivateRoute>,
              loader:({params})=>fetch(`http://localhost:5000/assignment/${params.id}`)
            },
            {
              path:'/assignmentDetails/:id',
              element:<PrivateRoute><AssignmentDetails/></PrivateRoute>,
              loader:({params})=>fetch(`http://localhost:5000/assignment/${params.id}`)
            },
            {
              path:'/mySubmitted',
              element:<PrivateRoute><SubmittedAssignment/></PrivateRoute>
            },
            {
              path:'/pendingAssignment',
              element:<PrivateRoute><PendingAssignment/></PrivateRoute>
            },
            {
              path:'/updateProfile',
              element:<PrivateRoute><UpdateProfile/></PrivateRoute>
            }
        ]
    }
  ])
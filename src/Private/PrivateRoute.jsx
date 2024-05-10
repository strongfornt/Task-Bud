/* eslint-disable react/prop-types */


import { Navigate } from "react-router-dom";

import { useLocation } from "react-router-dom";



import useAuth from "../useHooks/useAuth";
import Spinner from "../Shared/Spinner/Spinner";

export default function PrivateRoute({ children }) {
  const location = useLocation();

  const { user, loading } = useAuth()

  if (loading) {
    return <Spinner />;
  }

  if (user) return children;

  return <Navigate to="/login" state={location.pathname} replace={true} />;
}
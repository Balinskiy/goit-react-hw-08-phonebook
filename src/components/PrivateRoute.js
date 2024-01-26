import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoggedInSelector } from 'store/auth/selectors';

export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(isLoggedInSelector);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
}

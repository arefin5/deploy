import React from 'react';
import { Navigate } from 'react-router-dom';
import {useUserContext } from '../../context';

export default function ProtectedRoute({ children }) {
  const {user} = useUserContext()
  
  return user ? children : <Navigate to="/login" />;
}
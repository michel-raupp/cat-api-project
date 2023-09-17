import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../components/auth/index';
import Login from './login';

// Componente que redireciona para a página de login se o usuário não estiver autenticado
export const PrivateRoute = ({ children }) => {
  const { authenticated } = useAuth();

  return authenticated ? (
    children
  ) : (
    <Navigate to="/"/>
  );
};



/* eslint-disable react/prop-types */
import  { createContext, useContext, useEffect, useState } from 'react';

// Crie um contexto de autenticação
const AuthContext = createContext();



export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(() => {
    // Tente recuperar o valor do 'authenticated' do localStorage
    const storedAuthenticated = JSON.parse(localStorage.getItem('authenticated'));
    return storedAuthenticated || false;
  });

  // Use useEffect para atualizar o localStorage sempre que o estado de autenticação mudar
  useEffect(() => {
    // Armazene o valor de 'authenticated' no localStorage
    localStorage.setItem('authenticated', JSON.stringify(authenticated));
  }, [authenticated]);

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

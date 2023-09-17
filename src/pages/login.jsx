import React, { useState } from 'react';
import { useAuth } from '../components/auth';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const { setAuthenticated } = useAuth(); // Use o contexto de autenticação
  const navigate = useNavigate(); // Obtenha a função de navegação

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aqui você pode adicionar lógica de autenticação.
    // Neste exemplo, estamos apenas verificando se o email e senha são iguais a "admin".
    if (email === 'admin' && password === 'senha') {
      setAuthenticated(true); // Define o estado de autenticação como verdadeiro
      navigate('/cats'); // Use a função navigate para redirecionar

    } else {
      setAuthenticated(false); // Define o estado de autenticação como falso
      alert('Credenciais incorretas. Tente novamente.');
    }
  };

  return (
    <div>
      <h2>Tela de Login</h2>
      <div>
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Senha:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleLogin}>Login</button>
      </div>
      
    </div>
  );
}

export default Login;

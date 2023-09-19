import { useState } from 'react';
import { useAuth } from '../components/auth';
import { useNavigate } from 'react-router-dom';
import { StyledInput } from '../components/input';
import { Button, Flex, StyledLogin } from '../styles/styles';
import logo from "../assets/icons/cat-icon.svg"
function Login() {
  const { setAuthenticated } = useAuth();
  const navigate = useNavigate(); 

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    if (user === 'admin' && password === '123') {
      setAuthenticated(true); 
      navigate('/cats'); 

    } else {
      setAuthenticated(false);
      alert('User or Password wrong, try again!');
    }
  };

  return (
    <StyledLogin>
      <div className='bg'>
        <img src={logo} alt="cat-logo" />
        <h2>The Cat Facts</h2>
        <p>All about cats!</p>
        <Flex isCollum="yes">


          <StyledInput
            type="text"
            placeholder='user'
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />

          <StyledInput
            type="password"
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button isLogin="yes" onClick={handleLogin}>Login</Button>
        </Flex>
      </div>
    </StyledLogin>
  );
}

export default Login;

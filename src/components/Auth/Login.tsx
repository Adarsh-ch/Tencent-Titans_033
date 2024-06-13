import React, { useRef, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase';
import { Alert } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    if (emailRef.current && passwordRef.current) {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;

      try {
        setError('');
        await signInWithEmailAndPassword(auth, email, password);
        // Redirect or show success message
        navigate('/')
      } catch (error) {
        // Handle error
        setError('Failed to login');
      }
    }
  };

  return (
    <>
    {error && <Alert variant='danger'>{error}</Alert>}
    <form onSubmit={handleLogin}>
      <input type="email" ref={emailRef} placeholder="Email" required />
      <input
        type="password"
        ref={passwordRef}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
    <NavLink to='/forgot-password'>Forgot Password?</NavLink>
    <p>Need an account <NavLink to='/register'>Register</NavLink></p>
    </>
  );
};

export default Login;

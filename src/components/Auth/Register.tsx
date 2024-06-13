import React, { useRef, useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase';
import { Alert } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();

    if (
      emailRef.current &&
      passwordRef.current &&
      confirmPasswordRef.current
    ) {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      const confirmPassword = confirmPasswordRef.current.value;

      if (password === confirmPassword) {
        try {
          setError('');
          await createUserWithEmailAndPassword(auth, email, password);
          // Redirect or show success message
          navigate('/');
        } catch (error: unknown) {
          // Ensure the error is of type Error
          if (error instanceof Error) {
            setError(error.message);
          } else {
            setError('An unexpected error occurred');
          }
        }
      } else {
        // Handle password mismatch error
        setError('Passwords do not match.');
      }
    }
  };

  return (
    <>
      {error && <Alert variant='danger'>{error}</Alert>}
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          ref={emailRef}
          required
        />
        <input
          type="password"
          placeholder="Password"
          ref={passwordRef}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          ref={confirmPasswordRef}
          required
        />
        <button type="submit">Register</button>
        <p>Already have an account? <NavLink to='/login'>Login</NavLink></p>
      </form>
    </>
  );
};

export default Register;

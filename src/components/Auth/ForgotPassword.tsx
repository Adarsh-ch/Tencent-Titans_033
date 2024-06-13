import React, { useRef, useState } from 'react';
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase';
import { Alert } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';

const ForgotPassword: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string>('');

  const handleReset = async (event: React.FormEvent) => {
    event.preventDefault();

    if (emailRef.current) {
      const email = emailRef.current.value;

      try {
        setError('');
        await sendPasswordResetEmail(auth, email);
        // Redirect or show success message
      } catch (error) {
        // Handle error
        setError('Failed to Reset');
      }
    }
  };

  return (
    <>
    {error && <Alert variant='danger'>{error}</Alert>}
    <form onSubmit={handleReset}>
      <input type="email" ref={emailRef} placeholder="Email" required />
      <button type="submit" >Reset Password</button>
    </form>
     <NavLink to='/login'>Login</NavLink>
    </>
  );
};

export default ForgotPassword;

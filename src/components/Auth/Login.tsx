import { useEffect, useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { UserProfile } from 'firebase/auth';
import { fetchData } from '../../services/api';
import axios from 'axios';

const Login: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const [show, setShow] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const passwordRef = useRef<HTMLInputElement>(null);
  const [users,setUsers] = useState<UserProfile[]>([]);
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const loadUsers = async () => {
    const response = await fetchData('/userProfiles');
    setUsers(response);
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (emailRef.current && passwordRef.current) {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;

      try {
        setError('');
        setLoading(true);
        await login(email, password);
        if(email === 'admin@gmail.com'){
          navigate('/admin')
        }
        else{
          const user = users.filter(user => user.user_id==email);
        if(user.length==0){
         // console.log('new user')
          const newUser = {
           user_id:email,
           user_listing:[],
           user_wishlist:[]
          };

          axios.post(`http://localhost:5001/userProfiles`,newUser)
        }
        navigate('/');
        }
      } catch {
        setError('Failed to log in');
      }

      setLoading(false);
    }
  }

  useEffect(()=>{
    loadUsers();
  },[])

  return (
    <>
      <Card className="shadow">
        <Card.Body className="px-5 py-4">
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <div className="input-password">
                <Form.Control
                  type={show ? 'text' : 'password'}
                  value={password}
                  ref={passwordRef}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                >
                </Form.Control>
                <span onClick={() => setShow((prev) => !prev)}>
                  {show ? (
                    <i className="fa-regular fa-eye-slash"></i>
                  ) : (
                    <i className="fa-regular fa-eye"></i>
                  )}
                </span>
              </div>
            </Form.Group>
            <Button disabled={loading} className="w-100 my-3" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/register">Sign Up</Link>
      </div>
    </>
  );
};

export default Login;

import { useEffect, useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { UserProfile } from 'firebase/auth';
import { fetchData } from '../../services/api';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { SET_USER_ID } from '../../redux/actionTypes';

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
  const dispatch = useDispatch();

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
        dispatch({type:SET_USER_ID,payload:email})
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

          axios.post(`https://server-deploy-7sg1.onrender.com/userProfiles`,newUser)
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
            <Button disabled={loading} className="w-100 my-3 btn btn-primary" type="submit" id="liveToastBtn">
              Log In
            </Button>
            {/* <button type="button" className="btn btn-primary" id="liveToastBtn">Show live toast</button> */}

         <div className="toast-container position-fixed bottom-0 end-0 p-3">
  <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div className="toast-header">
      <img src="..." className="rounded me-2" alt="..."/>
      <strong className="me-auto">Bootstrap</strong>
      <small>11 mins ago</small>
      <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div className="toast-body">
     Login ,Successfull
    </div>
  </div>
</div>
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

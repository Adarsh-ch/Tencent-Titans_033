import React from 'react';
import Login from '../components/Auth/Login';
import { Container } from 'react-bootstrap';

const LoginPage: React.FC = () => {
  return <Container
  className="d-flex align-items-center justify-content-center"
  style={{ minHeight: "80vh" }}
>
  <div className="w-100" style={{ maxWidth: "430px" }}>
    <Login />
    </div>
    </Container>
};

export default LoginPage;

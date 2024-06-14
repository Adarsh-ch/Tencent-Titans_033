import React from 'react';
import Register from '../components/Auth/Register';
import { Container } from 'react-bootstrap';

const RegisterPage: React.FC = () => {
  return  <Container
  className="d-flex align-items-center justify-content-center"
  style={{ minHeight: "80vh" }}
>
  <div className="w-100" style={{ maxWidth: "450px" }}>
    <Register />
    </div>
    </Container>
};

export default RegisterPage;

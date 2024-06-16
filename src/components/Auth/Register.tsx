import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link,  useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import axios from "axios"

const Register =() => {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const [show, setShow] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const passwordConfirmRef = useRef<HTMLInputElement>(null)
  const { signup } = useAuth()
  const [error, setError] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const navigate = useNavigate()

  async function handleSubmit(e :React.FormEvent) {
    e.preventDefault()

    if (passwordRef.current?.value !== passwordConfirmRef.current?.value) {
      return setError("Passwords do not match")
    }

    if (emailRef.current && passwordRef.current) {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;

    try {
      setError("")
      setLoading(true)
      await signup(email, password)
      const newUser = {
        user_id:email,
        user_listing:[],
        user_wishlist:[]
       };

       axios.post(`http://localhost:5001/userProfiles`,newUser)
      navigate("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }
}

  return (
    <>
      <Card className="shadow">
        <Card.Body className="px-5 py-4">
          <h2 className="text-center mb-4">Sign Up</h2>
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
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100 my-3" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  )
}

export default Register;
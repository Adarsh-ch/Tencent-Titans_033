import { Container } from 'react-bootstrap'
import ForgotPassword from '../components/Auth/ForgotPassword'

const ForgotPasswordPage = () => {
  return <Container
  className="d-flex align-items-center justify-content-center"
  style={{ minHeight: "100vh" }}
>
  <div className="w-100" style={{ maxWidth: "450px" }}>
    <ForgotPassword />
    </div>
    </Container>
}

export default ForgotPasswordPage

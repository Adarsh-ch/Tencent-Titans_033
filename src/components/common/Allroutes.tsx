import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Properties from '../../pages/Properties'
import PropertyDetailPage from '../../pages/PropertyDetailPage'
import LoginPage from '../../pages/LoginPage'
import RegisterPage from '../../pages/RegisterPage'
import ForgotPasswordPage from '../../pages/ForgotPasswordPage'
import UserDashboardPage from '../../pages/UserDashboardPage'
import AdminPage from '../../pages/AdminPage'

const Allroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/:id" element={<PropertyDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/user/dashboard" element={<UserDashboardPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
  )
}

export default Allroutes

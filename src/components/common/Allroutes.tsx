import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Properties from '../../pages/Properties'
import PropertyDetailPage from '../../pages/PropertyDetailPage'
import LoginPage from '../../pages/LoginPage'
import RegisterPage from '../../pages/RegisterPage'
import ForgotPasswordPage from '../../pages/ForgotPasswordPage'
import UserDashboardPage from '../../pages/UserDashboardPage'
import {AdminPage} from '../Admin/AdminPage';
import PostYourProperty from '../Property/PostYourProperty'
import { useAuth } from '../../context/AuthContext'
import { useEffect } from 'react'
import { SET_USER_ID } from '../../redux/actionTypes'
import { useDispatch } from 'react-redux'
import PrivateRoute from './PrivateRoute'

const Allroutes = () => {
  const {currentUser} = useAuth();
  const dispatch = useDispatch();
  console.log(currentUser)

  useEffect(()=> {
    dispatch({type:SET_USER_ID,payload:currentUser?.email})
  },[currentUser])

  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/:id" element={<PropertyDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/user/dashboard" element={<UserDashboardPage />} />
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path='/postyourproperty' element={<PrivateRoute/>} />
      </Routes>
     
  )
}

export default Allroutes

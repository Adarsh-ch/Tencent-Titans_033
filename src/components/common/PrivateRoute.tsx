import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import PostYourProperty from '../Property/PostYourProperty';
import { useNavigate } from 'react-router-dom';

const PrivateRoute:React.FC = () => {
    const user_id = useSelector((state: RootState) => state.user.user_id);
     const navigate = useNavigate();

     useEffect(() => {
        if (!user_id) {
          navigate('/login');
        }
      }, [user_id, navigate]);
    
      if (user_id) {
        return <PostYourProperty />;
      }
    
   

    

  return null;
}

export default PrivateRoute

import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { SET_USER_ID } from '../../redux/actionTypes';
import { useDispatch } from 'react-redux';
import '../../styles/UserDashboard.css'

const UserDashboard: React.FC = () => {
  const {logout} = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleSignOut = () => {
    logout();
    navigate('/');
  }
  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };
  const renderContent = () => {
    switch (activeButton) {
      case 'info':
        return <div>Your Info Content</div>;
      case 'wishlist':
        return <div>Your Wishlist Content</div>;
      case 'listings':
        return <div>Your Listings Content</div>;
      case 'payments':
        return <div>Your Payments Content</div>;
      default:
        return <div>Select an option from the left sidebar</div>;
    }
  };
  return (
  <>
  <div style={{minHeight:'100vh'}} className='outer-container'>  

   
   <div className='Left-sidebar'>
   <p>Manage your Account</p>
   <hr />

   <button
          className={activeButton === 'info' ? 'active' : ''}
          onClick={() => handleButtonClick('info')}
        >
          Your info
        </button>
   <button
          className={activeButton === 'wishlist' ? 'active' : ''}
          onClick={() => handleButtonClick('wishlist')}
        >
          Your Wishlist
        </button>
        <button
          className={activeButton === 'listings' ? 'active' : ''}
          onClick={() => handleButtonClick('listings')}
        >
          Your Listings
        </button>
        <button
          className={activeButton === 'payments' ? 'active' : ''}
          onClick={() => handleButtonClick('payments')}
        >
          Your Payments
        </button>
   </div>
   <div className='Right-sidebar'>{renderContent()}</div>
   

    {/* <button onClick={handleSignOut}>Sign Out</button> */}
   
  </div>


  </>
  )
};

export default UserDashboard;

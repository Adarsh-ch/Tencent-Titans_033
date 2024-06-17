import React, { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../../styles/UserDashboard.css';
import { RootState } from '../../redux/store';
import PropertyCard from '../Property/PropertyCard';
import Footer from '../common/Footer';
import { FaSquareWhatsapp } from "react-icons/fa6";

const UserDashboard: React.FC = () => {

  const location = useLocation();
  const [activeButton, setActiveButton] = useState<string>('info');
  const { user_wishlist, user_listing } = useSelector((store: RootState) => store.user);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get('section');
    if (section) {
      setActiveButton(section);
    }
  }, [location.search]);


  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const renderContent = () => {
    switch (activeButton) {
      case 'info':
        return (
          <div className='user-info'>
            <p>Edit your profile</p>
            <hr />
            <form action="">
              <label htmlFor="">Name:
                <input type="text" placeholder='Edit-Name'/>
              </label>
              <label htmlFor="">
                Address:
                <input type="text" placeholder='Edit-address'/>
              </label>
              <label htmlFor="">Mobile Phone:
                <span>9131######## ✅</span>
              </label>
              <label htmlFor="">
                <FaSquareWhatsapp /> Get WhatsApp update <input type="checkbox" />
              </label>
            </form>
          </div>
        );
      case 'wishlist':
        return (
          <div className='wishlist-div'>
            <div className="property-list">
              {user_wishlist.map((property: any) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        );
      case 'listings':
        return (
          <div>
            <div className="property-list">
              {user_listing.map((property: any) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        );
      case 'payments':
        return <div>Your Payments Content</div>;
      default:
        return <div>Select an option from the left sidebar</div>;
    }
  };

  return (
    <>
      <div className='outer-container'>
        <div className='Left-sidebar'>
          <p>Manage your Account</p>
          <hr />
          <button
            className={activeButton === 'info' ? 'active' : ''}
            onClick={() => handleButtonClick('info')}
          >
            Your Info
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
      </div>
      <Footer />
    </>
  );
};

export default UserDashboard;

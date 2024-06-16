import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../../styles/navbar.css';
import logo from '../../assets/Images/logo.png';
import { useAuth } from '../../context/AuthContext';
import { useWishlist } from '../../hooks/useWishList';
import WishList from '../Property/WishList';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const Navbar: React.FC = () => {
  const user = useSelector((store:RootState) => store.user);
  const { fetchWishlist } = useWishlist(user.user_id);
  const [wishlistCount, setWishlistCount] = useState(0);
  const { logout } = useAuth();

  useEffect(() => {
    fetchWishlist();
    //console.log(user)
  }, [user.user_id]);

  useEffect(() => {
      setWishlistCount(user.user_wishlist.length);
  }, [user.user_wishlist]);

  return (
    <nav className="nav-bar">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive ? { color: 'green' } : { color: 'black' }
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/properties"
          style={({ isActive }) =>
            isActive ? { color: 'green' } : { color: 'black' }
          }
        >
          Properties
        </NavLink>
        <NavLink
          to={'/postyourproperty'}
          style={({ isActive }) =>
            isActive ? { color: 'green' } : { color: 'black' }
          }
        >
          <button
            style={{
              color: 'white',
              backgroundColor: 'green',
              border: 'none',
              borderRadius: '2px',
              padding: '4px 8px',
            }}
          >
            Post Your Property
          </button>
        </NavLink>
        {user.user_id ? (
          <>
            <button
              className="btn items fs-5"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
              style={{border:'none',background:'none'}}
            >
              <i className="fa-regular fa-bell"></i><span className='count '>{wishlistCount}</span>
            </button>

            <div
              className="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">
                  Your Wishlist
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <WishList />
              </div>
            </div>

            <div className="dropdown d-inline py-3">
              <button
                className="btn dropdown"
                type="button"
                data-bs-display="static"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa-regular fa-circle-user fs-3"></i>
              </button>
              <ul className="dropdown-menu dropdown-menu-lg-end ">
                <li>
                  <Link className="dropdown-item" to="/user/dashboard">
                    Profile
                  </Link>
                </li>
                <hr />
                <li>
                  <Link className="dropdown-item" to="/user/dashboard">
                    Your Properties
                  </Link>
                </li>
                <hr />
                <li>
                  <button
                    className="btn dropdown-item"
                    onClick={() => logout()}
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              style={({ isActive }) =>
                isActive ? { color: 'green' } : { color: 'black' }
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              style={({ isActive }) =>
                isActive ? { color: 'green' } : { color: 'black' }
              }
            >
              Sign Up
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

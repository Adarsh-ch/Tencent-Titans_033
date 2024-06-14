import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../styles/navbar.css';
import logo from '../../assets/Images/logo.png';
import { useAuth } from '../../context/AuthContext';

const Navbar: React.FC = () => {
  const { currentUser } = useAuth();
  const {logout} = useAuth();

  return (
    <nav className="nav-bar">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive ? { color: 'rgb(72,176,145)' } : { color: 'black' }
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/properties"
          style={({ isActive }) =>
            isActive ? { color: 'rgb(72,176,145)' } : { color: 'black' }
          }
        >
          Properties
        </NavLink>
        <NavLink
          to={'/postyourproperty'}
          style={({ isActive }) =>
            isActive ? { color: 'rgb(72,176,145)' } : { color: 'black' }
          }
        >
          <button
            style={{
              color: 'white',
              backgroundColor: 'rgb(72,176,145)',
              border: 'none',
              padding: '4px 8px',
            }}
          >
            Post Your Property
          </button>
        </NavLink>
        {currentUser ? (
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
                <Link className="dropdown-item" to="/user/dashboard" >
                  Profile
                </Link>
              </li>
              <hr />
              <li>
                <Link className="dropdown-item" to="/user/dashboard" >
                  Your Properties
                </Link>
              </li>
              <hr />
              <li>
                <button className="btn dropdown-item" onClick={()=>logout()}>
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <NavLink
              to="/login"
              style={({ isActive }) =>
                isActive ? { color: 'rgb(72,176,145)' } : { color: 'black' }
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              style={({ isActive }) =>
                isActive ? { color: 'rgb(72,176,145)' } : { color: 'black' }
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

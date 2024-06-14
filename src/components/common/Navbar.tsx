import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../styles/navbar.css';
import logo from '../../assets/Images/logo.png';
import { useAuth } from '../../context/AuthContext';

const Navbar: React.FC = () => {
  const { currentUser } = useAuth();
  // console.log(currentUser?.updateProfile,color='rgb(72,176,145)')
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
              borderRadius:'2px',
              padding: '4px 8px',
            }}
          >
            Post Your Property
          </button>
        </NavLink>
        {currentUser ? (<>
          <button className='fs-4 items' style={{border:'none',background:'none'}}><i className="fa-regular fa-bell"></i><span className='count'>{0}</span></button>
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

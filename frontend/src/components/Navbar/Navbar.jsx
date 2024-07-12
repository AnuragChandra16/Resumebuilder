import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { RiLoginCircleLine, RiLogoutCircleRLine } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { logoutAction } from '../../redux/slice/authSlice';


const Navbar = ({ username }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutAction());
    // remove the user from storage
    localStorage.removeItem("userInfo");
    // redirect to the main page
    navigate('/');
  };

  return (
    <>
    <div className="flex justify-between items-center py-0 px-27 fixed top-0  left-7 right-7 z-50 mt-2">
      <Link to="/">
      
      
      <div className="flex justify-start">
        <p className="text-3xl font-style: italic font-bold text-gray-1500">
          Welcome, {username ? username : 'Guest'}
        </p>
      </div>
      </Link>
      
      <div className="flex items-center space-x-2">
        {!username ? (
          <>
            <Link
              to="/register"
              className="relative inline-flex items-center gap-x-1.5 rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <FaRegUser className="-ml-0.5 h-5 w-5" aria-hidden="true" />
              Register
            </Link>
            
            <Link
              to="/login"
              className="relative inline-flex items-center gap-x-1.5 rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 animate-bounce"
            >
              <RiLoginCircleLine className="-ml-0.5 h-5 w-5" aria-hidden="true" />
              Login
            </Link>
          </>
        ) : (
          <button
            onClick={logoutHandler}
            className="relative inline-flex items-center gap-x-1.5 rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <RiLogoutCircleRLine className="-ml-0.5 h-5 w-5" aria-hidden="true" />
            Logout
          </button>
        )}
      </div>
      
    </div>
    
    </>
  );
}

export default Navbar;

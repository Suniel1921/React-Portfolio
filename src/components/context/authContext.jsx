// authContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: '',
  });

  // Adding headers for private routes (default axios)
  axios.defaults.headers.common['Authorization'] = auth.token;

  // Saving user token in on browser (if user refresh page then token not removed)
  useEffect(() => {
    const data = localStorage.getItem('token');

    if (data) {
      const parseData = JSON.parse(data);
      setAuth((prevAuth) => ({
        ...prevAuth,
        user: parseData.userExit,
        token: parseData.token,
      }));
    }
  }, []); // Empty dependency array to run the effect only once on mount

  return <UserContext.Provider value={auth}>{children}</UserContext.Provider>;
};

const useAuth = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useAuth must be used within a UserProvider');
  }

  return context;
};

export { useAuth, UserProvider };

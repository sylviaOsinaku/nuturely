import React, { createContext, useState, useEffect } from 'react';
import PageContext from './PageContext';

// Create a UserContext to manage user data
const UserContext = createContext({
  user: null,
  userProfile: null,
  signUp: (userData) => {},
  logOut: () => {},
  updateUserProfile: (profileData) => {},
});

export const UserProvider = (props) => {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);

  // Handle user session persistence (mock example)
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const signUp = (userData) => {
    setUser(userData);
    setUserProfile(userData.profile);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logOut = () => {
    setUser(null);
    setUserProfile(null);
    localStorage.removeItem('user');
  };

  const updateUserProfile = (profileData) => {
    setUserProfile(profileData);
    setUser({ ...user, profile: profileData });
  };

  const contextValue = {
    user,
    userProfile,
    signUp,
    logOut,
    updateUserProfile,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;

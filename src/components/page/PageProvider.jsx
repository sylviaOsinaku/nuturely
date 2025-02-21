import React, { useState, useEffect } from 'react';
import PageContext from './PageContext';

const PageProvider = (props) => {
  const [user, setUser] = useState(null); // Store the user data (null means not logged in)
  const [userProfile, setUserProfile] = useState(null); // Store user profile details
  const [currentPage, setCurrentPage] = useState('intro'); // Track the current page in the app

  // Set up user profile (can be from localStorage, mock data, or API)
  useEffect(() => {
    const storedUser = localStorage.getItem('user'); // Mocking persistent login
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setCurrentPage('dashboard'); // Route to dashboard if user is logged in
    }
  }, []);

  // Mocking a sign-up function that saves the user data
  const signUp = (userData) => {
    setUser(userData);
    setUserProfile(userData.profile);
    localStorage.setItem('user', JSON.stringify(userData)); // Save user to localStorage
    setCurrentPage('profileSetup'); // Route to profile setup page after sign-up
  };

  // Mocking a logout function
  const logOut = () => {
    setUser(null);
    setUserProfile(null);
    localStorage.removeItem('user'); // Clear user data from localStorage
    setCurrentPage('intro'); // Route to intro page after logout
  };

  // Update the user profile
  const updateUserProfile = (profileData) => {
    setUserProfile(profileData);
    setUser({ ...user, profile: profileData }); // Update user with new profile
    setCurrentPage('dashboard'); // Navigate to the dashboard after profile setup
  };

  // Change the current page
  const changePage = (pageName) => {
    console.log("HEYYYY")
    setCurrentPage(pageName); // Change the current page based on action
    console.log(currentPage)
  };

  // Context value that will be accessible across the app
  const userContextValue = {
    user,
    userProfile,
    currentPage,
    signUp,
    logOut,
    updateUserProfile,
    changePage,
  };

  return (
    <PageContext.Provider value={userContextValue}>
      {props.children}
    </PageContext.Provider>
  );
};

export default PageProvider;

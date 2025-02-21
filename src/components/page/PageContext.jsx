import React from 'react';

const PageContext = React.createContext({
  user: null,
  userProfile: null,
  currentPage: "intro",
  signUp: () => {},
  logOut: () => {},
  updateUserProfile: () => {},
  changePage: (pageKeyword) => {}
});

export default PageContext;
